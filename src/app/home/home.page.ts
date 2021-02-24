import { Component } from '@angular/core';
import { AndroidPermissions } from '@ionic-enterprise/android-permissions/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private _p: AndroidPermissions) {}

  public async cameraPermissions(): Promise<void> {
    console.log(
      'camera permission',
      await this._p.checkPermission(this._p.PERMISSION.CAMERA)
    );
    console.log(
      'request permission',
      await this._p.requestPermission(this._p.PERMISSION.CAMERA)
    );
  }

  public async bleAdminPermissions(): Promise<void> {
    console.log(
      'ble admin permission',
      await this._p.checkPermission(this._p.PERMISSION.BLUETOOTH_ADMIN)
    );
    console.log(
      'request permission',
      await this._p.requestPermission(this._p.PERMISSION.BLUETOOTH_ADMIN)
    );
  }
}
