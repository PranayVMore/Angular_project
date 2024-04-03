import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductapiService } from 'src/app/services/productapi.service';

@Component({
  selector: 'app-addshow',
  templateUrl: './addshow.component.html',
  styleUrls: ['./addshow.component.css']
})
export class AddshowComponent {

  // dependancy injection
  constructor(public fb: FormBuilder, private serve: ProductapiService){}
    reactiveFormData = this.fb.group({
      id:[""],
      tittle:[""],
      image:[""] ,
      videourl:[""],
      rating:[""],
      languages:[""],
      category:[""],
      price:[""]
    })


  submitFun(){
    this.reactiveFormData.patchValue({
      image:this.imgPath
    })
    console.log(this.reactiveFormData.value)
    this.serve.postProductDetails(this.reactiveFormData.value).subscribe(()=>{
      alert("Movies  get added!")
    })
  }

  imgPath:any
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

  changeVideo(event:any){
    let file = event.target.files
    console.log(event,file)

  }

}
