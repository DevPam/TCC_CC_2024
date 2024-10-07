import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KanbanComponent } from './kanban/kanban.component';
import { MeusProjetosComponent } from './meus-projetos/meus-projetos.component';
import { MeusPdcasComponent } from './meus-pdcas/meus-pdcas.component';
import { KanbanProjetoComponent } from './kanban-projeto/kanban-projeto.component';  // Novo componente

const routes: Routes = [
  { path: 'kanban', component: KanbanComponent },  // Rota para o Kanban Pessoal
  { path: 'kanban-projeto', component: KanbanProjetoComponent },  // Rota para o Kanban Projeto
  { path: 'meus-projetos', component: MeusProjetosComponent },
  { path: 'meus-pdcas', component: MeusPdcasComponent },
  { path: '', redirectTo: '/kanban', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
