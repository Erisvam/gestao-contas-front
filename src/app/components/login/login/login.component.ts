import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EMPTY, Subject, catchError } from 'rxjs';
import { ILogin } from 'src/app/models/login/login.interface';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formLogin!: FormGroup;
  loginRequest: ILogin = {
    login: "",
    senha: ""
  }
  error$ = new Subject<boolean>();

  constructor(private loginService: LoginService, private router:Router){
    this.criarFormulario();
  }

  criarFormulario(): void {
    this.formLogin = new FormGroup({
      login: new FormControl(null, [Validators.required]),
      senha: new FormControl(null, [Validators.required])
    });
  }

  logar(): void {
    if("VALID" == this.formLogin.status){
      this.loginRequest.login = this.formLogin.get("login")?.value;
      this.loginRequest.senha = this.formLogin.get("senha")?.value;

      this.loginService.logar(this.loginRequest)
        .pipe(
          catchError(error => {
            this.error$.next(true);
            console.error(error)
            return EMPTY;
          })
        ).subscribe(response => {
          localStorage.setItem("authorization", btoa(response.access_token));
          this.router.navigate(['/home']);
        });
    }
  }

  ngOnDestroy(){}
}
