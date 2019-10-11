import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private  http: HttpClient) { }

  getProducts(){
    return this.http.get<any[]>('http://localhost:3000/v1/products');
  }
}
