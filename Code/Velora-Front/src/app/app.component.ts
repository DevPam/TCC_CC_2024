import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';  // Importe o RouterModule
import { HeaderComponent } from './header/header.component';
import { KanbanComponent } from './kanban/kanban.component';
import { MeusProjetosComponent } from './meus-projetos/meus-projetos.component';
import { MeusPdcasComponent } from './meus-pdcas/meus-pdcas.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, KanbanComponent, MeusProjetosComponent, MeusPdcasComponent],  // Adicione RouterModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isSidebarOpen = false;

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
