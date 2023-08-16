import { Component } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent {
 cantidad: number = 0;
 tengo = 'USD';
 quiero = 'EUR';
 total: number = 0;
 monedas: String[] = ['USD','EUR','LIBRA'];

 convertir() {
  switch(this.tengo) {
    case 'USD': 
    if(this.quiero == 'USD') {
      this.total = this.cantidad;
    }
    if(this.quiero == 'EUR') {
    //  this.total = Math.round( this.cantidad * 0.92);
      this.total = this.cantidad * 0.92;
    }
    if(this.quiero == 'LIBRA') {
      this.total = this.cantidad * 0.79;
    }
    break;
    case 'EUR': 
    if(this.quiero == 'USD') {
      this.total =  this.cantidad * 1.09;
    }
    if(this.quiero == 'EUR') {
      this.total = this.cantidad * 0.92;
    }
    if(this.quiero == 'LIBRA') {
      this.total = this.cantidad * 0.85;
    }
    break;
    case 'LIBRA': 
    if(this.quiero == 'USD') {
      this.total =  this.cantidad * 1.27;
    }
    if(this.quiero == 'EUR') {
      this.total = this.cantidad * 1.17;
    }
    if(this.quiero == 'LIBRA') {
      this.total = this.cantidad;
    }
    break;

  }
 }

}
