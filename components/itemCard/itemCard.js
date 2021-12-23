// components/itemCard/itemCard.js
// import List from "../../data/List1"
let touchDotX = 0; //X按下时坐标
let touchDotY = 0; //y按下时坐标
let list1 = [
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
];
let list2 = [
{
  "id": 1,
  "text": "逐个夸一夸在座的异性，要根据对方的特点来。",
  "name": "nonic"
},
{
  "id": 2,
  "text": "挑在座的一位，说一说ta做过让你印象最深的事。",
  "name": "nonic"
},
{
  "id": 3,
  "text": "请声情并茂地朗读以下语句：哼！都怪你！也不哄哄人家 (｡•ˇ‸ˇ•｡)人家超想哭的，捶你胸口，大坏蛋!!!(￣^￣)ゞ咩QAQ 捶你胸口！你好讨厌!(=ﾟωﾟ)ﾉ要抱抱~嘤嘤嘤……哼，人家拿小拳拳捶你胸口!!!(｡• ︿•̀｡)大坏蛋，打死你(つд⊂)",
  "name": "nonic"
},
{
  "id": 4,
  "text": "挑在座的一位和你一起演一段戏，到让其他人看出来你们演的是什么为止。",
  "name": "nonic"
},
{
  "id": 5,
  "text": "用卷纸缠头缠成阿拉丁的模样，一直到游戏结束。?",
  "name": "nonic"
},
{
  "id": 6,
  "text": "亲一下在座一位同性，任何部位都可以。",
  "name": "nonic"
},
{
  "id": 7,
  "text": "选择在座的一位公主抱",
  "name": "nonic"
},
{
  "id": 8,
  "text": "外放打电话给列表一位异性，说自己喝醉了",
  "name": "nonic"
},
{
  "id": 9,
  "text": "蒙眼（没有条件就闭眼）后随机和在座一位握手，猜中对方身份即为过关，如失败则听对方指令做一件事",
  "name": "nonic"
},
{
  "id": 10,
  "text": "其他玩家用方言任意说一句话，你来模仿。",
  "name": "nonic"
},
{
  "id": 11,
  "text": "用萝莉音念出《巴啦啦小魔仙》美琪美雪的咒语：巴啦啦能量—沙罗沙罗—小魔仙—全身变",
  "name": "nonic"
},
{
  "id": 12,
  "text": "发语音说唱以下散装rap：This time I'm in the 真香，I'm玩ing大冒险 I’m玩ing真心话 ",
  "name": "nonic"
},
{
  "id": 13,
  "text": "把抖音/快手的喜欢列表截图发出来",
  "name": "nonic"
},
{
  "id": 14,
  "text": "给一位异性朋友发消息：你摸摸我的衣服，看我是不是做你男/女朋友的料子。",
  "name": "nonic"
},
{
  "id": 15,
  "text": "对着在场的一位异性唱一段情歌",
  "name": "nonic"
},
{
  "id": 16,
  "text": "对着一位异性，模仿洪世贤说一句“你好骚啊。",
  "name": "nonic"
},
{
  "id": 17,
  "text": "找三个异性好友，一个个问“我美/帅吗？”等回复，截图发出来",
  "name": "nonic"
},
{
  "id": 18,
  "text": "用纸巾当围巾，围在脖子",
  "name": "nonic"
},
{
  "id": 19,
  "text": "在厕所门口站着，进去一位说一次欢迎光临",
  "name": "nonic"
},
{
  "id": 20,
  "text": "对着垃圾桶大笑十秒",
  "name": "nonic"
},
{
  "id": 21,
  "text": "拍摄卖萌小视频发朋友圈",
  "name": "nonic"
},
{
  "id": 22,
  "text": "把自己的昵称改成“我变秃了也变强了”保持一天",
  "name": "nonic"
},
{
  "id": 23,
  "text": "两个人用喝交杯酒的姿势表演刷牙",
  "name": "nonic"
},
{
  "id": 24,
  "text": "发5首自己会唱的歌名，其他人指定一首，你发语音唱一段，必须唱跑调。",
  "name": "nonic"
},
{
  "id": 25,
  "text": "深情地吻墙10秒",
  "name": "nonic"
},
{
  "id": 26,
  "text": "抓着铁门喊“放我出去！",
  "name": "nonic"
},
{
  "id": 27,
  "text": "和左边第一个异性换穿上衣",
  "name": "nonic"
},
{
  "id": 28,
  "text": "和右边第一个异性关在厕所里等一轮游戏",
  "name": "nonic"
},
{
  "id": 29,
  "text": "躺在床上摆pose说 饭在锅里，我在床上。",
  "name": "nonic",
},
{
  "id": 30,
  "text": "对右侧第一位异性说一分钟情话",
  "name": "nonic",
},
{
  "id": 31,
  "text": "选一位异性十指交扣，深情对视，朗诵骆宾王的《鹅》",
  "name": "nonic",
},
{
  "id": 32,
  "text": "找一个陌生人借卫生纸",
  "name": "nonic",
},
{
  "id": 33,
  "text": "单腿下跪，离你最近的异性亲他她的手",
  "name": "nonic",
},
{
  "id": 34,
  "text": "抱一位离你最远的异性直到下一轮真心话大冒险结束",
  "name": "nonic",
},
{
  "id": 35,
  "text": "做一个大家都满意的鬼脸",
  "name": "nonic",
},
{
  "id": 36,
  "text": "含一大口水和距离最近的异性对视10秒",
  "name": "nonic",
},];
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    sw: {
      type: Number,
      value: 0,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    list1: [
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
    list2: [
    {
      "id": 1,
      "text": "逐个夸一夸在座的异性，要根据对方的特点来。",
      "name": "nonic"
    },
    {
      "id": 2,
      "text": "挑在座的一位，说一说ta做过让你印象最深的事。",
      "name": "nonic"
    },
    {
      "id": 3,
      "text": "请声情并茂地朗读以下语句：哼！都怪你！也不哄哄人家 (｡•ˇ‸ˇ•｡)人家超想哭的，捶你胸口，大坏蛋!!!(￣^￣)ゞ咩QAQ 捶你胸口！你好讨厌!(=ﾟωﾟ)ﾉ要抱抱~嘤嘤嘤……哼，人家拿小拳拳捶你胸口!!!(｡• ︿•̀｡)大坏蛋，打死你(つд⊂)",
      "name": "nonic"
    },
    {
      "id": 4,
      "text": "挑在座的一位和你一起演一段戏，到让其他人看出来你们演的是什么为止。",
      "name": "nonic"
    },
    {
      "id": 5,
      "text": "用卷纸缠头缠成阿拉丁的模样，一直到游戏结束。?",
      "name": "nonic"
    },
    {
      "id": 6,
      "text": "亲一下在座一位同性，任何部位都可以。",
      "name": "nonic"
    },
    {
      "id": 7,
      "text": "选择在座的一位公主抱",
      "name": "nonic"
    },
    {
      "id": 8,
      "text": "外放打电话给列表一位异性，说自己喝醉了",
      "name": "nonic"
    },
    {
      "id": 9,
      "text": "蒙眼（没有条件就闭眼）后随机和在座一位握手，猜中对方身份即为过关，如失败则听对方指令做一件事",
      "name": "nonic"
    },
    {
      "id": 10,
      "text": "其他玩家用方言任意说一句话，你来模仿。",
      "name": "nonic"
    },
    {
      "id": 11,
      "text": "用萝莉音念出《巴啦啦小魔仙》美琪美雪的咒语：巴啦啦能量—沙罗沙罗—小魔仙—全身变",
      "name": "nonic"
    },
    {
      "id": 12,
      "text": "发语音说唱以下散装rap：This time I'm in the 真香，I'm玩ing大冒险 I’m玩ing真心话 ",
      "name": "nonic"
    },
    {
      "id": 13,
      "text": "把抖音/快手的喜欢列表截图发出来",
      "name": "nonic"
    },
    {
      "id": 14,
      "text": "给一位异性朋友发消息：你摸摸我的衣服，看我是不是做你男/女朋友的料子。",
      "name": "nonic"
    },
    {
      "id": 15,
      "text": "对着在场的一位异性唱一段情歌",
      "name": "nonic"
    },
    {
      "id": 16,
      "text": "对着一位异性，模仿洪世贤说一句“你好骚啊。",
      "name": "nonic"
    },
    {
      "id": 17,
      "text": "找三个异性好友，一个个问“我美/帅吗？”等回复，截图发出来",
      "name": "nonic"
    },
    {
      "id": 18,
      "text": "用纸巾当围巾，围在脖子",
      "name": "nonic"
    },
    {
      "id": 19,
      "text": "在厕所门口站着，进去一位说一次欢迎光临",
      "name": "nonic"
    },
    {
      "id": 20,
      "text": "对着垃圾桶大笑十秒",
      "name": "nonic"
    },
    {
      "id": 21,
      "text": "拍摄卖萌小视频发朋友圈",
      "name": "nonic"
    },
    {
      "id": 22,
      "text": "把自己的昵称改成“我变秃了也变强了”保持一天",
      "name": "nonic"
    },
    {
      "id": 23,
      "text": "两个人用喝交杯酒的姿势表演刷牙",
      "name": "nonic"
    },
    {
      "id": 24,
      "text": "发5首自己会唱的歌名，其他人指定一首，你发语音唱一段，必须唱跑调。",
      "name": "nonic"
    },
    {
      "id": 25,
      "text": "深情地吻墙10秒",
      "name": "nonic"
    },
    {
      "id": 26,
      "text": "抓着铁门喊“放我出去！",
      "name": "nonic"
    },
    {
      "id": 27,
      "text": "和左边第一个异性换穿上衣",
      "name": "nonic"
    },
    {
      "id": 28,
      "text": "和右边第一个异性关在厕所里等一轮游戏",
      "name": "nonic"
    },
    {
      "id": 29,
      "text": "躺在床上摆pose说 饭在锅里，我在床上。",
      "name": "nonic",
    },
    {
      "id": 30,
      "text": "对右侧第一位异性说一分钟情话",
      "name": "nonic",
    },
    {
      "id": 31,
      "text": "选一位异性十指交扣，深情对视，朗诵骆宾王的《鹅》",
      "name": "nonic",
    },
    {
      "id": 32,
      "text": "找一个陌生人借卫生纸",
      "name": "nonic",
    },
    {
      "id": 33,
      "text": "单腿下跪，离你最近的异性亲他她的手",
      "name": "nonic",
    },
    {
      "id": 34,
      "text": "抱一位离你最远的异性直到下一轮真心话大冒险结束",
      "name": "nonic",
    },
    {
      "id": 35,
      "text": "做一个大家都满意的鬼脸",
      "name": "nonic",
    },
    {
      "id": 36,
      "text": "含一大口水和距离最近的异性对视10秒",
      "name": "nonic",
    },],
    ind: 0,
    innertext: "左右滑动卡片",
    isFront1: true,
    animationData1: {},
  },

  /**
   * 组件的方法列表
   */
  methods: {
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
    duration: 480,
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
    console.log('typeof sw:');
    console.log(this.data.sw);
    if (this.data.sw == 0) {
      this.setData({
        innertext: list1[Math.floor(Math.random()*60+1)].text
      })}
    else {
      this.setData({
        innertext: list2[Math.floor(Math.random()*36+1)].text
      })
    }
    }
  }
})



