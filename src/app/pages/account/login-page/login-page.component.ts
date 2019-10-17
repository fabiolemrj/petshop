import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder, private data: DataService) {
    this.form = fb.group({
      username: [ '',
        Validators.compose([
          Validators.minLength(14),
          Validators.maxLength(14),
          Validators.required
        ])],
        password: [ '',
      Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required
      ])]
    });
   }

  ngOnInit() {
  }

}
