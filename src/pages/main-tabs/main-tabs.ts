import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the MainTabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main-tabs',
  templateUrl: 'main-tabs.html'
})
export class MainTabsPage {

  mapsRoot = 'MapsPage'
  chatRoot = 'ChatPage'
  homeRoot = 'HomePage'
  manageRoot = 'ManagePage'
  settingsRoot = 'SettingsPage'


  constructor(public navCtrl: NavController) {}

}
