import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { PasswordModule } from 'primeng/password';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

const designModuleList: any[] = [
  ButtonModule,
  InputTextModule,
  PasswordModule,
  DividerModule,
  ProgressSpinnerModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...designModuleList],
  exports: [...designModuleList],
})
export class UiModule {}
