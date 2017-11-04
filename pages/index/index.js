const app = getApp()
Page({
  data: {

  },
  navto(e){
    let i = e.target.dataset.link
    wx.navigateTo({
      url: '../'+i+'/'+i
    })
  },
  onShareAppMessage: function () {
    return {
      title: '搞定选择困难症！',
      path: '/pages/index/index'
    }
  }
})
