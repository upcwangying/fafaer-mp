const chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const random = n => {
  var res = "";
  for (var i = 0; i < n; i++) {
    var id = Math.ceil(Math.random() * (chars.length - 1));
    res += chars[id];
  }
  return res;
}

const handleError = () => {
  wx.showToast({
    title: '网络错误',
    icon: 'none'
  })
}

export {
  random,
  handleError
}