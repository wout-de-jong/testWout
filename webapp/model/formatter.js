sap.ui.define([], function() {
	"use strict";

	return {
		delivery: function(sMeasure, iWeight) {
			var oResourceBundle = this.getView().getModel("i18n").getResourceBundle(),
				sResult = "";

			if(sMeasure === "G") {
				iWeight = iWeight / 1000;
			}
			if (iWeight < 0.5) {
				sResult = oResourceBundle.getText("formatterMailDelivery");
			} else if (iWeight < 5) {
				sResult = oResourceBundle.getText("formatterParcelDelivery");
			} else {
				sResult = oResourceBundle.getText("formatterCarrierDelivery");
			}

			return sResult;
		},
		formatMapUrl: function(sStreet, sNr, sCity) {
			return "https://maps.googleapis.com/maps/api/staticmap?markers=color:blue|label:S|" +
			        sStreet + " " +
			        sNr + " " + 
			        sCity + " " +
			        "&zoom=16&size=600x600&maptype=roadmap&key=AIzaSyBb2Sw8Q6Bs8_GXo8NXeiKubBJcjF4qDaQ";
		}
	};
});