Page({
  data: {
    intro: false,
    holding: false,
    finish: false,
    starttime: 0,
    timer: '',
    timer1:'',
    timer2:'',
    seconds:3,
    text:'',
    answers: ["千万别在这上面押宝", "采取一个大胆的态度", "听取专家的意见", "你会发现你自己无法妥协", "专注在你的家庭生活上吧", "研究，然后享受它", "当然", "它将无法预测", "绝对不", "带着好玩的好奇心去探索它", "最好等等看", "它好像是确定的", "趁早做", "对别人保密", "可能会发生一些令人吃惊的事作为结局", "答案可能会是以另一种方式来到你身边", "你将需要适当调整一下", "怀疑它", "它将带来好运", "要有点耐心", "你会发现你所需要知道的一切", "很显然会有别的情况发生", "你将会很开心你这样做了", "把它写下来", "千万别陷入你的个人感情", "改变你的焦点", "这时候非常不顺利", "用任何你能做到的方式去提升", "照你想的做", "如果不是做的很好，就再也不要做它了", "这个时候不要要求更多", "避开第一个解决方案", "观察，看看会发生什么事", "它会影响到其他人怎么看你", "到时候是你自己说了算", "以一个更加轻松的速度进行吧", "最好的解决方法可能不是显而易见的那个", "保持灵活", "这不是你所能控制的", "多说几句“谢谢”", "享受过程就好", "谨慎地处理", "注意细节", "当你要去做的时候，小心行事", "毫无保留的把它说出来", "不要犹豫了", "它有着非常重要的意义", "更换一下重要事项的优先顺序", "现在是做一个新计划的最好时机了", "继续前进", "做个为什么不这样的清单", "不要等待", "它将是你无法忘怀的事期望能够解决", "找出更多的选择", "履行你自己的义务", "稍后处理它", "跟随其他人的指引", "做一个为什么的清单", "冒险一试", "接受你习惯的改变", "你需要采取主动", "这可保证不了", "情况将会转变的非常快", "你将不得不妥协", "你需要更多的信息", "相信你最起初的想法", "它将引起一场轰动", "可能会发生一些令人吃惊的事作为结局", "它将会带来好运", "灾难是极有可能的", "迫切要求终止", "选择太多会让你难以抉择", "是的", "更加仔细地聆听，然后你就会知道", "答案就在你身边", "让它过去吧", "那将会是一种金钱的浪费", "全力以赴", "你不要真正的在意", "你需要考虑考虑其他方式", "从现在起一年都没有什么所谓", "不要浪费你的时间了", "他可能是非凡的", "数到10，再问一次", "装作它是真的", "布置优先次序将会是过程中一个必须的部分", "运用你的能力", "他一定会很好", "镇定下来", "等待", "当你行动的时候，你需要不断弥补", "一笑置之", "别人也同样取决于你的选择", "你将会后悔的", "无可非议", "当然", "你知道现在比以前更好了", "相信你的直觉", "考虑到它的机会", "问问你的母亲", "可能，当你老的时候", "只能做一次", "可能", "不要耗费太多心血", "采取一个大胆的态度", "不行", "行", "你的行动将会改善一切", "别傻了", "千万别在这上面耗费太多", "采取一个大胆的态度", "听取专家的意见", "你会发现你自己无法妥协", "专注在你的家庭生活上吧", "探索，然后享受它", "当然", "事态仍旧无法预测", "绝对不", "带着好奇心去探索它", "欣然的接受它", "最好等等看", "对别人保密", "可能会发生一些令人吃惊的事作为结局", "问问你的父亲", "绝不", "答案可能会是以另一种形式来到你身边", "你将需要适当调整一下", "怀疑它", "它将会带来好运", "要有耐心点", "你会发现你所需要知道的一切", "有一个实质性的链接链接到另种情况", "观察，看看会发生什么事", "它会影响到其他人怎么看你", "你将会很开心你这样做了", "把它写下来", "这时候非常不顺利", "用任何你能做到的方式去提升", "如果你照你说的做", "如果他是做得很好的，如果不是，就再也不要做它了", "这个时候不要要求更多", "放弃老的解决方案", "不，如果你独自一个人的话", "移除你自己的阻碍", "最好把注意力放在你的工作上", "赌一下", "先把其他事完成", "你可能有敌对的人", "你陷的太深了", "情况还不清楚", "需要一个实质性的努力", "先让你自己休息一下", "这个机会不会很快再来", "再重新考虑你的方法", "它将是不可取的", "等待一个更好的提议", "早点定下来", "是的，但是别强迫", "去取得一个更加清晰的视野", "实际点", "节省你的能量吧", "冒险一试", "现在你可以", "不要做得过火了", "它将会扶持你", "你将为它付出代价", "它肯定会把事情变得有趣", "结果会是积极的", "不管什么", "他是肯定的", "它将是一种乐趣", "它是不确定的", "更加慷慨点", "你可能必须要丢下其他的东西", "不用担心", "对意外情况做好准备", "他没有什么意义", "告诉别人它对你意味着什么", "你可能必须要丢下其他的东西", "无论你做什么，这件事都不会结束", "保持开放的心态", "制作计划的好时机", "他可能艰难，但是你会发现它是有价值的", "他是一个非常值得注意的麻烦", "采取一个大胆的态度", "听取专家的意见", "将会有一个阻碍需要去克服", "相关联的问题可能会浮出水面", "你肯定需要支持", "协助将会使你想成功发展", "合作将会是至关重要的", "拿下他", "不能失败", "温和的坚持会有回报的", "你将不会失望", "找出更多的提议", "已经时一个木已成舟的事了", "保持你的良好心态", "花多点时间去决定", "不要被迫太快行动", "不要忽略那些显而易见的事", "你必须现在行动", "他不值得努力", "如果你不抵抗", "遵守规则", "别忘记了享受乐趣"],
  },
  random() {
    let i = Math.floor(Math.random() * 206 + 1)
    this.setData({
      text:this.data.answers[i]
    })
  },
  start(e) {
    if (this.data.finish == true) { return }
    this.data.starttime = e.timeStamp
    this.setData({
      holding: true
    })
    this.data.timer1 = setTimeout(()=>{
      this.setData({
        seconds: 2
      })
    }, 1000)
    this.data.timer2 = setTimeout(() => {
      this.setData({
        seconds: 1
      })
    }, 2000)
    this.data.timer = setTimeout(this.finish, 3000)
  },
  end(e) {
    if (e.timeStamp - this.data.starttime >= 3000) {
      return
    } else {
      clearTimeout(this.data.timer)
      clearTimeout(this.data.timer1)
      clearTimeout(this.data.timer2)
      this.setData({
        seconds:3,
        holding: false
      })
    }
  },
  finish() {
    this.random()
    this.setData({
      finish: true
    })
  },
  back() {
    wx.navigateBack()
  },
  replay() {
    this.setData({
      seconds:3,
      finish: false,
      holding: false
    })
  },
  onReady: function () {
    this.setData({
      intro: true
    })
  },
  onShareAppMessage: function () {
    return {
      title: '解答一切的答案之书',
      path: '/pages/index/index'
    }
  }
})