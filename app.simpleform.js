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
var SimpleFormComponent = (function () {
    function SimpleFormComponent() {
    }
    // Here we are implementing the submitForm function. All we are doing for right now is spitting out the details of the form to our console.
    SimpleFormComponent.prototype.submitForm = function (form) {
        // alert(JSON.stringify(form));
        console.log('Form Data: ');
        console.log(form);
        for (var keyName in form) {
            var key = keyName;
            var value = form[keyName];
        }
    };
    SimpleFormComponent = __decorate([
        core_1.Component({
            selector: 'simple-form',
            template: "\n  <div class=\"jumbotron\">\n    <h2>Template Driven Form</h2>\n     <!-- Here we are declaring a local variable called \u201Cform\u201D and setting it to an instance of ngForm. This is very important. Now our local form variable becomes of type FormGroup allowing us access to the FormGroup API\u2019s on this local variable. We use this in the ngSubmit event where we send the value of the form via form.value -->\n    <form #form=\"ngForm\" (ngSubmit)=\"submitForm(form.value)\">\n      <div class=\"form-group\">\n        <label>First Name:</label>\n        <!-- Since we are working with template driven forms, we can use the ngModel directive to capture the values of our forms. One thing to note if you are coming from Angular 1.x. Using ngModel as shown below creates a one-way data binding, so once we hit submit the data is only sent to the controller. If we wanted to use two-way data binding, we would have to wrap the ngModel in [()] and assign an attribute to it. Also the name of the field corresponds to the name attribute so our first input will be firstName. -->\n        <input type=\"text\" class=\"form-control\" placeholder=\"FirstName\" name=\"firstName\" ngModel required>\n      </div>\n      <div class=\"form-group\">\n        <label>Last Name</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"LastName\" name=\"lastName\" ngModel required>\n      </div>\n      <div class=\"form-group\">\n        <label>Gender</label>\n      </div>\n      <!-- Radio and checkboxes work much the same way -->\n      <div class=\"radio\">\n        <label>\n          <input type=\"radio\" name=\"gender\" value=\"Male\" ngModel>\n          Male\n        </label>\n      </div>\n      <div class=\"radio\">\n        <label>\n          <input type=\"radio\" name=\"gender\" value=\"Female\" ngModel>\n          Female\n        </label>\n      </div>\n      <div class=\"form-group\">\n        <label>Activities</label>\n      </div>\n      <label class=\"checkbox-inline\">\n        <input type=\"checkbox\" value=\"hiking\" name=\"hiking\" ngModel> Hiking\n      </label>\n      <label class=\"checkbox-inline\">\n        <input type=\"checkbox\" value=\"swimming\" name=\"swimming\" ngModel> Swimming\n      </label>\n      <label class=\"checkbox-inline\">\n        <input type=\"checkbox\" value=\"running\" name=\"running\" ngModel> Running\n      </label>\n   <div ng-app=\"urlApp\">\n    <div ng-controller=\"urlCtrl\">\n       <a href=\"#\" ng-click=\"ClickMeToRedirect()\">submit</a>\n    </div>\n</div>\n    </form>\n  </div>\n\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], SimpleFormComponent);
    return SimpleFormComponent;
}());
exports.SimpleFormComponent = SimpleFormComponent;
//# sourceMappingURL=app.simpleform.js.map