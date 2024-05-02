import { Component } from '@angular/core';
import { Tarefa } from '../../interfaces/Tarefa';
import { TarefaServiceService } from '../../services/tarefa-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-tarefas-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tarefas-component.component.html',
  styleUrl: './tarefas-component.component.css'
})
export class TarefasComponentComponent {
  tarefas: Tarefa[] = [];
  tarefaForm: FormGroup = new FormGroup({});
  constructor(private tarefaserviceService: TarefaServiceService, private formBuilder: FormBuilder) {
    this.tarefaForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      descricao: ['', Validators.required],
      dataVencimento: ['', Validators.required],

    })
  }
  inserir() {
    if (this.tarefaForm.valid) {
      const tarefas: Tarefa = {
        titulo: this.tarefaForm.value.titulo,

        descricao: this.tarefaForm.value.descricao,
        dataVencimento: this.tarefaForm.value.dataVencimento
      }
      this.tarefaForm.reset();
      this.tarefaserviceService.inserir(tarefas);
      alert("CadastroCompleto")
    }else{
      alert("foi preenchido os dados incorretamente")
    }
  }

  listar(): void {
    this.tarefas = this.tarefaserviceService.listar();
  }

  remover(titulo: string): void {
    this.tarefaserviceService.remover(titulo);
    alert("removidoComSUCESS!");
  }
  ngOnInit(): void {
    this.listar();
  }
}
