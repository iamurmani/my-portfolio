import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from "@angular/material/form-field";
const MaterialComponent = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule
]


@NgModule({
  declarations: [],
  imports: [
    MaterialComponent
  ],
  exports: [
    MaterialComponent
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance : 'outline'}}
  ]
})
export class MaterialModule { }
