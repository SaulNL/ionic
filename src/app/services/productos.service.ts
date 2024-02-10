import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductosService {

constructor(private _http: HttpClient) { }

obtenerProductos():Observable<any>{
  return this._http.get(' https://api.escuelajs.co/api/v1/products');
}

obtenerCategorias(): Observable<any> {
  return this._http.get('https://api.escuelajs.co/api/v1/categories');
}

obtenerUsuarios(): Observable<any>{
  return this._http.get('https://api.escuelajs.co/api/v1/users');  
}

otenerProductosById(idProducto: number){
 // console.log(this.)
  return this._http.get(`https://api.escuelajs.co/api/v1/products/${idProducto}`);
}


}
