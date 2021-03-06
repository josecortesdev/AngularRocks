import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  // Reutilizo un backend que hice con Spring
  // De momento dejo el nombre 'producto' para no tardar mucho en la prueba
  // Para una aplicación en la que vayan a trabajar más personas probablemente debería cambiar el nombre 'producto' por uno como 'banda' para que se entienda mejor

  productoURL = 'http://localhost:8080/producto/';
  

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(this.productoURL + 'lista');
  }

  public cartera(idcartera: string): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(this.productoURL + `cartera/${idcartera}`);  
    
  }

  public duplicado(id: number): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(this.productoURL + `duplicado/${id}`);
  }

  public detail(id: number): Observable<Producto> {
    return this.httpClient.get<Producto>(this.productoURL + `detail/${id}`);
  }

  public detailName(nombre: string): Observable<Producto> {
    return this.httpClient.get<Producto>(this.productoURL + `detailname/${nombre}`);
  }

  public save(producto: Producto): Observable<any> {
    return this.httpClient.post<any>(this.productoURL + 'create', producto);
  }

  public addacartera(producto: Producto): Observable<any> {
    return this.httpClient.post<any>(this.productoURL + 'addacartera', producto);
  }

  public update(id: number, producto: Producto): Observable<any> {
    return this.httpClient.put<any>(this.productoURL + `update/${id}`, producto);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.productoURL + `delete/${id}`);
  }


}
