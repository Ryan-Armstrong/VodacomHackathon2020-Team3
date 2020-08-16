const app = getApp();

Page({
  data: {
    selectedFilterColor: "#4A4D4E",
    unselectedFilterColor: "#F4F4F4",
    appliedFilterColor: "#F4F4F4",
    filters: [
      { name: "All", displayName: "All", selected: true },
      { name: "30days", displayName: "30 Days", selected: false },
      { name: "untilMidnight", displayName: "Until Midnight", selected: false },
      { name: "1hour", displayName: "1 Hour", selected: false }
    ],
    masterBundles: [
      {
        bundle: "1GB",
        price: "12",
        promotion: null,
        info: null,
        type: "data",
        validity: "1hour"
      },
      {
        bundle: "1GB",
        price: "29",
        promotion: null,
        info: null,
        type: "data",
        validity: "untilMidnight"
      },
      {
        bundle: "1GB",
        price: "115",
        promotion: "99",
        info: null,
        type: "data",
        validity: "30days"
      },
      {
        bundle: "250MB",
        price: "59",
        promotion: "49",
        info: null,
        type: "data",
        validity: "30days"
      },
      {
        bundle: "1.5GB",
        price: "149",
        promotion: "129",
        info: null,
        type: "data",
        validity: "30days"
      },
      {
        bundle: "500MB",
        price: "79",
        promotion: null,
        info: null,
        type: "data",
        validity: "30days"
      },
      {
        bundle: "3GB",
        price: "229",
        promotion: null,
        info: null,
        type: "data",
        validity: "30days"
      },
      {
        bundle: "5GB",
        price: "349",
        promotion: null,
        info: null,
        type: "data",
        validity: "30days"
      }
    ],
    displayedBundles: []
  },
  onLoad() {
    let initBundles = [];

    for (var i of this.data.masterBundles) {
      initBundles.push(i);
    }

    this.setData({
      displayedBundles: initBundles
    });
  },

  onChecked(e) {
    // Modify global data
    const checkedFilters = e.currentTarget.id;
    this.data.filters = this.data.filters.map(filter => ({
      ...filter,
      selected: checkedFilters.indexOf(filter.name) > -1
    }));

    const newFilters = this.data.filters;
    let newDisplayBundles = [];

    if (checkedFilters == 'All') {
      this.setData({
        displayedBundles: this.data.masterBundles,
        filters: newFilters
      });
    } else {
      for (var i of this.data.masterBundles) {
        for (var filter of this.data.filters) {
          if (filter.selected == true) {
            if (i.validity == filter.name) {
              newDisplayBundles.push(i);
            }
          }
        }
      }
      this.setData({
        displayedBundles: newDisplayBundles,
        filters: newFilters
      });
    }
  },

  clickBuyBundleButton() {
    console.log(app.selectedBundle);
  }
});
