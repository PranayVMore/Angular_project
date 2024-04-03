import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductapiService } from 'src/app/services/productapi.service';


@Component({
  selector: 'app-allshow',
  templateUrl: './allshow.component.html',
  styleUrls: ['./allshow.component.css']
})
export class AllshowComponent{
searchResults: any;
searchKeyword: any;
model: any;
  constructor(private serve: ProductapiService, private router:Router ){ }

    ngOnInit(){
      this.getDetails()
  }

  ProductData:any
  getDetails(){
   this.serve.getShowDetails().subscribe((data)=>{
    this.ProductData= data
   console.log(this.ProductData)

   })
 }
 showProduct(cat:any, id:any){
 this.router.navigate(["bookmyshowmodule/showdetail",cat,id])
 }
 addmovie(data:any){
  alert(data.tittle+"add to cart")
  data.qty =1
 }
//Serch functionality///
 search_data(data: any){
  // console.log('Hello search worked',event_search.target.value)
  console.log(data.value.search)
  const filterProd = this.ProductData.filter((item: any) => {
      // Convert both title and search query to lowercase for case-insensitive comparison
      const newData = item.tittle.toLowerCase().includes(data.value.search.toLowerCase());
      return newData;
    });
    console.log(filterProd)
    this.ProductData = filterProd
  }
}
