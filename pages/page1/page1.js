// pages/page1/page1.js
// import List from "../../data/List1"

const { firstlist } = require("../../data/List1");

let touchDotX = 0; //X按下时坐标
let touchDotY = 0; //y按下时坐标
// 60项
let page1list = {
"list": 
[
  {
    "id": 1,
    "text": "如果看到自己最爱的人熟睡在你面前你会做什么?",
    "name": "nonic"
  },
  {
    "id": 2,
    "text": "最最喜爱的歌?",
    "name": "nonic"
  },
  {
    "id": 3,
    "text": "穿的什么颜色的内衣",
    "name": "nonic"
  },
  {
    "id": 4,
    "text": "2020你最后悔的一件事是什么?",
    "name": "nonic"
  },
  {
    "id": 5,
    "text": "曾经有过最被感动的事是什么?",
    "name": "nonic"
  },
  {
    "id": 6,
    "text": "比较喜欢爸爸还是妈妈?",
    "name": "nonic"
  },
  {
    "id": 7,
    "text": "你最想要的3样东西?",
    "name": "nonic"
  },
  {
    "id": 8,
    "text": "上一次发自内心的笑是什么时候?",
    "name": "nonic"
  },
  {
    "id": 9,
    "text": "如果给你一个机会去世界上任何一个地方旅行你会去:?",
    "name": "nonic"
  },
  {
    "id": 10,
    "text": "如果时间能倒流你希望回到哪一时间?",
    "name": "nonic"
  },
  {
    "id": 11,
    "text": "你心目中理想的对象是什么样子呢?",
    "name": "nonic"
  },
  {
    "id": 12,
    "text": "最想实现的三个愿望是什么?",
    "name": "nonic"
  },
  {
    "id": 13,
    "text": "我给你留下最深刻的印象是什么？",
    "name": "nonic"
  },
  {
    "id": 14,
    "text": "如果让你拥有一种超能力，你愿意拥有什么呢?",
    "name": "nonic"
  },
  {
    "id": 15,
    "text": "最喜欢哪部电影?",
    "name": "nonic"
  },
  {
    "id": 16,
    "text": "与喜欢的人见面，想要穿成什么样?",
    "name": "nonic"
  },
  {
    "id": 17,
    "text": "你希望有来世吗？",
    "name": "nonic"
  },
  {
    "id": 18,
    "text": "最喜欢的食物是什么?",
    "name": "nonic"
  },
  {
    "id": 19,
    "text": "说说你的上一次表白",
    "name": "nonic"
  },
  {
    "id": 20,
    "text": "如果你爱的人不爱你怎么办?",
    "name": "nonic"
  },
  {
    "id": 21,
    "text": "你接受婚前性行为吗？",
    "name": "nonic"
  },
  {
    "id": 22,
    "text": "如果有一天，你生命中最重要的东西离你而去了，你会怎么办?",
    "name": "nonic"
  },
  {
    "id": 23,
    "text": "如果你突然中了500万，你第一反应干什么？",
    "name": "nonic"
  },
  {
    "id": 24,
    "text": "世界末日你先救谁？",
    "name": "nonic"
  },
  {
    "id": 25,
    "text": "如果让你选择做一个电影中的角色，你会选谁呢?",
    "name": "nonic"
  },
  {
    "id": 26,
    "text": "你在乎别人看你的眼光吗?会为了众人的反对放弃自己想要的东西或人吗?",
    "name": "nonic"
  },
  {
    "id": 27,
    "text": "你的爱人要出国，你会怎么做?",
    "name": "nonic"
  },
  {
    "id": 28,
    "text": "讲讲你遭受的记忆最深刻的背叛",
    "name": "nonic"
  },
  {
    "id": 29,
    "text": "在你心中谁最可信?",
    "name": "nonic",
  },
  {
    "id": 30,
    "text": "你希望谁得到幸福?",
    "name": "nonic",
  },
  {
    "id": 31,
    "text": "你会选择你爱的人还是爱你的人?",
    "name": "nonic",
  },
  {
    "id": 32,
    "text": "现在你最喜欢的人是谁?",
    "name": "nonic",
  },
  {
    "id": 33,
    "text": "目前最大的愿望?",
    "name": "nonic",
  },
  {
    "id": 34,
    "text": "你有恨过谁吗?",
    "name": "nonic",
  },
  {
    "id": 35,
    "text": "远距离恋爱是否注定要分开?那么如果喜欢上一个遥远国度的人，你是否会选择跟他走?",
    "name": "nonic",
  },
  {
    "id": 36,
    "text": "如果有一天自己觉得自己的某一次选择是错的，可是现在已经再也无法重新来，那该怎么办?",
    "name": "nonic",
  },
  {
    "id": 37,
    "text": "对你而言，爱情和友情哪个比较重要?",
    "name": "nonic",
  },
  {
    "id": 38,
    "text": "如果能预知未来，你最不希望看见的是什么?",
    "name": "nonic",
  },
  {
    "id": 39,
    "text": "如果有一天我和你吵架，你会怎么办?",
    "name": "nonic",
  },
  {
    "id": 40,
    "text": "我和你恋人同时约你，你会陪谁?",
    "name": "nonic",
  },
  {
    "id": 41,
    "text": "世上真的有真爱吗?你眼中的真爱是什么样的?",
    "name": "nonic"
  },
  {
    "id": 42,
    "text": "当你被我点名的时候是什么心情?",
    "name": "nonic"
  },
  {
    "id": 43,
    "text": "你认为多交朋友的好处在哪里?",
    "name": "nonic"
  },
  {
    "id": 44,
    "text": "哭得最伤心的是哪一次?为什么?",
    "name": "nonic"
  },
  {
    "id": 45,
    "text": "在你眼里，我是个怎样的人?",
    "name": "nonic"
  },
  {
    "id": 46,
    "text": "情人节最想收到什么礼物? ",
    "name": "nonic"
  },
  {
    "id": 47,
    "text": "看到被点名的时候一霎那有没有想要杀我?",
    "name": "nonic"
  },
  {
    "id": 48,
    "text": "最珍爱的人是你右手的哪一个手指?",
    "name": "nonic"
  },
  {
    "id": 49,
    "text": "近一个星期内最让你开心的事。",
    "name": "nonic",
  },
  {
    "id": 50,
    "text": "最害怕的三件事物",
    "name": "nonic",
  },
  {
    "id": 51,
    "text": "和异性发生过最暧昧的事情",
    "name": "nonic",
  },
  {
    "id": 52,
    "text": "如果让你形容自己会用哪三个词语",
    "name": "nonic",
  },
  {
    "id": 53,
    "text": "认为自己和哪种动物最相近？为什么？?",
    "name": "nonic",
  },
  {
    "id": 54,
    "text": "童年最有趣的一次经历?",
    "name": "nonic",
  },
  {
    "id": 55,
    "text": "远距离恋爱是否注定要面对和他人产生的矛盾，你会怎么办？",
    "name": "nonic",
  },
  {
    "id": 56,
    "text": "爱情事业和家庭，你怎么排序？",
    "name": "nonic",
  },
  {
    "id": 57,
    "text": "最喜欢的奶茶口味是？",
    "name": "nonic",
  },
  {
    "id": 58,
    "text": "百事或可口，你选哪一个？?",
    "name": "nonic",
  },
  {
    "id": 59,
    "text": "肯德基或麦当劳，你选哪一个？?",
    "name": "nonic",
  },
  {
    "id": 60,
    "text": "从小到大对几个人产生过恋爱方面的喜欢？?",
    "name": "nonic",
  },
],
}
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: page1list,
    firstlist: [],
    innertext: 0,
    isFront1: true,
    animationData1: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('page1 report: ');
    console.log(page1list);
    console.log(this.data.item);
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
      
},)