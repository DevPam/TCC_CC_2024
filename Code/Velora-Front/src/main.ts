import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { KanbanComponent } from './app/kanban/kanban.component';
import { MeusProjetosComponent } from './app/meus-projetos/meus-projetos.component';
import { MeusPdcasComponent } from './app/meus-pdcas/meus-pdcas.component';
import { KanbanProjetoComponent } from './app/kanban-projeto/kanban-projeto.component';  // Novo componente

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: 'kanban', component: KanbanComponent },
      { path: 'kanban-projeto', component: KanbanProjetoComponent },  // Adicione a rota do novo componente
      { path: 'meus-projetos', component: MeusProjetosComponent },
      { path: 'meus-pdcas', component: MeusPdcasComponent },
      { path: '', redirectTo: '/kanban', pathMatch: 'full' }
    ])
  ]
})
  .catch(err => console.error(err));
