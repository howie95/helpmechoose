// pages/random/random.ts
Page({
  _inputCache: "",
  data: {
    pageMarginTop: 0,
    //0初始1生成中2展示结果
    randomStatus: 0,
    randomMin: "0",
    randomMax: "100",
    randomCount: "10",
    randomDuplicate: true,
    randomResult: [] as number[],
  },
  doGenerateRandom() {
    const min = parseInt(this.data.randomMin);
    const max = parseInt(this.data.randomMax);
    let count = parseInt(this.data.randomCount);
    if (!this.data.randomDuplicate && count > max - min + 1) {
      wx.showToast({
        title: "范围内没有足够数量的不重复整数",
        icon: "none",
      });
      return;
    }
    this.setData({
      randomStatus: 1,
    });
    const numResultArr = [];
    if (this.data.randomDuplicate) {
      while (count > 0) {
        count--;
        numResultArr.push(Math.round(Math.random() * max - min) + min);
      }
    } else {
      const numIdxArr = [...Array(max - min + 1).keys()];
      while (count > 0) {
        count--;
        const randomIdx = Math.round(Math.random() * (numIdxArr.length - 1));
        numResultArr.push(numIdxArr[randomIdx] + min);
        numIdxArr.splice(randomIdx, 1);
      }
    }
    this.setData({
      randomResult: numResultArr,
    });
    setTimeout(() => {
      this.setData({
        randomStatus: 2,
      });
    }, 1000);
  },
  doInitStep() {
    this.setData({
      randomStatus: 0,
    });
  },
  doCopyResult() {},
  navToIndex() {
    wx.navigateBack();
  },
  handleInputBlur(e: WechatMiniprogram.TextareaBlur) {
    const targetType = e.currentTarget.dataset.type as string;
    const inputValue = parseInt(e.detail.value);
    if (Number.isNaN(inputValue)) {
      wx.showToast({ title: "请输入有效的整数值", icon: "none" });
    } else {
      if (
        targetType == "min" &&
        (inputValue < 0 || inputValue >= parseInt(this.data.randomMax))
      ) {
        wx.showToast({ title: "需大于0且小于范围上限", icon: "none" });
      } else if (targetType == "min") {
        this.data.randomMin = inputValue + "";
      }
      if (
        targetType == "max" &&
        (inputValue > 100000 || inputValue <= parseInt(this.data.randomMin))
      ) {
        wx.showToast({ title: "需小于十万且大于范围下限", icon: "none" });
      } else if (targetType == "max") {
        this.data.randomMax = inputValue + "";
      }
      if (targetType == "count" && (inputValue <= 0 || inputValue > 100)) {
        wx.showToast({ title: "最多生成个数为100个", icon: "none" });
      } else if (targetType == "count") {
        this.data.randomCount = inputValue + "";
      }
    }
    this.setData({
      randomMin: this.data.randomMin,
      randomMax: this.data.randomMax,
      randomCount: this.data.randomCount,
    });
  },
  doChangeRangeByStep(e: WechatMiniprogram.BaseEvent) {
    const targetType = e.currentTarget.dataset.type as string;
    const value = e.currentTarget.dataset.value as number;
    let currentRange = parseInt(
      targetType == "max" ? this.data.randomMax : this.data.randomMin
    );
    if (currentRange + value < 0 || currentRange + value > 100000) return;
    let currentDiff =
      parseInt(this.data.randomMax) - parseInt(this.data.randomMin);
    if (targetType == "max" && value + currentDiff <= 0) return;
    if (targetType == "min" && currentDiff - value <= 0) return;
    this.setData({
      [targetType == "max" ? "randomMax" : "randomMin"]:
        currentRange + value + "",
    });
  },
  doChangeCountByStep(e: WechatMiniprogram.BaseEvent) {
    const value = e.currentTarget.dataset.value as number;
    let currentCount = parseInt(this.data.randomCount);
    if (currentCount + value <= 0 || currentCount + value > 100) return;
    this.setData({
      randomCount: currentCount + value + "",
    });
  },
  doChangeRandomDuplicate(e: WechatMiniprogram.BaseEvent) {
    const value = e.currentTarget.dataset.value as boolean;
    this.setData({
      randomDuplicate: value,
    });
  },
  onLoad() {
    const menuRect = wx.getMenuButtonBoundingClientRect();
    this.setData({
      pageMarginTop: menuRect.top + menuRect.height,
    });
  },
  onShareAppMessage() {
    return {
      title: "一键生成随机整数，简单好用",
      path: "/pages/index/index",
    };
  },
});
