package com.reactnativeappbgcolor;

import androidx.annotation.NonNull;
import android.app.Activity;
import android.view.View;
import android.graphics.Color;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

@ReactModule(name = AppBgColorModule.NAME)
public class AppBgColorModule extends ReactContextBaseJavaModule {
    public static final String NAME = "AppBgColor";

    public AppBgColorModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }


    @ReactMethod
    public void setBackgroundColor(String color) {
        final Activity activity = getCurrentActivity();

        if (activity == null) {
            return;
        }

        activity.runOnUiThread(new Runnable() {
        @Override
        public void run() {
            View view = activity.getWindow().getDecorView();
            int parsedColor = Color.parseColor(color);
            view.getRootView().setBackgroundColor(parsedColor);
        }});
    }

    
}
