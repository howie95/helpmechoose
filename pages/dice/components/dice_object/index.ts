// pages/dice/components/dice_object/index.ts
Component({
  data: {
    currentSide: "0",
    diceAnim: false,
  },
  methods: {
    roll(delay?: number, time?: number) {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.setData({
            diceAnim: true,
          });
          const rollResult = Math.floor(Math.random() * 6) + 1 + "";
          setTimeout(() => {
            this.setData({
              diceAnim: false,
            });
            setTimeout(() => {
              this.setData({
                currentSide: rollResult,
              });
              resolve(rollResult);
            }, 50);
          }, time || 2000);
        }, delay || 0);
      });
    },
    reset() {
      this.setData({
        currentSide: "0",
        diceAnim: false,
      });
    },
  },
});
