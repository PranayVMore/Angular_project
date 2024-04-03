import { Component,OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-myshow',
  templateUrl: './myshow.component.html',
  styleUrls: ['./myshow.component.css']
})
export class MyshowComponent implements OnInit {
  public product : any = [];
public grandTotal !: number;
constructor(private CartService: CartService){}

ngOnInit():void {
  this.CartService.getProduct()
  .subscribe(res=>{
    this.product = res;
    this.grandTotal = this.CartService.getTotalPrice();

  })
}

removeItem(product:any){
  this.CartService.removeCartItem(product);
}

emptycart(){
  this.CartService.removeAllCart();
}
}



