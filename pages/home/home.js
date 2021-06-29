let app = getApp();
let http = require('../../utils/http');
// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let str = app.globalData.movies;
    http.getHttp(str.url+str.playing,'playing','影院热映',this.getMovies);
    http.getHttp(str.url+str.showing,'showing','即将上映',this.getMovies);
    http.getHttp(str.url+str.top250,'top250','top250',this.getMovies);
    console.log(this.data.movies);
  },

  getMovies(res,title,key){
    /* this.data.movies[key] = {
      title:title,
      list:res.subjects
    }; */
    //console.log(res);
    this.data.movies.push({
      title:title,
      list:res.data.subject
    })

    this.setData({
      movies: this.data.movies
    })
  },

  toDetails(e){
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: "/pages/detail/detail?id=" + id
    })
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