import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  

  constructor(private _productosService: ProductosService) {}
  listaproductos: any[] = [];
//este es un siglo de vida ngOnInit

  ngOnInit(): void {
      this.obtenerProductos();
  }


  obtenerProductos(){
    this._productosService.obtenerProductos().subscribe({
      next: (value) =>{
        this.listaproductos = value;
        //console.log(value);
      },
      error: (err) =>{
        console.log(err);
      },
      complete:() =>{

      }
    });
  }

}
