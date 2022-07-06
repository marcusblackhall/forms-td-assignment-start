import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  formInp = {
    email: '',
    subscription: ''

  }

  defaultSubscription:string = 'advanced';

  @ViewChild('myform') myForm: NgForm

  onSubmit(){
    console.log(this.myForm);
    this.formInp.email =   this.myForm.value.email;
    this.formInp.subscription =   this.myForm.value.subscription;
    console.log("email entered: " + this.formInp.email);
    console.log("subscription entered: " + this.formInp.subscription);
  }

}
