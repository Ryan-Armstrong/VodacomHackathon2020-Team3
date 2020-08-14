Component({
  mixins: [],

  data: {
    phoneNumbers: [
      { name: "Kanya", number: "081 317 1046" },
      { name: "Neo", number: "081 317 2014" },
      { name: "Kea", number: "081 317 2051" }
    ],
    items: [
      {
        checked: true,
        disabled: false,
        value: "a",
        title: "Checkbox - Checked by default",
        id: "checkbox1"
      },
      {
        checked: false,
        disabled: false,
        value: "b",
        title: "Checkbox - Unchecked by default",
        id: "checkbox2"
      },
      {
        checked: true,
        disabled: true,
        value: "c",
        title: "Checkbox - disabled checked by default",
        id: "checkbox3"
      },
      {
        checked: false,
        disabled: true,
        value: "d",
        title: "Checkbox - disabled unchecked by default",
        id: "checkbox4"
      }
    ],
    items2: [
      { name: "react", value: "React", checked: true },
      { name: "vue", value: "Vue.js" },
      { name: "ember", value: "Ember.js" },
      { name: "backbone", value: "Backbone.js", disabled: true }
    ]
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
    }
  }
});
