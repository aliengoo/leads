///<reference path="../ui/ui.module.ts"/>
///<reference path="customer/customer-to-string.filter.ts"/>
///<reference path="customer/customer.directive.ts"/>
///<reference path="customer/customer.ts"/>
///<reference path="address/address.directive.ts"/>
///<reference path="address/address.ts"/>
///<reference path="address-type/address-type.directive.ts"/>

module customer {
  "use strict";

  angular.module("customer", ["ui"])
    .filter("customerToString", customerToString)
    .directive("customer", customer)
    .directive("address", address)
    .directive("addressType", addressType);
}
