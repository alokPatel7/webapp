import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { signUp } from 'src/app/actions/auth.actions';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent {
  signUpForm!: any;

  constructor(private store: Store, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      checkpassword: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.signUpForm.value);
    if (this.signUpForm.valid) {
      const { email, password } = this.signUpForm.value;
      this.store.dispatch(signUp({ email, password }));
    }
  }
}
