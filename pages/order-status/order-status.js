const app = getApp();

Page({
  data: {
  },
  onLoad() {
    this.setData({
      selectedBundle : app.selectedBundle,
      selectedRecommendedBundles : app.selectedRecommendedBundles
    })
  },
  onShow() {
    app.selectedBundle = {
      isRecurring: false
    };
    app.selectedRecommendedBundles = [];
  },
  goHome() {
    my.reLaunch({ url: '../buyBundle/buyBundle' });
  },
});
