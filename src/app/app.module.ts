import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { MainTabsPageModule } from '../pages/main-tabs/main-tabs.module';
import { HomePageModule } from '../pages/home/home.module';
import { ChatPageModule } from '../pages/chat/chat.module';
import { MapsPageModule } from '../pages/maps/maps.module';
import { SettingsPageModule } from '../pages/settings/settings.module';
import { ManagePageModule } from '../pages/manage/manage.module';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    MainTabsPageModule,
    HomePageModule,
    ChatPageModule,
    MapsPageModule,
    SettingsPageModule,
    ManagePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
