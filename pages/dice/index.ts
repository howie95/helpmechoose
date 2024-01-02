// pages/dice/index.ts
Page({
  data: {
    diceCount: 1,
    //0初始1进行中2结果
    diceStatus: 0,
  },
  doDiceCountAdd() {
    if (this.data.diceCount > 3) return;
    this.setData({
      diceCount: this.data.diceCount + 1,
    });
    this.doDiceReset();
  },
  doDiceCountMinus() {
    if (this.data.diceCount < 2) return;
    this.setData({
      diceCount: this.data.diceCount - 1,
    });
    this.doDiceReset();
  },
  doDiceReset() {
    for (let index = 0; index < 4; index++) {
      this.selectComponent(`#diceObj${index + 1}`).reset();
    }
  },
  doDiceRollin() {
    this.setData({
      diceStatus: 1,
    });
    const diceResult = [];
    for (let index = 0; index < this.data.diceCount; index++) {
      diceResult.push(
        this.selectComponent(`#diceObj${index + 1}`).roll(index * 300)
      );
    }
    Promise.all(diceResult).then((result) => {
      this.setData({
        diceStatus: 2,
      });
    });
  },
  resetRollin() {
    this.doDiceReset();
    this.setData({
      diceStatus: 1,
    });
    setTimeout(() => {
      this.setData({
        diceStatus: 0,
      });
    }, 1000);
  },
  onShareAppMessage() {
    return {
      title: "简单好用的骰子🎲",
      path: "/pages/index/index",
    };
  },
});
