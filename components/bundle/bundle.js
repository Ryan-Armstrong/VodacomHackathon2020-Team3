Component({
  props: {
    bundle: null
  },
  data: {
    isSelected: false,
    bundleHighlight: "unselect-box",
    cardBorderSelect: "card-unselect-border"
  },
  methods: {
    selectBundle() {
      if (this.data.isSelected) {
        this.setData({
          isSelected: !this.data.isSelected,
          bundleHighlight: "unselect-box",
          cardBorderSelect: "card-unselect-border"
        });
      } else {
        this.setData({
          isSelected: !this.data.isSelected,
          bundleHighlight: "select-box",
          cardBorderSelect: "card-select-border"
        });
      }
    },
    clearSelection() {
      this.setData({ 
        isSelected: false, 
        bundleHighlight: "unselect-box",
        cardBorderSelect: "card-unselect-border"
      });
    }
  },
});
