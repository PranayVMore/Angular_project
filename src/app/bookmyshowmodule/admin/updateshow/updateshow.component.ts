import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductapiService } from 'src/app/services/productapi.service';

@Component({
  selector: 'app-updateshow',
  templateUrl: './updateshow.component.html',
  styleUrls: ['./updateshow.component.css']
})
export class UpdateshowComponent {

  constructor(private serve: ProductapiService, private activate: ActivatedRoute){}
  ProductId:any
  ProductData:any
  imgPath:any

  ngOnInit(){
    this.activate.params.subscribe((sid)=>{
      this.ProductId = sid["id"]
      console.log(this.ProductId)
    })

    this.serve.searchMovieDetails(this.ProductId).subscribe((data)=>{
      this.ProductData = data
      console.log(this.ProductData)
      this.reactiveFormData.patchValue({
        id:this.ProductData.id,
        tittle:this.ProductData.tittle,
        rating:this.ProductData.rating,
        languages:this.ProductData.languages,
        category:this.ProductData.category,
        price:this.ProductData.price,
      })

      this.imgPath = this.ProductData.image
    })

  }



  reactiveFormData = new FormGroup({
    id: new FormControl(""),
    tittle:new FormControl(""),
    image:new FormControl("") ,
    videourl:new FormControl(""),
    rating:new FormControl(""),
    languages:new FormControl(""),
    category:new FormControl(""),
    price:new FormControl("")
  })




  submitFun(){
    this.reactiveFormData.patchValue({
      image:this.imgPath,
      videourl:this.vdoPath
    })
    console.log(this.reactiveFormData.value)
    this.serve.putProductDetails(this.reactiveFormData.value, this.ProductId).subscribe(()=>{
      alert(this.ProductData.tittle+"movie has been updated!")
    })
  }


  changeImg(event:any){
    let file = event.target.files[0]
    console.log(event,file)

    // base 64 format
    let fileRead = new FileReader()
    fileRead.readAsDataURL(file)
    fileRead.onload =()=>{
      this.imgPath = fileRead.result
      console.log(this.imgPath)
    }
  }

  vdoPath:any
  changeVideo(event:any){
    let file = event.target.files
    console.log(event,file)

    let fileRead = new FileReader()
    fileRead.readAsDataURL(file)
    fileRead.onload =()=>{
      this.vdoPath = fileRead.result
      console.log(this.vdoPath)
  }
}










}
