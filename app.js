App({
  selectedBundle: {
    bundle: null,
    price: null,
    promotion: null,
    info: null,
    type: null,
    validity: null
  },

  onLaunch(options) {
    // Page opens for the first time
    console.info("App onLaunch");
  },
  onShow(options) {
    // Reopened by scheme from the background
  }
});
