// pages/mgr/mgr.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    server: {
      url: '/pages/inner/server/server',
      icon: '/image/cvm-hover.svg',
      name: '服务器'
    },
    traffic: {
      url: '/pages/inner/traffic/traffic',
      icon: '/image/cvm-hover.svg',
      name: '流量服务'
    },
    application: {
      url: '/pages/inner/application/application',
      icon: '/image/cvm-hover.svg',
      name: '应用服务'
    }
  },

  checkLogin:function(){
      wx.request({
        url: 'http://localhost:8080/users/user_info',
        method: 'get',
        success: function(res){
          console.log(res)
        },
        fail:function(res){
          return
        }
      })
  },

  navTo: function(){
    wx.navigateTo({
      url: '/pages/inner/traffic/traffic',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})