//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      'http://mall.qianjidaojia.com/upload/admin/2019-03-07/2019030714522640625s02091.png',
      'http://mall.qianjidaojia.com/upload/admin/2019-03-07/2019030714522640625s02091.png',
      'http://mall.qianjidaojia.com/upload/admin/2019-03-07/2019030714522640625s02091.png',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    navData:[
      {
        id:1,
        icon:"http://www.qianjidaojia.com/images/nav/index_nav1.png",
        name:"名片"
      },
      {
        id: 2,
        icon: "http://www.qianjidaojia.com/images/nav/index_nav1.png",
        name: "喷绘写真"
      },
      {
        id: 3,
        icon: "http://www.qianjidaojia.com/images/nav/index_nav1.png",
        name: "标牌旗帜"
      },
      {
        id: 4,
        icon: "http://www.qianjidaojia.com/images/nav/index_nav1.png",
        name: "展架展画"
      },
      {
        id: 5,
        icon: "http://www.qianjidaojia.com/images/nav/index_nav1.png",
        name: "工牌奖牌"
      },
      {
        id: 6,
        icon: "http://www.qianjidaojia.com/images/nav/index_nav1.png",
        name: "KT板"
      },
      {
        id: 7,
        icon: "http://www.qianjidaojia.com/images/nav/index_nav1.png",
        name: "工程招牌"
      },
      {
        id: 8,
        icon: "http://www.qianjidaojia.com/images/nav/index_nav1.png",
        name: "不干胶"
      },
    ],
    primaryServiceData:[
      {
        id:1,
        imgSrc:"http://mall.qianjidaojia.com/upload/shop/10017/2019-01-18/2019011817460929882.jpg",
        title:"铜版纸名片",
        describe:"采用优质铜版纸制作，用料看得见"
      },
      {
        id: 2,
        imgSrc: "http://mall.qianjidaojia.com/upload/shop/10016/2019-03-05/2019030518424566503_9403.jpg",
        title: "铜版纸名片",
        describe: "采用优质铜版纸制作，用料看得见"
      },
      {
        id: 3,
        imgSrc: "http://mall.qianjidaojia.com/upload/shop/10016/2019-03-05/2019030518424566503_9403.jpg",
        title: "铜版纸名片",
        describe: "采用优质铜版纸制作，用料看得见"
      },
      {
        id: 4,
        imgSrc: "http://mall.qianjidaojia.com/upload/shop/10016/2019-03-05/2019030518424566503_9403.jpg",
        title: "铜版纸名片",
        describe: "采用优质铜版纸制作，用料看得见"
      }
    ]
  },
})
