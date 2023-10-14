import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PARCIAL NASA';


  altura: number = 0;
  tiempo: number = 0;
  velocidad: number = 0;
  gravedad: number = 0;
  readonlyInput: boolean = true;

  H(){
    const seconds = this.tiempo * 60;
this.altura = (this.gravedad * (seconds ** 2)) / 2;
this.altura = Math.round(this.altura * 100) / 100;
  }

  V_f() {
    const seconds = this.tiempo * 60;
    this.velocidad = this.gravedad * seconds;
    this.velocidad = Math.round(this.velocidad * 100) / 100;
  }
}
