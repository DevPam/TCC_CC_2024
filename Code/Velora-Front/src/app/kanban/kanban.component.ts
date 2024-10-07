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
  selector: 'velora-kanban',
  standalone: true,
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css'],
  imports: [CommonModule, TaskModalComponent],
})
export class KanbanComponent {
  toDoTasks: Task[] = [];
  doingTasks: Task[] = [];
  doneTasks: Task[] = [];

  constructor(public dialog: MatDialog) {
    this.loadTasks();  
  }

  openDialog(category: 'todo' | 'doing' | 'done', task?: Task): void {
    const isEdit = !!task;
    const originalTitle = task?.title || '';  

    const dialogRef = this.dialog.open(TaskModalComponent, {
      width: '40vw',
      maxWidth: '1000px',
      height: 'auto',
      maxHeight: '70vh',
      data: {
        category,
        task: task ? { ...task } : { title: '', priority: 'Low', date: '', info: '' },  
        isEdit: isEdit  
      }
    });

    //Deletando cartões :)
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.delete) {
          this.deleteTask(result.title, result.category);  
        } else if (isEdit) {
          this.updateTask(result, originalTitle);  
        } else {
          this.addTask(result);  
        }
      }
    });
  }
  
  addTask(task: Task): void {
    this.addTaskToCategory(task);
    this.saveTasks();  
  }

  updateTask(updatedTask: Task, originalTitle: string): void {
    // Ve se o título original existe antes de remover
    if (originalTitle) {
      this.removeTaskFromAllCategories(originalTitle);  
    }

    this.addTaskToCategory(updatedTask);

    this.saveTasks();  
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
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  loadTasks(): void {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      const parsedTasks = JSON.parse(tasks);
      this.toDoTasks = parsedTasks.todo || [];
      this.doingTasks = parsedTasks.doing || [];
      this.doneTasks = parsedTasks.done || [];
    }
  }
}
