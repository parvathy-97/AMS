import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Login } from '../shared/login';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  login: Login = new Login();
  isSubmitted = false;
  logins: Observable<Login[]>;

  constructor(private service: AuthService, private router: Router,
    private formBuilder: FormBuilder, private toastr: ToastrService) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  get formControls() {
    return this.loginForm.controls;
  }

  loginUser() {



    //this.login.username=this.loginForm.controls.username.value;
    //this.login.password=this.loginForm.controls.password.value;
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      this.toastr.error('enter username and password');
      return;
    }

    this.service.Login(this.loginForm.value).subscribe(element => {
      if (element != null) {
        if (element["usertype"] == 'Admin') {
          localStorage.setItem('ACCESS_TOKEN', element["username"]);
          this.router.navigateByUrl('/admin');
          this.toastr.success('Welcome Admin', 'Login Successful');
        }
        else if (element["usertype"] == 'PurchaseManager') {
          this.router.navigateByUrl('/purchasemanager');
          this.toastr.success('Welcome PurchaseManager', 'Login Successful');
        }
      }
      else {
        this.toastr.warning('Enter valid Username and Password');
      }
    });

  }
}