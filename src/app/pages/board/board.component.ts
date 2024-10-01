import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import {CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Column, ToDo } from '../../models/todo.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-board',
  standalone: true,
  imports: [NavbarComponent, DragDropModule, CommonModule],
  templateUrl: './board.component.html',
  styles: `
    /* Animate items as they're being sorted. */
.cdk-drop-list-dragging .cdk-drag {
  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
}

/* Animate an item that has been dropped. */
.cdk-drag-animating {
  transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
}
  `
})
export class BoardComponent {

  columns: Column[] = [
    {
      title: 'ToDo',
      todos: [
        {
          id: '1',
          title: 'Make dishes'
        },
        {
          id: '2',
          title: 'Buy a unicorn'
        }
      ]
    },
    {
      title: 'Doing',
      todos: [
        {
          id: '3',
          title: 'Watch Angular Path in Platzi'
        }
      ]
    },
    {
      title: 'Done',
      todos: [
        {
          id: '4',
          title: 'Play video games'
        }
      ]
    }
  ]

  todos: ToDo[] = [
  ]

  doing: ToDo[] = [
  ];
  done: ToDo[] = [
  ];

  drop(e: CdkDragDrop<ToDo[]>){
    if(e.previousContainer === e.container){
      moveItemInArray(this.todos, e.previousIndex, e.currentIndex)
    }else{
      transferArrayItem(
        e.previousContainer.data,
        e.container.data,
        e.previousIndex,
        e.currentIndex,
      )
    }
  }

  addColumn(){
    this.columns.push({
      title: 'New Column',
      todos: []
    })
  }
}
