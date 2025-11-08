import { Injectable } from '@angular/core'; // Faz com que o serviço possa ser injetado em outros componentes ou serviços
import { Tarefa } from '../models/tarefa.interface'; // Importa a interface Tarefa para tipagem

@Injectable({
  providedIn: 'root' // Declara que o serviço está disponível em toda a aplicação
})
export class TarefaService {
  private tarefas: Tarefa[] = []; // Array para armazenar as tarefas
  private nextId = 1; // Id incremental para novas tarefas

  constructor() { }

  listar(): Tarefa[] { // Retorna a lista de tarefas
    return this.tarefas;
  }

  adicionar(descricao: string): void { // Adiciona uma nova tarefa
    const novaTarefa: Tarefa = {
      id: this.nextId++,
      descricao,
      concluida: false
    };
    this.tarefas.push(novaTarefa);
  }

  remover(id: number): void {
    const index = this.tarefas.findIndex(tarefa => tarefa.id === id);
    if (index !== -1) {
      this.tarefas.splice(index, 1);
    }
  }

  marcarConcluida(id: number): void {
    const tarefa = this.tarefas.find(t => t.id === id);
    if (tarefa) {
      tarefa.concluida = !tarefa.concluida;
    }
  }

  contarTarefas(): number {
    return this.tarefas.length;
  }
}