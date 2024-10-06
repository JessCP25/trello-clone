import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import {
  faClose,
  faCheckToSlot,
  faBars,
  faUser,
  faTag,
  faCheckSquare,
  faClock,
} from '@fortawesome/free-solid-svg-icons';
import { BtnComponent } from '../btn/btn.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToDo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-dialog',
  standalone: true,
  imports: [BtnComponent, FontAwesomeModule],
  templateUrl: './todo-dialog.component.html',
})
export class TodoDialogComponent {
  constructor(private dialogRef: DialogRef<boolean>,
    @Inject(DIALOG_DATA) data: ToDo
  ) {
    this.todo = data;
  }

  faClose = faClose;
  faCheckToSlot = faCheckToSlot;
  faBars = faBars;
  faUser = faUser;
  faTag = faTag;
  faCheckSquare = faCheckSquare;
  faClock = faClock;

  todo: ToDo;

  close() {
    this.dialogRef.close(true);
  }
}
