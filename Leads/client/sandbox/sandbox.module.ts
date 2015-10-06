///<reference path="./sandbox.config.ts"/>
///<reference path="../customer/customer.module.ts"/>

module sandbox {
  "use strict";

  angular.module("leads.views.sandbox", [
    "ui.router",
    "leads.templates", "customer", "lead", "ui"
  ]).config(SandboxConfig);
}
