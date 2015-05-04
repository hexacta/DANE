package com.hexacta.soundword;

import org.apache.cordova.DroidGap;

import android.os.Bundle;

public class soundword extends DroidGap {

    @Override
    public void onCreate(final Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.loadUrl("file:///android_asset/www/index.html");
    }

}
