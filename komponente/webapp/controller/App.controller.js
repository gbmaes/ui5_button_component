sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("komponente.controller.App", {
        onShowHello : function () {
          // show a native JavaScript alert
          alert("Hello World");
        }
      });
    
    }
  );