// pages/page1/page1.js
let touchDotX = 0; //X按下时坐标
let touchDotY = 0; //y按下时坐标
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    innertext: 0,
    isFront1: true,
    animationData1: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  touchstart1: function (event) {
    console.log('touchstart1');
    touchDotX = event.touches[0].pageX; 
    touchDotY = event.touches[0].pageY;
    console.log("起始点的坐标X:" + touchDotX);
    console.log("起始点的坐标Y:" + touchDotY);
  },
  touchend1: function (event) {
    console.log('touchend1');
      // 手指离开屏幕时记录的坐标
      let touchMoveX = event.changedTouches[0].pageX;
      let touchMoveY = event.changedTouches[0].pageY;
      // 起始点的坐标(x0,y0)和手指离开时的坐标(x1,y1)之差
      let tmX = touchMoveX - touchDotX;
      let tmY = touchMoveY - touchDotY;
      // 两点横纵坐标差的绝对值
      let absX = Math.abs(tmX);
      let absY = Math.abs(tmY);
      //起始点的坐标(x0,y0)和手指离开时的坐标(x1,y1)之间的距离
      let delta = Math.sqrt(absX * absX + absY * absY);
      console.log('起始点和离开点距离:' + delta + 'px');
      // 如果delta超过60px（可以视情况自己微调）,判定为手势触发
      if (delta >= 60) {
      // 如果 |x0-x1|>|y0-y1|,即absX>abxY,判定为左右滑动
      if (absX > absY) {
      // 如更tmX<0，即(离开点的X)-(起始点X)小于0 ，判定为左滑
      if (tmX < 0) {
       console.log("左滑=====");
       console.log('Animation left');
       // 执行左滑动画
       this.Animation1(-500);
       // 如更tmX>0，即(离开点的X)-(起始点X)大于0 ，判定为右滑
      } else {
       console.log("右滑=====");
       // 执行右滑动画
       this.Animation1(500);
       console.log('Animation right');
      }
      // 如果 |x0-x1|<|y0-y1|,即absX<abxY,判定为上下滑动
      } else {
      // 如更tmY<0，即(离开点的Y)-(起始点Y)小于0 ，判定为上滑
      if (tmY < 0) {
       console.log("上滑动=====");
       this.setData({
       isFront1: !this.data.isFront1
       });
       // 如更tmY>0，即(离开点的Y)-(起始点Y)大于0 ，判定为下滑
      } else {
       console.log("下滑动=====");
       this.setData({
       isFront1: !this.data.isFront1
       });
      }
      }
      } else {
      console.log("手势未触发=====");
      }
       
  },

  /**
 * 卡片1:
 * 左滑动右滑动动画
 */
  Animation1: function (translateXX) {
  console.log('执行动画');
  const animation = wx.createAnimation({
  duration: 680,
  timingFunction: "ease",
  });
  this.animation = animation;
  console.log('执行动画')
  // 如果大于0，判定是右滑动画，否则左滑
  if (translateXX > 0) {
  animation.translateY(0).rotate(20).translateX(translateXX).opacity(0).step();
  } else {
  animation.translateY(0).rotate(-20).translateX(translateXX).opacity(0).step();
  }
  // 直接归位到原来位置
  this.animation.translateY(0).translateX(0).opacity(1).rotate(0).step({
  duration: 10,
  timingFunction: "linear", 
  });
  this.setData({
    animationData1: this.animation.export(),
  })
  console.log('执行动画3');
  this.setData({
    innertext: Math.floor(Math.random()*100+1),
  })
  }
})