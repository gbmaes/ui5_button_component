// define new component
jQuery.sap.require("sap.ui.core.UIComponent");
jQuery.sap.require("sap.ui.commons.Button");
jQuery.sap.declare("samples.components.button.Component");

// new Component
sap.ui.core.UIComponent.extend("samples.components.button.Component", {

    metadata : {
        properties : {
            text: "string"
        }
    }
});


samples.components.button.Component.prototype.createContent = function(){
    this.oButton = new sap.ui.commons.Button("btn");
    return this.oButton; 
}; 