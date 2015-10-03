///<reference path="../../../../typings/tsd.d.ts"/>
///<reference path="lead-edit.controller.ts"/>
"use strict";

module leads.views {
  export class LeadEditConfig {

    /* @ngInject */
    constructor($stateProvider: angular.ui.IStateProvider) {
      $stateProvider.state("lead.edit", {
        url: "/edit",
        controller: LeadEditController,
        controllerAs: "vm",
        templateUrl: "views/lead/edit/lead-edit.html"
      });
    }
  }
}