import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductapiService } from 'src/app/services/productapi.service';



@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.css']
})
export class StreamComponent {
  // constructor(private stream_serv:ProductapiService){ }
  // streamData:any=[]
  // ngOnInit(){
  //   this.stream_serv.getStreamData().subscribe((data) => {
  //     this.streamData = data; // Assign fetched data to streamData array
  //     console.log('display stream= ',this.streamData)
  //   });
  constructor(private serve: ProductapiService,private router:Router ){ }

  ngOnInit(){
    this.getDetails()
}

ProductData:any
getDetails(){
 this.serve.getStreamData().subscribe((data)=>{
  this.ProductData= data
 console.log(this.ProductData)
 })
}

}
