const platformModule = require("tns-core-modules/platform");
const app = require("tns-core-modules/application");

module.exports = {
    initSdk: function (fbAppId) {
        try {
            if (platformModule.isAndroid) {
                com.facebook.FacebookSdk.setApplicationId(fbAppId);
                com.facebook.FacebookSdk.setAutoLogAppEventsEnabled(true);
                com.facebook.FacebookSdk.sdkInitialize(app.android.context);
            }
            else {
                FBSDKSettings.setAutoLogAppEventsEnabled(true);
                FBSDKSettings.setAppID(fbAppId);
            }
        }
        catch(e){
            console.log(e);
        }
    }
};