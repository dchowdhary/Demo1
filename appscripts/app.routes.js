"use strict";
var router_1 = require('@angular/router');
var app_Submit_1 = require('./app.Submit');
exports.routes = [
    { path: 'Submit', component: app_Submit_1.SubmitComponent },
    { path: '', redirectTo: 'Submit', pathMatch: 'full' }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routes.js.map