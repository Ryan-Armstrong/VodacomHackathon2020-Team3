Component({
  mixins: [],

  data: {
    phoneNumbers: [
      { name: "Kanya", number: "081 317 1046" },
      { name: "Neo", number: "081 317 2014" },
      { name: "Kea", number: "081 317 2051" },
      
  
    ],
    isShowInput: false
  },
  onItemClick(ev) {
    my.alert({
      content: `Click the ${ev.index} row`
    });
  },
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    onChange(e) {
      my.alert({
        title: `You are selecting the framework ${e.detail.value}`
      });
    },

    isShowInput() {
      this.setData({ isShowInput: true });
    },


    onProceed() {

      const phoneNumbers = this.data.phoneNumbers;

      const newRecipient = { name: "Lerato", number: "078 427 9565"}
      phoneNumbers.unshift(newRecipient);
      console.log(phoneNumbers)
      this.setData({ isShowInput: false, phoneNumbers });

    }
  }
});
