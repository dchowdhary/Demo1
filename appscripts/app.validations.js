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
var ValidationsComponent = (function () {
    function ValidationsComponent(fb) {
        this.complexForm = fb.group({
            // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
            'firstName': [null, forms_1.Validators.required],
            // We can use more than one validator per field. If we want to use more than one validator we have to wrap our array of validators with a Validators.compose function. Here we are using a required, minimum length and maximum length validator.
            'lastName': [null, forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(5), forms_1.Validators.maxLength(10)])],
            'gender': [null, forms_1.Validators.required],
            'hiking': false,
            'running': false,
            'swimming': false
        });
    }
    ValidationsComponent.prototype.submitForm = function (value) {
        console.log(value);
    };
    ValidationsComponent = __decorate([
        core_1.Component({
            selector: 'form-validation',
            template: "\n <div class=\"jumbotron\">\n    <h2>Form with Validations</h2>\n    <form [formGroup]=\"complexForm\" (ngSubmit)=\"submitForm(complexForm.value)\">\n      <div class=\"form-group\" [ngClass]=\"{'has-error':!complexForm.controls['firstName'].valid && complexForm.controls['firstName'].touched}\">\n        <label>First Name:</label>\n        <input class=\"form-control\" type=\"text\" placeholder=\"John\" [formControl]=\"complexForm.controls['firstName']\">\n        <!-- The hasError method will tell us if a particular error exists -->\n        <div *ngIf=\"complexForm.controls['firstName'].hasError('required') && complexForm.controls['firstName'].touched\" class=\"alert alert-danger\">You must include a first name.</div>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{'has-error':!complexForm.controls['lastName'].valid && complexForm.controls['lastName'].touched}\">\n        <label>Last Name</label>\n        <input class=\"form-control\" type=\"text\" placeholder=\"Doe\" [formControl]=\"complexForm.controls['lastName']\">\n        <!-- The hasError method can work with the built in validators but custom validators as well -->\n        <div *ngIf=\"complexForm.controls['lastName'].hasError('required') && complexForm.controls['lastName'].touched\" class=\"alert alert-danger\">You must include a last name.</div>\n        <div *ngIf=\"complexForm.controls['lastName'].hasError('minlength') && complexForm.controls['lastName'].touched\" class=\"alert alert-danger\">Your last name must be at least 5 characters long.</div>\n        <div *ngIf=\"complexForm.controls['lastName'].hasError('maxlength') && complexForm.controls['lastName'].touched\" class=\"alert alert-danger\">Your last name cannot exceed 10 characters.</div>\n      </div>\n      <div class=\"form-group\">\n        <label>Gender</label>\n        <div class=\"alert alert-danger\" *ngIf=\"!complexForm.controls['gender'].valid && complexForm.controls['gender'].touched\">You must select a gender.</div>\n      </div>\n      <div class=\"radio\">\n        <label>\n          <input type=\"radio\" name=\"gender\" value=\"Male\" [formControl]=\"complexForm.controls['gender']\">\n          Male\n        </label>\n      </div>\n      <div class=\"radio\">\n        <label>\n          <input type=\"radio\" name=\"gender\" value=\"Female\" [formControl]=\"complexForm.controls['gender']\">\n          Female\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>Activities</label>\n      </div>\n      <label class=\"checkbox-inline\">\n        <input type=\"checkbox\" value=\"hiking\" name=\"hiking\" [formControl]=\"complexForm.controls['hiking']\"> Hiking\n      </label>\n      <label class=\"checkbox-inline\">\n        <input type=\"checkbox\" value=\"swimming\" name=\"swimming\" [formControl]=\"complexForm.controls['swimming']\"> Swimming\n      </label>\n      <label class=\"checkbox-inline\">\n        <input type=\"checkbox\" value=\"running\" name=\"running\" [formControl]=\"complexForm.controls['running']\"> Running\n      </label>\n      <div class=\"form-group\">\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!complexForm.valid\">Submit</button>\n      </div>\n    </form>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], ValidationsComponent);
    return ValidationsComponent;
}());
exports.ValidationsComponent = ValidationsComponent;
//# sourceMappingURL=app.validations.js.map