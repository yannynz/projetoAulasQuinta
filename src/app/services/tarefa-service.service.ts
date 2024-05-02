import { Injectable } from '@angular/core';
import { Tarefa } from '../interfaces/Tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaServiceService {
  constructor() { }
  tarefa: Tarefa[] = [
    {
      titulo: "sim",
      descricao: "talvez",
      dataVencimento: "2208034"
    },
    {
      titulo: "sim",
      descricao: "talvez",
      dataVencimento: "2208034"
    },
    {
      titulo: "sim",
      descricao: "talvez",
      dataVencimento: "2208034"
    }
  ];

  inserir(tarefa:Tarefa) {
    this.tarefa.push(tarefa);
  }
  listar() {
    return this.tarefa;
  }
  remover(titulo: string) {
    const cliente = this.tarefa.find(c => c.titulo == titulo);
    if (cliente) {
      const index = this.tarefa.indexOf(cliente);
      this.tarefa.splice(index,1);

    }
  }

}
