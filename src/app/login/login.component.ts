import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  // login() {
  //   alert("login clicked");
  //   this.authService.login({ username: this.username, password: this.password })
  //     .subscribe(response => {
  //       localStorage.setItem('token', response.token);
  //       this.router.navigate(['dashboard']);
  //     });
  // }

  
// **********************New login Function********************
  login() {
    debugger;
    alert("login clicked");
    // this.authService.login({ username: this.username, password: this.password })
    // .subscribe((res:any)=>{
    //   if(res.result){
    //     alert("Login Success");
    //     localStorage.setItem('token',res.token);
        this.router.navigateByUrl("dashboard");
      // }
      // else{
      //   alert("Check User Name and Password");
        
      // }
    // })

    // *******************************************************************
      // .subscribe(response => {
      //   localStorage.setItem('token', response.token);
      //   this.router.navigate(['dashboard']);
      // });
  }


}
