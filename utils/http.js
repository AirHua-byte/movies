function request(url,callback){
  wx.request({
    url: url,
    success: res=>{
      callback(res.data);
    }
  })
}

function getHttp(url,key,title,callback){
  wx.request({
    url: url,
    success: function(res){
      //console.log(res);
      callback(res.data,title,key);
    }
  })
}

module.exports = {
  getHttp,
  request
}