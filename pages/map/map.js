// pages/map/map.js
let QQMapWX = require('../../utils/qqmap-wx-jssdk.min.js');
let qqmapsdk;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:"",
    latitude:"26.5809138997", // 经度
    longitude:"104.847850799", // 纬度
    markers: [{
      iconPath: '../../images/address.png',
      id: 0,
      latitude: 26.5809138997,
      longitude: 104.847850799,
      width: 30,
      height: 30,
      callout:{
        content:"素北图文广告\n六盘水市钟山区南环路地税新园旁8号门面",
        padding:"10",
        borderRadius:"5",
        display:"ALWAYS",
        textAlign:"left",
        borderWidth: "0.5",
        borderColor: "#ccc",
        fontSize:14
      }
    }],
  },
  onLoad(){
    // 实例化API核心类
     qqmapsdk = new QQMapWX({
      key: '6UPBZ-IFZAU-7JCVA-2STBU-IWHMQ-FFFNT'
    });
    let vm = this;
    vm.getLocation();
  },
  // 微信获得经纬度
  getLocation: function () {
    let vm = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        // console.log(JSON.stringify(res))
        let latitude = res.latitude // 获取经度
        let longitude = res.longitude // 获取纬度
        vm.getLocal(latitude, longitude) // 解析经纬度
      },
      fail: function (res) { // 用户授权失败
        wx.showToast({
          title: '授权失败,请重新授权',
          icon: 'none',
          duration: 1000
        })
       
      }
    })
  },
  // 获取当前地理位置
  getLocal: function (latitude, longitude) {
    let vm = this;
    qqmapsdk.reverseGeocoder({
      location: {
        latitude: latitude,
        longitude: longitude
      },
      success: function (res) {
        console.log(JSON.stringify(res));
        let address = res.result.address
          console.log(address)
        vm.setData({
          address: address,
        })
       
      },
      fail: function (res) {
        console.log(res);
      },
    });
  },
  
})