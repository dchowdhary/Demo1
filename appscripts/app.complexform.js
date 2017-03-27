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
// We will need to import a couple of specific API’s for dealing with reactive forms
var forms_1 = require('@angular/forms');
var ComplexFormComponent = (function () {
    // We are passing an instance of the FormBuilder to our constructor
    function ComplexFormComponent(fb) {
        // Here we are using the FormBuilder to build out our form.
        this.complexForm = fb.group({
            // We can set default values by passing in the corresponding value or leave blank if we wish to not set the value. For our example, we’ll default the gender to female.
            'firstName': '',
            'lastName': '',
            'gender': 'Female',
            'hiking': false,
            'running': false,
            'swimming': false
        });
    }
    // Again we’ll implement our form submit function that will just console.log the results of our form
    ComplexFormComponent.prototype.submitForm = function (value) {
        console.log('Reactive Form Data: ');
        console.log(value);
    };
    ComplexFormComponent = __decorate([
        core_1.Component({
            selector: 'complex-form',
            templateUrl: './app.complexform.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], ComplexFormComponent);
    return ComplexFormComponent;
}());
exports.ComplexFormComponent = ComplexFormComponent;
//# sourceMappingURL=app.complexform.js.map