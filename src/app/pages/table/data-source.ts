import { DataSource } from '@angular/cdk/collections';
import { Producto } from '../../models/producto.model';
import { BehaviorSubject, Observable } from 'rxjs';

export class DataSourceProduct extends DataSource<Producto> {
  data = new BehaviorSubject<Producto[]>([]);
  originalData: Producto[] = [];

  connect(): Observable<Producto[]> {
    return this.data;
  }

  init(data: Producto[]) {
    this.originalData = data;
    this.data.next(data);
  }

  update(id: Producto['id'], changes: Partial<Producto>) {
    const productos = this.data.getValue();
    const productoIndex = productos.findIndex((item) => item.id === id);
    if (productoIndex !== -1) {
      productos[productoIndex] = {
        ...productos[productoIndex],
        ...changes,
      };
      this.data.next(productos);
    }
  }

  find(query: string){
    const newProductos = this.originalData.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
    this.data.next(newProductos);
  }

  disconnect(): void {}
}
