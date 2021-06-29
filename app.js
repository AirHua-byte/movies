// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    movies:{
      url:'http://39.105.38.10:8081',
      playing:'/movie/playing??city=guagnzhou',
      showing:'/movie/showing?city=guagnzhou',
      top250: '/movie/top250',
      info: '/movie/info',
      search: '/movie/search'
    }
  }
})
