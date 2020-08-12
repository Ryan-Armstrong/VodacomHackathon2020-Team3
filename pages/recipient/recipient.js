Page({
  data: {
    closeImage: "../../assets/image/icCloseWhite.png",
    phoneNumbers: [{ name: "Me", number: "082 317 1046" }]
  },
  onLoad() {
    // console.log(date);
  },

  /**
   * - Clicks add buttn the show input field with proceeed
   * - Allow user to type a number
   * - Save user input in the array (Top)
   * -
   */
  onAddNumber() {
    let instance = { name: "Rato", number: "082 317 1046" };
    this.data.phoneNumbers.push(instance);
    this.setData({ phoneNumbers: this.data.phoneNumbers });
    console.log(this.data.phoneNumbers);
    console.log("add number");
  }
});
