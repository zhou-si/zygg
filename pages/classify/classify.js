// pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navSelected:0,
    navData: [
      {
        id: 1,
        name: "名片",
      },
      {
        id: 2,
        name: "彩页奖券",
      },
      {
        id: 3,
        name: "喷绘写真",
      },
      {
        id: 4,
        name: "展架展画",
      },
      {
        id: 5,
        name: "标牌旗帜",
      },
      {
        id: 6,
        name: "工牌奖牌",
      },
      {
        id: 7,
        name: "KT板",
      },
      {
        id: 8,
        name: "不干胶",
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  navFn(e){
    let navIndex = e.currentTarget.dataset.index;
    let that = this;
    that.setData({
      navSelected: navIndex,
    })
  }
 
})