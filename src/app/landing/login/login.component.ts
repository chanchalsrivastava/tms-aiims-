import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginModule } from './login.module';
import { Router } from '@angular/router';
import { UserapiService } from '../../userapi.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  userRoles: any[] = [];
  captcha: string = '';
  errorMessage: string = '';
  password: string = '';
  refreshCaptcha: any;
  formData: LoginModule = new LoginModule;
  logIn!: FormGroup;
  loginSuccess!: boolean;
  constructor(private login: LoginService, private userapiservice: UserapiService, private formBuilder: FormBuilder, private router: Router) { }
  ngOnInit(): void {
    const btnContainer: HTMLElement | null = document.getElementById("myDIV");
    if (btnContainer) {
      const btns: HTMLCollectionOf<Element> = btnContainer.getElementsByClassName("btn");
      for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function (this: HTMLElement) {
          const current: HTMLCollectionOf<Element> = document.getElementsByClassName("active");
          if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
          }
          this.className += " active";
        });
      }
    }
    this.logIn = this.formBuilder.group({
      username: ['', [Validators.required, Validators.maxLength(8), Validators.pattern(/^[a-zA-Z]\d{7}$/)]],
      password: ['', Validators.required],
      captcha: ['', Validators.required],
    });
    (() => {
      const fonts: string[] = ["cursive"];
      let captchaValue: string = "";
      function generateCaptcha(): void {
        let value: string = btoa(String(Math.random() * 100));
        value = value.substr(0, 3 + Math.random() * 3);
        captchaValue = value;
      }
      function setCaptcha(): void {
        let html: string = captchaValue.split("").map((char) => {
          const rotate: number = -20 + Math.trunc(Math.random() * 30);
          const font: number = Math.trunc(Math.random() * fonts.length);
          return `<span
            style="
            transform:rotate(${rotate}deg);
            font-family:${fonts[font]};
            "
            >${char} </span>`;
        }).join("");
        document.querySelector<HTMLDivElement>(".login_form #captcha .preview")!.innerHTML = html;
      }
      function initCaptcha(): void {
        document.querySelector(".login_form #captcha .captcha_refersh")!.addEventListener("click", () => {
          generateCaptcha();
          setCaptcha();
        });
        generateCaptcha();
        setCaptcha();
      }
      initCaptcha()
    })();
  }
  onSubmit(): void {
    const logIn = this.logIn.value;
    console.log(this.logIn);
    const formData = {
      username: this.logIn.value.username,
      password: this.logIn.value.password,
      captcha: this.logIn.value.captcha
    };
    console.log(formData);
    this.login.login(formData).subscribe(
      response => {
        console.log('Login successful:', response);
        console.log(response);
        const token = response.body.token;
        localStorage.setItem('token', token);
        console.log(token);
        if (token) {
          this.login.setToken(token);
          this.userapiservice.setToken(token);
          this.fetchUserRoles();
        }
      },

    );
  }
  fetchUserRoles(): void {
    this.login.getUserRoles().subscribe(
      roles => {
        console.log('User roles:', roles);
        const userRoles = roles.includes('staff') || roles.includes('help') ? ['staff', 'help'] : roles;
        this.userRoles = userRoles;
        this.router.navigate(['user'], { state: { roles: userRoles } });
      },
      error => {
        console.error('Error fetching user roles:', error);
      }
    );
  }

}