import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductapiService } from 'src/app/services/productapi.service';

@Component({
  selector: 'app-showdetails',
  templateUrl: './showdetails.component.html',
  styleUrls: ['./showdetails.component.css']
})
export class ShowdetailsComponent {
constructor(private serve: ProductapiService,private activate:ActivatedRoute){ }

productId:any
productCat:any
ngOnInit(){
  this.activate.params.subscribe((urlid)=>{
    console.log(urlid)
    this.productId= urlid["id"]
    this.productCat= urlid["cat"]
  })
  this.getProduct()
}

productData:any
getProduct(){
  this.serve.searchByCat(this.productCat,this.productId).subscribe((data)=>{
    this.productData = data
    console.log(this.productData )
  })
}








}
