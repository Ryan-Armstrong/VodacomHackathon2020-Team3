const app = getApp();

Page({
  data: {
    selectedFilterColor: "#4A4D4E",
    unselectedFilterColor: "#F4F4F4",
    appliedFilterColor: "#F4F4F4",
    filters: [
      { name: "Any", displayName: "Any", selected: true },
      { name: "30days", displayName: "30 Days", selected: false },
      { name: "untilMidnight", displayName: "Until Midnight", selected: false },
      { name: "1hour", displayName: "1 Hour", selected: false }
    ],
    masterBundles: app.masterBundleData,
    displayedBundles: []
  },
  onLoad() {
    this.setData({
      displayedBundles: this.data.masterBundles.map(e => ({ ...e, hideBundle: false }))
    });
  },
  onChecked(e) {
    // Modify global data
    let checkedFilters = e.currentTarget.id;
    if (checkedFilters == 'Any') {
      const newFilters = this.data.filters;
      this.setData({
        displayedBundles: this.data.masterBundles,
        filters: newFilters
      });
    } else {
      let selectedFilter = this.data.filters.filter(e => checkedFilters.indexOf(e.name) > -1)[0];
      this.setData({
        displayedBundles: this.data.displayedBundles.map(e => ({
          ...e,
          hideBundle: (e.validity != selectedFilter.name)
        })),
        filters: this.data.filters.map(filter => ({
          ...filter,
          selected: checkedFilters.indexOf(filter.name) > -1
        }))
      });
    }
  },
  selectBundle(e) {
    this.bundlesRef.map(function (bundle) {
      bundle.clearSelection();
    });
    let selectedBundle = this.bundlesRef[e.currentTarget.id]
    selectedBundle.selectBundle();
    app.selectedBundle = { isRecurring: false, ...selectedBundle.props.bundle, validityDisplayName: this.data.filters.filter(e => e.name == selectedBundle.props.bundle.validity)[0].displayName };
  },
  clickBuyBundleButton() {
    console.log(app.selectedBundle);
    my.navigateTo({ url: '../summary/summary' });
  },
  saveRef(ref) {
    this.bundlesRef = [...this.bundlesRef, ref];
  },
  bundlesRef: [],
});
