import { Injectable } from '@angular/core';
import { Device } from '@capacitor/device';
import { Network } from '@capacitor/network';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root'
})
export class PluginsService {

  constructor() { }

  
  getDeviceInfo = async () => {
    const deviceInfo = await Device.getInfo();
    // console.log(deviceInfo);
    return deviceInfo;
  };

  getBatteryStatus = async () => {
    const batteryInfo = await Device.getBatteryInfo();
    return batteryInfo;
  };

  
  setPrefStorage = async (key:string,value:string) => {
    await Preferences.set({
      key: key,
      value: value,
    });
  };

  getPrefStorage = async (key:string) => {
    // this.setPrefStorage();
    const { value } = await Preferences.get({ key: key });
    console.log(`Hello ${value}!`);
    return value;
  };

  removeName = async () => {
    await Preferences.remove({ key: 'name' });
  };


  getNetworkStatus = async () => {
    Network.addListener('networkStatusChange', (status) => {
      console.log('Network status changed', status);
    });
    const status = await Network.getStatus();
    console.log('Network status:', status);

    return status;
  };
}
