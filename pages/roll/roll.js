Page({
  data: {
    holding:false,
    finish:false,
    starttime:0,
    timer:'',
    result:'YES',
  },
  random(){
    let i = Math.random()
    if(i>0.5){
      this.setData({
        result:'YES'
      })
    }
    else{
      this.setData({
        result: 'NO'
      })
    }
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
  replay(){
    this.setData({
      holding: false
    })
    setTimeout(()=>{
      this.setData({
        finish: false,
      })
    },500)
  },
  onReady: function () {
    this.setData({
      intro: true
    })
  },
  onShareAppMessage: function () {
    return {
      title: '拿不定的主意用硬币解决！',
      path: '/pages/index/index'
    }
  }
})