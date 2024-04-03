import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserapiService {

  constructor(private http: HttpClient) { }

  userAPI = "http://localhost:3000"

  Profileuserlogin(Profileuser:any){
    return this.http.get(`${this.userAPI}/${Profileuser}`)
  }








}
