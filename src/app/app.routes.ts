import { Routes } from '@angular/router';
import { CadastrarTarefaComponent } from './components/cadastrar-tarefa.component';
import { ListaTarefasComponent } from './components/lista-tarefas.component';

export const routes: Routes = [
  { path: '', redirectTo: '/cadastrar', pathMatch: 'full' },
  { path: 'cadastrar', component: CadastrarTarefaComponent },
  { path: 'lista', component: ListaTarefasComponent }
];
