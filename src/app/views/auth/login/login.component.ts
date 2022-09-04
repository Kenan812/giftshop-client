import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms"
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;

  errorMessage: any;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { 
    this.errorMessage = '';
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email:'',
      password:''
    });
  }

  submit() {
    let email = this.form.getRawValue().email;
    let password = this.form.getRawValue().password;

    if (email.replace(/\s/g, '') === '' || password.replace(/\s/g, '') === '') {
      this.errorMessage = 'Email and password must not be empty';
      return;
    }

    this.authService.login(email, password).subscribe((data) => {
      console.log("login successful");
    }, (error) => {
      this.errorMessage = error;
    });
  }

  redirectToSignup() {
    this.router.navigate(['/auth/sign_up']);
  }
}
