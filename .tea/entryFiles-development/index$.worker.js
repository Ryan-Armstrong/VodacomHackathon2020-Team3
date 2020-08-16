if(!self.__appxInited) {
self.__appxInited = 1;
require('@alipay/appx-compiler/lib/sjsEnvInit');

require('./config$');


      if( navigator.userAgent && (navigator.userAgent.indexOf('LyraVM') > 0 || navigator.userAgent.indexOf('AlipayIDE') > 0) ) {
        var AFAppX = self.AFAppX.getAppContext ? self.AFAppX.getAppContext().AFAppX : self.AFAppX;
      } else {
        importScripts('https://appx/af-appx.worker.min.js');
        var AFAppX = self.AFAppX;
      }
      self.getCurrentPages = AFAppX.getCurrentPages;
      self.getApp = AFAppX.getApp;
      self.Page = AFAppX.Page;
      self.App = AFAppX.App;
      self.my = AFAppX.bridge || AFAppX.abridge;
      self.abridge = self.my;
      self.Component = AFAppX.WorkerComponent || function(){};
      self.$global = AFAppX.$global;
      self.requirePlugin = AFAppX.requirePlugin;
    

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}

if(AFAppX.compilerConfig){ AFAppX.compilerConfig.component2 = true; }

function success() {
require('../../app');
require('../../components/bundle/bundle?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/buyBundle/buyBundle?hash=a9b48d7862c23db513325a890eec7d7fb315bfeb');
require('../../pages/summary/summary?hash=a9b48d7862c23db513325a890eec7d7fb315bfeb');
require('../../pages/order-status/order-status?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../components/customheading/customheading?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/list/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/list/list-item/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/am-checkbox/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/search-bar/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/phone-number-list/phone-number-list?hash=edca585a9d76ef4e6a18a489cff2d2600792174d');
require('../../node_modules/mini-antui/es/footer/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/recipient/recipient?hash=4509c58dd3ec5af9fd7dbab6020d3634374ccbf6');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}