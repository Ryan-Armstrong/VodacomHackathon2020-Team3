const app = getApp();

Page({
  data: {
    selectedBundle: app.selectedBundle,
    selectedRecommendedBundles: []
  },
  onLoad() {
    this.setData({ selectedBundle: app.selectedBundle, orderTotal: app.selectedBundle.promotion != null ? app.selectedBundle.promotion : app.selectedBundle.price });
  },
  selectBundle(e) {
    let selectedRecommendedBundle = this.recommendBundlesRef[e.currentTarget.id];
    selectedRecommendedBundle.selectBundle();
    if (selectedRecommendedBundle.data.isSelected) {
      app.selectedRecommendedBundles = [...app.selectedRecommendedBundles, selectedRecommendedBundle.props.bundle];
      this.setData({ orderTotal: this.data.orderTotal + selectedRecommendedBundle.props.bundle.price });
    } else {
      //unselected, remove from the chosen list
      app.selectedRecommendedBundles = app.selectedRecommendedBundles.filter(e => e !== selectedRecommendedBundle.props.bundle);
      this.setData({ orderTotal: this.data.orderTotal - selectedRecommendedBundle.props.bundle.price });
    }

    this.setData({ selectedRecommendedBundles: app.selectedRecommendedBundles });
  },
  recurringSelection(e) {
    app.selectedBundle.isRecurring = e.detail.value;
    if (e.detail.value) {
      this.setData({
        selectedBundle: {
          ...this.data.selectedBundle,
          isRecurring: app.selectedBundle.isRecurring,
          frequency: app.selectedBundle.recurringBundle.frequency,
          price: app.selectedBundle.recurringBundle.price,
          promotion: null
        },
        orderTotal: app.selectedBundle.recurringBundle.price + this.data.selectedRecommendedBundles.reduce((accum, bundle) => { return accum + bundle.price }, 0)
      });
    } else {
      this.setData({
        selectedBundle: {
          ...this.data.selectedBundle,
          isRecurring: app.selectedBundle.isRecurring,
          frequency: app.selectedBundle.frequency,
          price: app.selectedBundle.price,
          promotion: app.selectedBundle.promotion
        },
        orderTotal: (app.selectedBundle.promotion != null ? app.selectedBundle.promotion : app.selectedBundle.price) + this.data.selectedRecommendedBundles.reduce((accum, bundle) => { return accum + bundle.price }, 0)
      });
    }
  },
  saveRef(ref) {
    this.recommendBundlesRef = [...this.recommendBundlesRef, ref];
  },
  recommendBundlesRef: [],
});
