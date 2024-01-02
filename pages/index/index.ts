Page({
  data: {
    wxMenuHeight: 0,
    wxMenuTop: 0,
    wxSafeBottom: 0,
  },
  navTo(e: WechatMiniprogram.BaseEvent) {
    let link = e.currentTarget.dataset.link;
    wx.navigateTo({
      url: link,
    });
  },
  onLoad() {
    const menuRect = wx.getMenuButtonBoundingClientRect();
    const windowInfo = wx.getWindowInfo();
    this.setData({
      wxMenuHeight: menuRect.height,
      wxMenuTop: menuRect.top,
      wxSafeBottom: windowInfo.safeArea
        ? windowInfo.screenHeight - windowInfo.safeArea.bottom
        : 0,
    });
  },
  onShareAppMessage: function () {
    return {
      title: "搞定选择困难症！",
      path: "/pages/index/index",
    };
  },
});
