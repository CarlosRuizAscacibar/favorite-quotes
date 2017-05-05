import { Component } from '@angular/core';
import { Toggle } from 'ionic-angular';

/**
 * Generated class for the Settings page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})

export class SettingsPage {

  onTogle(toggle: Toggle){
    toggle.checked;
  }

}
