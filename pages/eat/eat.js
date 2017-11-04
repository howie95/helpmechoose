Page({
  data: {
    intro:false,
    holding:false,
    finish:false,
    starttime:0,
    timer:'',
    direction:'面前',
    side:'左',
    num:2,
  },
  random(){
    let i = Math.random()
    if(i>0.5){
      this.setData({
        direction:'面前'
      })
    }
    else{
      this.setData({
        direction: '背后'
      })
    }
    i = Math.random()
    if (i > 0.5) {
      this.setData({
        side: '左'
      })
    }
    else {
      this.setData({
        side: '右'
      })
    }
    i = Math.floor(Math.random() * 5 + 1);
    this.setData({
      num: i
    })
  },
  start(e){
    if(this.data.finish == true){return}
    this.data.starttime = e.timeStamp
    this.setData({
      holding:true
    })
    this.data.timer = setTimeout(this.finish,3000)
  },
  end(e){
    if(e.timeStamp-this.data.starttime>=3000){
      return
    }else{
      clearTimeout(this.data.timer)
      this.setData({
        holding:false
      })
    }
  },
  finish(){
    this.random()
    this.setData({
      finish:true
    })
  },
  back(){
    wx.navigateBack()
  },
  replay() {
    this.setData({
      finish: false,
      holding: false
    })
  },
  onReady: function () {
    this.setData({
      intro:true
    })
  },
  onShareAppMessage: function () {
    return {
      title: '再也不愁吃哪家餐厅了！',
      path: '/pages/index/index'
    }
  }
})