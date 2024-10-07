import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-modal',
  standalone: true,
  templateUrl: './task-modal.component.html',
  styleUrls: ['./task-modal.component.css'],
  imports: [FormsModule, CommonModule]
})
export class TaskModalComponent {
  taskTitle: string = '';
  taskDate: string = ''; 
  taskPriority: string = 'Low';
  taskInfo: string = '';
  isEdit: boolean = false;
  showError: boolean = false;  

  constructor(
    public dialogRef: MatDialogRef<TaskModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { category: 'todo' | 'doing' | 'done', task?: any, isEdit: boolean }
  ) {
    if (data.isEdit && data.task) {
      this.isEdit = true;
      this.taskTitle = data.task.title;
      this.taskPriority = data.task.priority;
      this.taskInfo = data.task.info;
      if (data.task.date && data.task.date !== 'Data não definida') {
        this.taskDate = this.formatDateForInput(data.task.date);
      }
    }
  }

  save(): void {
    if (!this.taskTitle) {
      this.showError = true;
      return;
    }

    let formattedDate: string;

    if (this.taskDate) {
      formattedDate = this.formatDate(this.taskDate); 
    } else {
      formattedDate = 'Data não definida'; 
    }

    
    this.dialogRef.close({
      title: this.taskTitle,  
      date: formattedDate,
      priority: this.taskPriority,
      info: this.taskInfo,
      category: this.data.category
    });
  }

  deleteTask(): void {
    if (this.taskTitle) {
      this.dialogRef.close({ delete: true, title: this.taskTitle, category: this.data.category });
    }
  }

  close(): void {
    this.dialogRef.close();
  }

  
  formatDateForInput(date: string): string {
    const [day, month, year] = date.split('/');
    if (day && month && year) {
      return `${year}-${month}-${day}`;
    }
    return ''; 
  }

 
  formatDate(date: string): string {
    const [year, month, day] = date.split('-');
    if (year && month && day) {
      return `${day}/${month}/${year}`; 
    }
    return 'Data não definida'; 
  }
}
