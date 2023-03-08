package com.modulos;

import android.app.AlertDialog;
import android.util.Log;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class CalendarModule extends ReactContextBaseJavaModule {
    public CalendarModule(ReactApplicationContext context){
        super(context);
    }

    @Override
    public String getName(){
        return "CalendarModule";
    }

    @ReactMethod
    public void createCalendarEvent(String name, String location){
        // "Event created:" + name + " on "+location;
    }
}
