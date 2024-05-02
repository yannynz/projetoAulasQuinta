import { Injectable } from '@angular/core';
import { Cliente } from "../interfaces/Cliente";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private clienteUrl = "http://localhost:3000/clientes";
  constructor(private http: HttpClient) {

  }
  clientes: Cliente[] = [
    // { id: "eueueue", nome: "yannsantana", telefone: "9393939" },
    // { id: "sjajsa", nome: "nayy", telefone: "121212" },
    // { id: "euwqiiq", nome: "anny", telefone: "213123" }
  ];

    listar(): Observable<Cliente[]> {
    //return this.clientes;
    return this.http.get<Cliente[]>(this.clienteUrl) as Observable<Cliente[]>;

  }
  remover(id: string) {
    const cliente = this.clientes.find(c => c.id == id);
    if (cliente) {
      const index = this.clientes.indexOf(cliente);
      this.clientes.splice(index, 1);

    }
  }

adicionar(cliente:Cliente){
  const httpHeader={
    headers:{
      "Content-Type":"application/json"
    }
  };
  return this.http.post(this.clienteUrl, cliente,httpHeader)
};

  add(cliente: Cliente) {
    this.clientes.push(cliente);

  }
}
