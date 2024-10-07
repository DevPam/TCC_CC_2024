import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskModalComponent } from '../task-modal/task-modal.component';
import { CommonModule } from '@angular/common';

interface Task {
  title: string;
  date: string;
  category: 'todo' | 'doing' | 'done';
  priority: 'Low' | 'Medium' | 'High';
  info?: string;
}

@Component({
  selector: 'velora-kanban-projeto',
  standalone: true,
  templateUrl: './kanban-projeto.component.html',
  styleUrls: ['./kanban-projeto.component.css'],
  imports: [CommonModule],
})
export class KanbanProjetoComponent {
  toDoTasks: Task[] = [];
  doingTasks: Task[] = [];
  doneTasks: Task[] = [];

  constructor(public dialog: MatDialog) {
    this.loadTasks();  // Carrega as tasks do localStorage
  }

  openDialog(category: 'todo' | 'doing' | 'done', task?: Task): void {
    const isEdit = !!task;
    const originalTitle = task?.title || '';  // Garante que originalTitle seja uma string

    const dialogRef = this.dialog.open(TaskModalComponent, {
      width: '40vw',
      maxWidth: '1000px',
      height: 'auto',
      maxHeight: '70vh',
      data: {
        category,
        task: task ? { ...task } : { title: '', priority: 'Low', date: '', info: '' },  // Usa o título como ID
        isEdit: isEdit  // Flag para identificar se é edição ou criação
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.delete) {
          this.deleteTask(result.title, result.category);  // Deleta baseado no título
        } else if (isEdit) {
          this.updateTask(result, originalTitle);  // Atualiza a task existente com o título original
        } else {
          this.addTask(result);  // Cria uma nova task
        }
      }
    });
  }

  addTask(task: Task): void {
    this.addTaskToCategory(task);
    this.saveTasks();  // Salva no localStorage
  }

  updateTask(updatedTask: Task, originalTitle: string): void {
    if (originalTitle) {
      this.removeTaskFromAllCategories(originalTitle);  // Remover a task com base no título original
    }

    this.addTaskToCategory(updatedTask);
    this.saveTasks();  // Atualiza o localStorage com a task modificada
  }

  addTaskToCategory(task: Task): void {
    if (task.category === 'todo') {
      this.toDoTasks.push(task);
    } else if (task.category === 'doing') {
      this.doingTasks.push(task);
    } else if (task.category === 'done') {
      this.doneTasks.push(task);
    }
  }

  removeTaskFromAllCategories(title: string): void {
    this.toDoTasks = this.toDoTasks.filter(task => task.title !== title);
    this.doingTasks = this.doingTasks.filter(task => task.title !== title);
    this.doneTasks = this.doneTasks.filter(task => task.title !== title);
  }

  deleteTask(title: string, category: 'todo' | 'doing' | 'done'): void {
    if (category === 'todo') {
      this.toDoTasks = this.toDoTasks.filter(task => task.title !== title);
    } else if (category === 'doing') {
      this.doingTasks = this.doingTasks.filter(task => task.title !== title);
    } else if (category === 'done') {
      this.doneTasks = this.doneTasks.filter(task => task.title !== title);
    }
    this.saveTasks();  // Salva as tasks atualizadas no localStorage
  }

  saveTasks(): void {
    const tasks = {
      todo: this.toDoTasks,
      doing: this.doingTasks,
      done: this.doneTasks
    };
    localStorage.setItem('kanbanProjetoTasks', JSON.stringify(tasks));  // Salva com uma chave diferente
  }

  loadTasks(): void {
    const tasks = localStorage.getItem('kanbanProjetoTasks');  // Carrega as tasks do kanban-projeto
    if (tasks) {
      const parsedTasks = JSON.parse(tasks);
      this.toDoTasks = parsedTasks.todo || [];
      this.doingTasks = parsedTasks.doing || [];
      this.doneTasks = parsedTasks.done || [];
    }
  }
}
