import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { CustomValidator } from 'src/app/validators/custom.validator';
import { Security } from 'src/app/utils/security.utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent implements OnInit {

  public form: FormGroup;
  public busy = false;

  constructor(private fb: FormBuilder, private data: DataService, private router: Router) {
    this.form = fb.group({
      username: [ '',
        Validators.compose([
          Validators.minLength(14),
          Validators.maxLength(14),
          Validators.required,
          CustomValidator.isCpf()
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
    const token = Security.getToken();
    if(token){
      this.busy = true;
      this.data.refreshToken().subscribe(
       
        (data: any)=>{
          this.busy=false;
          this.setUser(data.customer, data.token);
      
        },
        (err) =>{
         localStorage.clear();
         this.busy = false;

        }
      );
    }
  }

  submit(){   
      this.busy = true;
      this.data.authenticate(this.form.value)
       .subscribe(       
        (data: any)=>{
          this.busy=false;
          this.setUser(data.customer, data.token);
      
        },
        (err) =>{
         localStorage.clear();
         this.busy = false;

        }
      );
    }

  setUser(user,token){
    Security.set(user,token);
    this.router.navigate(['/']);
  }

}
