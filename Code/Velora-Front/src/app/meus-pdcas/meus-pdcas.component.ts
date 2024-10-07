import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meus-pdcas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './meus-pdcas.component.html',
  styleUrls: ['./meus-pdcas.component.css']
})
export class MeusPdcasComponent {
  isModalOpen: boolean = false;
  titulo: string = '';
  selectedColumn: string = ''; 
  todoTasks: string[] = []; 
  doneTasks: string[] = []; 
  doingTasks: string[] = []; 
  blockedTasks: string[] = []; 

  openModal(column: string) {
    this.isModalOpen = true;
    this.selectedColumn = column; 
  }

  closeModal() {
    this.isModalOpen = false;
    this.titulo = ''; 
    this.selectedColumn = ''; 
  }

  saveTitle() {
    if (this.titulo.trim()) {
      if (this.selectedColumn === 'todo') {
        this.todoTasks.push(this.titulo); 
      } else if (this.selectedColumn === 'done') {
        this.doneTasks.push(this.titulo); 
      } else if (this.selectedColumn === 'doing') {
        this.doingTasks.push(this.titulo); 
      } else if (this.selectedColumn === 'blocked') {
        this.blockedTasks.push(this.titulo); 
      }
      this.saveTasks(); 
      this.closeModal();
    } else {
      alert('Por favor, insira um título.');
    }
  }

  deleteTask(index: number, column: string) {
    if (column === 'todo') {
      this.todoTasks.splice(index, 1); // Remove a tarefa da coluna "To Do"
    } else if (column === 'done') {
      this.doneTasks.splice(index, 1); // Remove a tarefa da coluna "Done"
    } else if (column === 'doing') {
      this.doingTasks.splice(index, 1); // Remove a tarefa da coluna "Doing"
    } else if (column === 'blocked') {
      this.blockedTasks.splice(index, 1); // Remove a tarefa da coluna "Blocked"
    }
    this.saveTasks(); // Atualiza o LocalStorage
  }

  saveTasks() {
    localStorage.setItem('todoTasks', JSON.stringify(this.todoTasks)); // Salva a lista "To Do"
    localStorage.setItem('doneTasks', JSON.stringify(this.doneTasks)); // Salva a lista "Done"
    localStorage.setItem('doingTasks', JSON.stringify(this.doingTasks)); // Salva a lista "Doing"
    localStorage.setItem('blockedTasks', JSON.stringify(this.blockedTasks)); // Salva a lista "Blocked"
  }

  loadTasks() {
    const savedTodoTasks = localStorage.getItem('todoTasks'); // Carrega as tarefas "To Do"
    const savedDoneTasks = localStorage.getItem('doneTasks'); // Carrega as tarefas "Done"
    const savedDoingTasks = localStorage.getItem('doingTasks'); // Carrega as tarefas "Doing"
    const savedBlockedTasks = localStorage.getItem('blockedTasks'); // Carrega as tarefas "Blocked"

    if (savedTodoTasks) {
      this.todoTasks = JSON.parse(savedTodoTasks);
    }
    if (savedDoneTasks) {
      this.doneTasks = JSON.parse(savedDoneTasks);
    }
    if (savedDoingTasks) {
      this.doingTasks = JSON.parse(savedDoingTasks);
    }
    if (savedBlockedTasks) {
      this.blockedTasks = JSON.parse(savedBlockedTasks);
    }
  }

  ngOnInit() {
    this.loadTasks(); // Carrega as tarefas salvas no LocalStorage ao iniciar
  }
}
