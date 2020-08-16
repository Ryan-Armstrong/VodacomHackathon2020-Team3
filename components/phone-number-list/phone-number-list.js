Component({
  mixins: [],

  data: { 
    value: '',
    contacts: [
      { name: "Kanya", number: "081 317 1046" },
      { name: "Neo", number: "081 317 2014" },
      { name: "Kea", number: "081 317 2051" },
    ],
     tempcontacts: [],
     filteredContacts: [],
    isShowInput: false,
    inputValue: " "
  },
  onItemClick(ev) {
    my.alert({
      content: `Click the ${ev.index} row`
    });
  },
  props: {},

  didMount() {
    var contacts = this.data.contacts;
    var tempContacts = contacts.filter(() => true)
    this.setData({tempContacts:tempContacts});

  },

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

      this.setData({ isShowInput: false, contacts });

    },

    onEnterNumber(e){
         this.setData({
      inputValue: e.detail.value,
    });
    },

     handleInput(value) {
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

      handleCancel() {
        this.setData({
          value: '',
        });
      },

      handleSubmit(value) {
      var contacts = this.data.contacts;
      var tempContacts = this.data.tempContacts;

      var filteredContacts= tempContacts.filter(function(contact){
         return contact.name.toUpperCase().startsWith(value.toUpperCase())});      
           if(value==='' || filteredContacts.length==0 ){
         this.setData({
       contacts: tempContacts,
        });
       }
       else{
        this.setData({
       contacts: filteredContacts,
        });
  
       }      
      },

  }
});








