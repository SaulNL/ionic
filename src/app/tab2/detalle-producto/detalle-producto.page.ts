import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
})
export class DetalleProductoPage implements OnInit {

  producto:any;
  constructor(private productoService: ProductosService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe({
      next:(value: any)=>{
        this.obtenerDetalleProducto(value.idProducto)
      }
    })
  }

  obtenerDetalleProducto(idProducto:number){
   this.productoService.otenerProductosById(idProducto)
   .subscribe({
    next: (value)=>{
      console.log(value);
      this.producto = value;
    }
   })
  }
}
