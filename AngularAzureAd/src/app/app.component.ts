import { HttpClient } from '@angular/common/http';

import { AuthenticationResult } from '@azure/msal-browser';
import { MsalService } from '@azure/msal-angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'My Microsoft Login- Example';

  apiResponse: string | undefined;

  constructor(private authService: MsalService, private http: HttpClient) {

  }

  ngOnInit(): void {
    debugger;
    this.authService.instance.handleRedirectPromise().then(res => {
      debugger;
      if (res != null && res.account != null) {
        this.authService.instance.setActiveAccount(res.account);
      }
    })
  }

  isLoggedIn(): boolean {
    return this.authService.instance.getActiveAccount() != null
  }

  login() {
    debugger;
    this.authService.loginPopup()
      .subscribe((response: AuthenticationResult) => {
        debugger;
        this.authService.instance.setActiveAccount(response.account);
        console.log(response.accessToken);
      });
  }

  logout() {
    this.authService.logout()
  }

  callProfile() {
    this.http.get("https://graph.microsoft.com/v1.0/me").subscribe(resp => {
      this.apiResponse = JSON.stringify(resp)
    })
  }

  callEmails() {
    this.http.get("https://graph.microsoft.com/v1.0/me/messages").subscribe(resp => {
      this.apiResponse = JSON.stringify(resp)
    })
  }

  sayHello() {
    this.http.get("http://localhost:8080/hello").subscribe(resp => {
      this.apiResponse = JSON.stringify(resp)
    })
  }
}
