import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.scss']
})
export class RegisterformComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {this.registerForm = this.formBuilder.group({
    
    mobilenumber: ['', [Validators.required]],
    password: ['', [Validators.required]],
    mobileotp: ['', [Validators.required]],
  });
}
get f() { return this.registerForm.controls; }
onSubmit() {
  this.submitted = true;
  if (this.registerForm.invalid) {
    return;
  }
}

public register(): void {
  if(this.registerForm.valid){
    
  }
}
}