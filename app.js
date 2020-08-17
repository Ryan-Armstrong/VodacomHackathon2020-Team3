App({
  selectedBundle: {
    isRecurring: false
  },
  selectedRecommendedBundles: [],
  masterBundleData: [
    {
      bundle: "1GB",
      price: 12,
      promotion: null,
      promoBanner: "JUST 4 YOU",
      info: null,
      type: "data",
      validity: "1hour",
      frequency: "Once-off",
      categoryText: "Data",
      info: "Use within 1 hour"
    },
    {
      bundle: "1GB",
      price: 29,
      promotion: null,
      info: null,
      type: "data",
      validity: "untilMidnight",
      frequency: "Once-off",
      categoryText: "Data",
      info: "Use until midnight",
      recommenedBundles: [
        {
          bundle: "1GB",
          price: 5,
          iconClass: "fas fa-video",
          info: null,
          type: "data",
          validity: "untilMidnight",
          frequency: "Once-off",
          categoryText: "Netflix Data",
          validityDisplayName: "until midnight",
          info: "Use until midnight"
        },
        {
          bundle: "1GB",
          price: 5,
          iconClass: "fab fa-whatsapp",
          info: null,
          type: "data",
          validity: "untilMidnight",
          frequency: "Once-off",
          categoryText: "Whatsapp Data",
          validityDisplayName: "until midnight",
          info: "Use until midnight"
        },
        {
          bundle: "1GB",
          price: 5,
          iconClass: "fab fa-facebook-square",
          info: null,
          type: "data",
          validity: "untilMidnight",
          frequency: "Once-off",
          categoryText: "Facebook Data",
          validityDisplayName: "until midnight",
          info: "Use until midnight"
        }
      ]
    },
    {
      bundle: "1GB",
      price: 115,
      promotion: 99,
      info: null,
      type: "data",
      validity: "30days",
      frequency: "Once-off",
      categoryText: "Data",
      info: "Use within 30 days",
      recurringBundle: {
        frequency: "Recurring",
        price: 75,
        saving: 24
      },
      recommenedBundles: [
        {
          bundle: "1GB",
          price: 12,
          iconClass: "fas fa-video",
          info: null,
          type: "data",
          validity: "7days",
          frequency: "Once-off",
          categoryText: "Netflix Data",
          validityDisplayName: "7 days",
          info: "Use within 7 days"
        },
        {
          bundle: "1GB",
          price: 8,
          iconClass: "fab fa-whatsapp",
          info: null,
          type: "data",
          validity: "7days",
          frequency: "Once-off",
          categoryText: "Whatsapp Data",
          validityDisplayName: "7 days",
          info: "Use within 7 days"
        },
        {
          bundle: "1GB",
          price: 10,
          iconClass: "fab fa-facebook-square",
          info: null,
          type: "data",
          validity: "7days",
          frequency: "Once-off",
          categoryText: "Facebook Data",
          validityDisplayName: "7 days",
          info: "Use within 7 days"
        }
      ]
    },
    {
      bundle: "250MB",
      price: 59,
      promotion: 49,
      promoBanner: "JUST 4 YOU",
      info: null,
      type: "data",
      validity: "30days",
      frequency: "Once-off",
      categoryText: "Data",
      info: "Use within 30 days",
    },
    {
      bundle: "1.5GB",
      price: 149,
      promotion: 129,
      promoBanner: "ON SPECIAL",
      info: null,
      type: "data",
      validity: "30days",
      frequency: "Once-off",
      categoryText: "Data",
      info: "Use within 30 days",
      recurringBundle: {
        frequency: "Recurring",
        price: 100,
        saving: 29
      }
    },
    {
      bundle: "500MB",
      price: 79,
      promotion: null,
      info: null,
      type: "data",
      validity: "30days",
      frequency: "Once-off",
      categoryText: "Data",
      info: "Use within 30 days"
    },
    {
      bundle: "3GB",
      price: 229,
      promotion: null,
      info: null,
      type: "data",
      validity: "30days",
      categoryText: "Data",
      info: "Use within 30 days",
    },
    {
      bundle: "5GB",
      price: 349,
      promotion: null,
      info: null,
      type: "data",
      validity: "30days",
      frequency: "Once-off",
      categoryText: "Data",
      info: "Use within 30 days",
    }
  ],
  onLaunch(options) {
    // Page opens for the first time
    console.info("App onLaunch");
  },
  onShow(options) {
    // Reopened by scheme from the background
  }
});
