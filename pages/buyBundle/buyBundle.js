Page({
  data: {
    filters: [
      { name: "data", displayName: "Data", selected: false },
      { name: "airtime", displayName: "Airtime", selected: false },
      { name: "ticket", displayName: "Ticket", selected: false },
      { name: "something", displayName: "Something", selected: false },
      { name: "another", displayName: "Another", selected: false }
    ],
    masterBundles: [
      {
        bundle: "15GB",
        price: "199",
        promotion: "149",
        info: "best deal",
        type: "data"
      },
      {
        bundle: "1GB",
        price: "99",
        promotion: "49",
        info: "second best deal",
        type: "data"
      },
      {
        bundle: "5GB",
        price: "299",
        promotion: null,
        info: null,
        type: "data"
      },
      {
        bundle: "10GB",
        price: "499",
        promotion: null,
        info: null,
        type: "data"
      },

      {
        bundle: "R300",
        price: "149",
        promotion: "99",
        info: "best price",
        type: "airtime"
      },
      {
        bundle: "R200",
        price: "99",
        promotion: null,
        info: null,
        type: "airtime"
      },
      {
        bundle: "R500",
        price: "350",
        promotion: null,
        info: null,
        type: "airtime"
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
    const checkedFilters = e.detail.value;
    this.data.filters = this.data.filters.map(filter => ({
      ...filter,
      selected: checkedFilters.indexOf(filter.name) > -1
    }));

    let newDisplayBundles = [];

    for (var i of this.data.masterBundles) {
      if (checkedFilters.includes(i.type)) {
        newDisplayBundles.push(i);
      }
    }

    this.setData({
      displayedBundles: newDisplayBundles
    });

    console.log(newDisplayBundles);
  }
});
