const app = getApp();

Component({
  props: {
    bundle: null,
    price: null,
    promotion: null,
    info: null,
    type: null,
    validity: null
  },
  methods: {
    onClickBundle() {
      app.selectedBundle.bundle = this.props.bundle;
      app.selectedBundle.price = this.props.price;
      app.selectedBundle.promotion = this.props.promotion;
      app.selectedBundle.info = this.props.info;
      app.selectedBundle.type = this.props.type;
      app.selectedBundle.validity = this.props.validity;
    }
  }
});
