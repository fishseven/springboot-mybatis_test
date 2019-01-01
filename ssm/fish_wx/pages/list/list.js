// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
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
    var that = this;
    wx.request({
      url: 'http://127.0.01:8080/findUser/list',
      method: 'GET',
      data: {},
      success: function(res) {
        var list = res.data;
        console.log(list)
        if (list == null) {
          var toastText = 'error';
          wx.showToast({
            title: toastText,
            icon: '',
            duration: 2000
          });
        } else {
          that.setData({
            list: list
          })
        }
      }
    })
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

  },
  addUser: function() {
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },
  deleteUser: function(e) {
    console.log(e)
    var that = this;
    wx.showModal({
      title: '提示',
      content: '确定要删除[' + e.target.dataset.name + ']吗？',
      success: function(sm) {
        if (sm.confirm) {
          wx.request({
            url: 'http://127.0.0.1:8080/findUser/delete',
            data: {
              'id': e.currentTarget.dataset.id
            },
            method: 'GET',
            success: function(res) {
              var result = res.errMsg.request;
              var toastText = '删除成功！';
              wx.request({
                url: 'http://127.0.01:8080/findUser/list',
                method: 'GET',
                data: {}
                })
              // if (result != ok) {
              //   toastText = '删除失败！'
              // } else {
              //   that.data.list.splice(e.targett.dataset.index, 1)
              //   that.setData({
              //     list: that.data.list
              //   })
              // }
              wx.showToast({
                title: toastText,
                icon: '',
                duration: 2000
              });
            }
          })
        }
      }
    })
  }
})