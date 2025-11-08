import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { TarefaService } from '../services/tarefa.service';
import { Tarefa } from '../models/tarefa.interface';
//Importando os módulos e serviços necessários

//Componente para exibir a lista de tarefas
@Component({
  selector: 'app-lista-tarefas',
  standalone: true,
  imports: [RouterLink, NgFor, NgIf],
  template: `
    <div class="container">
      <h2>Lista de Tarefas</h2>
      <p class="contador">Total de tarefas: {{ tarefaService.contarTarefas() }}</p>
      
      <div *ngIf="tarefas.length === 0" class="mensagem-vazia">
        Nenhuma tarefa cadastrada
      </div>

      <ul class="lista-tarefas" *ngIf="tarefas.length > 0">
        <li *ngFor="let tarefa of tarefas" [class.concluida]="tarefa.concluida">
          <span class="descricao">{{ tarefa.descricao }}</span>
          <div class="acoes">
            <button (click)="concluir(tarefa.id)" class="btn-concluir">
              {{ tarefa.concluida ? 'Desfazer' : 'Concluir' }}
            </button>
            <button (click)="remover(tarefa.id)" class="btn-remover">Remover</button>
          </div>
        </li>
      </ul>

      <a routerLink="/cadastrar" class="link">Cadastrar Nova Tarefa</a>
    </div>
  `,
  //Estilos para o componente
  styles: [`
    .container {
      max-width: 600px;
      margin: 20px auto;
      padding: 20px;
    }
    .contador {
      color: #666;
      margin-bottom: 20px;
    }
    .mensagem-vazia {
      text-align: center;
      color: #666;
      padding: 20px;
      background: #f5f5f5;
      border-radius: 4px;
    }
    .lista-tarefas {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .lista-tarefas li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      margin-bottom: 10px;
      background: #f5f5f5;
      border-radius: 4px;
    }
    .lista-tarefas li.concluida .descricao {
      text-decoration: line-through;
      color: #666;
    }
    .acoes {
      display: flex;
      gap: 10px;
    }
    .btn-concluir {
      padding: 6px 12px;
      background-color: #2196F3;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .btn-remover {
      padding: 6px 12px;
      background-color: #f44336;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .link {
      display: block;
      margin-top: 20px;
      color: #2196F3;
      text-decoration: none;
    }
    .link:hover {
      text-decoration: underline;
    }
  `]
})
//Definição da classe do componente
export class ListaTarefasComponent { //Lista de tarefas obtida do serviço
  get tarefas(): Tarefa[] {
    return this.tarefaService.listar();
  }

  constructor(public tarefaService: TarefaService) { }

  remover(id: number): void { 
    this.tarefaService.remover(id);
  }

  concluir(id: number): void {
    this.tarefaService.marcarConcluida(id);
  }
}