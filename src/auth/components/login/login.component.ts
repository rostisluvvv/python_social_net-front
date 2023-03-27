import { Component, OnInit } from '@angular/core';

import {FormControl, Validators, FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(
        null, [Validators.required]
      ),
      password: new FormControl(
        null, [Validators.required, Validators.minLength(4)]
      ),
    });
  }
  submit(): void {
  }
}
