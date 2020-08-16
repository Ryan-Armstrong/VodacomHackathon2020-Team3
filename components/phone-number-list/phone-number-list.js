Component({
  mixins: [],

  data: { 
    value: 'food',
    contacts: [
      { name: "Kanya", number: "081 317 1046" },
      { name: "Neo", number: "081 317 2014" },
      { name: "Kea", number: "081 317 2051" },
    ],
     tempcontacts: [],
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

      const contacts = this.data.contacts;

      const newRecipient = { name: "Lerato", number: "078 427 9565"}
      contacts.unshift(newRecipient);

      console.log(contacts)
      this.setData({ isShowInput: false, contacts });

    },
     handleInput(value) {
        this.setData({
          value,
        });
      },

      handleClear(value) {
        // filter --> contacts
        //
        // on clear go back to old array
       var tempcontacts =this.data.tempcontacts;
       
       console.log(tempcontacts)
       this.setData({contacts: tempcontacts, value: " "})
        //   value: '',

        //   contacts: tempcontacts
       
        // });
      },

      handleFocus() {},

      handleBlur() {},

      handleCancel() {
        this.setData({
          value: '',
        });
      },

      handleSubmit(value) {
      var contacts = this.data.contacts;
      var filteredContacts= contacts.filter(function(contact){ return contact.name ==value})

  
      if(filteredContacts.length >0){
       this.setData({
        tempcontacts: contacts,
       contacts: filteredContacts
        });
      }
      },

  }
});
