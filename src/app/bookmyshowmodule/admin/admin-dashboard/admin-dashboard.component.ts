import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductapiService } from 'src/app/services/productapi.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {

  constructor(private serve: ProductapiService,private router:Router ){ }

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
showProduct(id:any){
this.router.navigate(["bookmyshow/show-detail",id])
}

  addMovie(){
  this.router.navigate(["bookmyshowmodule/addshow"])
  }

  deleteMovietFun(id:any){
    this.serve.deleteproductDetails(id).subscribe(()=>
    {
      this.getDetails()
      alert("Movie has been deleted")
    })

  }

  updateMovie(id:any){
    console.log(id)
    this.router.navigate(["bookmyshowmodule/updateshow",id])
  }

}
