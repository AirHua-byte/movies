let app = getApp();
let http = require('../../utils/http')
// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieDetails:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    let id = options.id;
    let req = app.globalData.movies;
    let reqStr = req.url + req.info + '?id=' + id;
    http.request(reqStr,this.getDetails);
  },

  getDetails(res){
    console.log(res.data);
    wx.showLoading({
      title: '加载中...',
    });

    this.setData({
      movieDetails : res.data
    });

    wx
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

  }
})