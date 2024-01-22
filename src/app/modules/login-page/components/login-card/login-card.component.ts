import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LOGIN_CREDENTIALS } from 'src/app/shared/constant/credentials.const';
import { UserAccoundModel } from 'src/app/shared/model/user-account.model';
import { StorageService } from 'src/app/shared/service/storage.service';

@Component({
	selector: 'app-login-card',
	templateUrl: './login-card.component.html',
	styleUrls: ['./login-card.component.scss']
})
export class LoginCardComponent implements OnInit {
	public hidePassword = true;
	public loginForm: FormGroup;
	public toasterMessage: string;
	public toasterType: 'success' | 'warning';
	public toasterShow: boolean = false;

	constructor(
		private fb: FormBuilder,
		private storageService: StorageService,
		private router: Router
	) { }

	ngOnInit(): void {
		this.initFormLogin();
	}

	private initFormLogin() {
		this.loginForm = this.fb.group({
			username: ['', Validators.required],
			password: ['', Validators.required]
		})
	}

	get username() {
		return this.loginForm.get('username');
	}

	get password() {
		return this.loginForm.get('password');
	}

	public onClickLoginButton(e: any) {
		if (this.loginForm.valid) {
			const account = {
				username: this.username?.value,
				password: this.password?.value
			}

			if (account.username === LOGIN_CREDENTIALS.USERNAME &&
				account.password === LOGIN_CREDENTIALS.PASSWORD) {
				const userAccountData = new UserAccoundModel();
				userAccountData.token = '123456789'
				userAccountData.username = account.username;
				userAccountData.passowrd = account.password;
				this.storageService.storeAccount(userAccountData);
				this.toasterMessage = 'Login successful!';
				this.toasterType = 'success';
				this.toasterShow = true;
				setTimeout(() => {
					if (this.storageService.getAccount()) {
						this.router.navigate(['/dashboard/employee-list']);
					}
				}, 3000);

			} else {
				this.toasterMessage = 'Invalid username or password!';
				this.toasterType = 'warning';
				this.toasterShow = true;
				this.loginForm.setErrors({ invalidCredentials: true });
			}
		}
	}

	public onToasterClose(): void {
		this.toasterShow = false;
	}

}
