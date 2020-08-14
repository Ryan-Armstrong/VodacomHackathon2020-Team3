Component({
  mixins: [],

  data: {
    phoneNumbers: [
      { name: "Kanya", number: "081 317 1046" },
      { name: "Neo", number: "081 317 2014" },
      { name: "Kea", number: "081 317 2051" },
      { name: "Kanya", number: "081 317 1046" },
      { name: "Neo", number: "081 317 2014" },
      { name: "Kea", number: "081 317 2051" },
      { name: "Kanya", number: "081 317 1046" },
      { name: "Neo", number: "081 317 2014" },
      { name: "Kea", number: "081 317 2051" },
      { name: "Kanya", number: "081 317 1046" },
      { name: "Neo", number: "081 317 2014" },
      { name: "Kea", number: "081 317 2051" }
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
    }
  }
});
