"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
// We are going to be making a call to an external API and we’ll use the Angular HTTP library to accomplish this. Here we are importing the API’s we’ll need to work with.
var http_1 = require('@angular/http');
var LoginComponent = (function () {
    function LoginComponent(fb, http) {
        this.http = http;
        // We’ll check if the user is logged in once this component is loaded. We’ll do this by checking if a jwt key value pair exists in local storage.
        if (localStorage.getItem('jwt')) {
            this.authenticated = true;
            // If the jwt key value exists, we’ll know the user is logged in, so we’ll get their profile.
            this.profile = JSON.parse(localStorage.getItem('profile'));
        }
        // For our form, we’ll just have two fields and we’ll require both of them to be filled out before the form can be submitted
        this.loginForm = fb.group({
            'email': [null, forms_1.Validators.required],
            'password': [null, forms_1.Validators.required],
        });
    }
    LoginComponent.prototype.submitForm = function (value) {
        var _this = this;
        // Once the form is submitted and we get the users email and password we’ll format our request based on the Auth0 API.
        var form = {
            'client_id': 'YOUR-AUTH0-CLIENTID',
            'username': value.email,
            'password': value.password,
            'connection': 'Username-Password-Authentication',
            'grant_type': 'password',
            'scope': 'openid name email'
        };
        // Once we have our data formed, we’ll send the request using the Angular 2 HTTP library.
        this.http.post('https://YOUR-AUTH0-DOMAIN.auth0.com/oauth/ro', form).subscribe(function (res) {
            // We’ll subscribe to the request and capture the response
            var data = res.json();
            // If we get an id_token, we’ll know the request is successful so we’ll store the token in localStorage. We won’t handle the error use case for this tutorial.
            if (data.id_token) {
                localStorage.setItem('jwt', data.id_token);
                // Finally, we’ll call our getUserInfo function which will get the user details from Auth0
                _this.getUserInfo(data);
            }
        });
    };
    // Here we are similarly calling the Auth0 API, this time the /tokeninfo endpoint which will return the users data we requested. All we’ll need to pass to the request is our JSON Web Token.
    LoginComponent.prototype.getUserInfo = function (data) {
        var _this = this;
        var form = {
            'id_token': data.id_token
        };
        this.http.post('https://reviewgen.auth0.com/tokeninfo', form).subscribe(function (res) {
            var data = res.json();
            _this.profile = data;
            localStorage.setItem('profile', JSON.stringify(data));
            _this.authenticated = true;
            // We’ll use the reset() method to reset the form. So if a user logs out they will need to enter their credentials again. If we did not do this, the previous values would still be displayed.
            _this.loginForm.reset();
        });
    };
    // We’ll implement a logout function that removes the jwt and user profile from localStorage and sets the authenticated boolean to false which will cause the component to display the login form.
    LoginComponent.prototype.logout = function () {
        localStorage.removeItem('jwt');
        localStorage.removeItem('profile');
        this.authenticated = false;
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login-form',
            template: "\n  <!-- We\u2019ll display the login form only if the user is not logged in -->\n  <div class=\"jumbotron\" *ngIf=\"!authenticated\">\n    <h2>Login Form</h2>\n    <!-- We are going to build a reactive form and use many of the concepts we learend in the previous section in regards to validation. -->\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"submitForm(loginForm.value)\">\n      <div class=\"form-group\" [ngClass]=\"{'has-error':!loginForm.controls['email'].valid && loginForm.controls['email'].touched}\">\n        <label>Email:</label>\n        <input class=\"form-control\" type=\"text\" placeholder=\"John@doe.com\" [formControl]=\"loginForm.controls['email']\">\n        <div *ngIf=\"loginForm.controls['email'].hasError('required') && loginForm.controls['email'].touched\" class=\"alert alert-danger\">You must add an email.</div>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{'has-error':!loginForm.controls['password'].valid && loginForm.controls['password'].touched}\">\n        <label>Password:</label>\n        <input class=\"form-control\" type=\"password\" placeholder=\"Password\" [formControl]=\"loginForm.controls['password']\">\n        <div *ngIf=\"loginForm.controls['password'].hasError('required') && loginForm.controls['password'].touched\" class=\"alert alert-danger\">You must add a password.</div>\n      </div>\n      <div class=\"form-group\">\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!loginForm.valid\">Submit</button>\n      </div>\n    </form>\n  </div>\n  <!-- If the user is authenticated we\u2019ll display their profile picture and email as well as provide a way to logout -->\n  <div class=\"jumbotron text-center\" *ngIf=\"authenticated\">\n    <img src=\"{{profile.picture}}\" />\n    <h2>Welcome, {{profile.email}}</h2>\n    <a (click)=\"logout()\">Logout</a>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, http_1.Http])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=app.login.js.map