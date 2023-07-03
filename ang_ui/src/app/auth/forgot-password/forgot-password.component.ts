import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SCREEN_TYPES } from 'src/app/models/common.model';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  screenType: string = '';
  isOtpSend: boolean = false;
  loading: boolean = true;

  SCREEN_TYPES = SCREEN_TYPES;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.screenType = this.activatedRoute.snapshot.data[0];
    console.log('@ params', this.screenType);
  }

  onSendOTP() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.isOtpSend = !this.isOtpSend;
    }, 3000);
  }
}
