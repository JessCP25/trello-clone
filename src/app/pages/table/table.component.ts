import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Producto } from '../../models/producto.model';
import { HttpClient } from '@angular/common/http';
import { CdkTableModule } from '@angular/cdk/table';
import { DataSourceProduct } from './data-source';
import { BtnComponent } from '../../components/btn/btn.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NavbarComponent, CdkTableModule, BtnComponent, ReactiveFormsModule],
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {
  // products: Producto[] = [];
  dataSource = new DataSourceProduct();
  columns: string[] = ['id', 'title', 'price', 'image', 'actions'];
  input = new FormControl('', { nonNullable: true });

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Producto[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((res) => {
        this.dataSource.init(res);
      });

    this.input.valueChanges
      .pipe(debounceTime(300))
      .subscribe((res) => this.dataSource.find(res));
  }

  update(producto: Producto) {
    this.dataSource.update(producto.id, { price: 20 });
  }
}
