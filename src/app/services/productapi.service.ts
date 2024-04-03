import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductapiService {

  // dependancies injectable method
  constructor(private http: HttpClient) { }

  prodApiUrl="http://localhost:3000/Movie"

  getShowDetails(){
    return this.http.get(this.prodApiUrl)
  }
// serach -get api
  searchMovieDetails(id:any){
    return this.http.get(`${this.prodApiUrl}/${id}`)
  }
// Delete Api
  deleteproductDetails(id:any){
    return this.http.delete(`${this.prodApiUrl}/${id}`)
  }
  // Post api --add movie
  postProductDetails(FormData:any){
    return this.http.post(this.prodApiUrl,FormData)
  }
  // Upddate api --update movie
  putProductDetails(FormData:any, id:any){
    return this.http.put(`${this.prodApiUrl}/${id}`,FormData)
  }

  newprodApiUrl="http://localhost:3000"
  searchByCat(cat:any, id:any){
    return this.http.get(`${this.newprodApiUrl}/${cat}/${id}`)
  }

  // stream data represents

  getStreamData(){
    return this.http.get<any[]>('http://localhost:3000/Stream');
  }
}
