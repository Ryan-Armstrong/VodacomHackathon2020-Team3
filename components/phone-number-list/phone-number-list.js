Component({
  mixins: [],

  data: { 
    value: 'food',
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

    },


checkAdult(value) {
  return value >= 18;
}

,
     handleInput(value) {


        this.setData({
          value,
        });
      },

      handleClear(value) {
        this.setData({
          value: '',
       
        });
      },

      handleFocus() {},

      handleBlur() {},

      handleCancel() {
        this.setData({
          value: '',
        });
      },

      handleSubmit(value) {
      var phoneNumbers = this.data.phoneNumbers;
      var lNames= phoneNumbers.filter(function(contact){ return contact.name ==value})
       console.log(lNames);
      
       this.setData({
          value: '',
       phoneNumbers: lNames
        });

        // my.alert({
        //   content: value,
        // });
      },

  }
});
