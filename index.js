const platformModule = require("tns-core-modules/platform");
const app = require("tns-core-modules/application");

module.exports = {
    initSdk: function (fbAppId) {
        try {
            if (platformModule.isAndroid) {
				if(fbAppId)
					com.facebook.FacebookSdk.setApplicationId(fbAppId);
                com.facebook.FacebookSdk.setAutoLogAppEventsEnabled(true);
                com.facebook.FacebookSdk.sdkInitialize(app.android.context);
				//com.facebook.appevents.AppEventsLogger.newLogger(app.android.context).logEvent("Registered");
            }
            else {
				if(fbAppId)
					FBSDKSettings.setAppID(fbAppId);
                FBSDKSettings.setAutoLogAppEventsEnabled(true);
				//FBSDKAppEvents.logEvent("Registered");
            }
        }
        catch(e){
            console.log(e);
        }
    }
};