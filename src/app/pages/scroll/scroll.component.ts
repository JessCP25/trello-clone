import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HttpClient } from '@angular/common/http';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-scroll',
  standalone: true,
  imports: [NavbarComponent, ScrollingModule],
  templateUrl: './scroll.component.html'
})
export class ScrollComponent implements OnInit{
  products: Producto[] = [];

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get<Producto[]>('https://api.escuelajs.co/api/v1/products').subscribe(res => {
      this.products = res;
    })
  }
}
