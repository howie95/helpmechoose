Page({
  data: {
    finish:false,
    typing:false,
    remove:false,
    list:[],
    result:0,
  },
  random(){
    let count = this.data.list.length
    let i = Math.floor(Math.random() *count + 1)
    this.setData({
      result:i
    })
  },
  add(){
    let i = this.data.list
    i.push({
    })
    this.setData({
      typing:true,
      list:i
    })
  },
  confirmthis(e){
    let i = this.data.list
    i[e.target.dataset.index].text = e.detail.value
    this.setData({
      typing:false,
      list:i
    })
  },
  finish(){
    this.random()
    this.setData({
      finish:true
    })
    setTimeout(()=>{
      this.setData({
        remove: true
      })
    },1000)
  },
  back(){
    wx.navigateBack()
  },
  replay(){
    let before = this.data.result
    let count = this.data.list.length
    let i = Math.floor(Math.random() *count + 1)
    while(i == before){
      i = Math.floor(Math.random() *count + 1)
    }
    this.setData({
      result: i
    })
  },
  onReady: function () {
    this.setData({
      intro: true
    })
  },
  onShareAppMessage: function () {
    return {
      title: '搞定选择困难症！',
      path: '/pages/index/index'
    }
  }
})