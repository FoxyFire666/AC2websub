import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TarefaService } from '../services/tarefa.service';

@Component({
  selector: 'app-cadastrar-tarefa',
  standalone: true,
  imports: [FormsModule, RouterLink],
  template: `
    <div class="container">
      <h2>Cadastrar Nova Tarefa</h2>
      <div class="form-group">
        <input type="text" [(ngModel)]="descricao" placeholder="Digite a descrição da tarefa" class="form-control">
        <button (click)="cadastrar()" [disabled]="!descricao" class="btn-cadastrar">Cadastrar</button>
      </div>
      <a routerLink="/lista" class="link">Ver Lista de Tarefas</a>
    </div>
  `,
  styles: [`
    .container {
      max-width: 600px;
      margin: 20px auto;
      padding: 20px;
    }
    .form-group {
      display: flex;
      gap: 10px;
      margin-bottom: 20px;
    }
    .form-control {
      flex: 1;
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    .btn-cadastrar {
      padding: 8px 16px;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .btn-cadastrar:disabled {
      background-color: #cccccc;
      cursor: not-allowed;
    }
    .link {
      color: #2196F3;
      text-decoration: none;
    }
    .link:hover {
      text-decoration: underline;
    }
  `]
})
export class CadastrarTarefaComponent {
  descricao: string = '';

  constructor(private tarefaService: TarefaService) { }

  cadastrar(): void {
    if (this.descricao.trim()) {
      this.tarefaService.adicionar(this.descricao);
      this.descricao = '';
    }
  }
}