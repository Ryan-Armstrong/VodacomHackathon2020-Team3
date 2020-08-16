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
    isShowInput: false,
    inputValue: " "
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

      const newRecipient = { name: "unknown", number: this.data.inputValue}
      contacts.unshift(newRecipient);

      console.log(contacts)
      this.setData({ isShowInput: false, contacts });

    },

    onEnterNumber(e){
        console.log(e.detail.value)
         this.setData({
      inputValue: e.detail.value,
    });
    },

     handleInput(value) {
       console.log(value)
        this.setData({
          value,
        });
      },

      handleClear(value) {
       var tempcontacts =this.data.tempcontacts;
     if( tempcontacts.length >0){
       this.setData({contacts: tempcontacts, value: " "})
      }
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
      var filteredContacts= contacts.filter(function(contact){ return contact.name.toUpperCase() ==value.toUpperCase()})

  
      if(filteredContacts.length >0){
       this.setData({
        tempcontacts: contacts,
       contacts: filteredContacts
        });
      }
      },

  }
});
