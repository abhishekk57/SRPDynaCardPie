import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingSpinnerService } from 'src/app/api/loading-spinner.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  titleData: any = 'Login';
  data: any = [];
  CurrenPageTitle: string = 'Login';
  placeholder_email: string = 'Email';
  placeholder_password: string = 'Password';
  email_type: string = 'email';
  password_type: string = 'password';
  login_button: string = 'Login';
  close_button: string = 'Close';
  button_style = '';

  label: string = 'login';
  alertHeader: string = 'loginHeader';
  alertSubHeader: string = 'loginsubHeader';
  alertMsg: string = 'loginMsg';
  // loading: any;
  constructor(private router: Router, public loading: LoadingSpinnerService) {}

  ngOnInit() {
    // this.loading.present();
    // this.loading.dismiss();
  }

  loginClick() {
    this.loading.present();
    setTimeout(() => {
      this.router.navigateByUrl('/home', {});
    }, 3000);
    this.loading.dismiss();
  }
}
