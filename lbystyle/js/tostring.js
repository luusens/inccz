function cleanArray(actual) {
    const newArray = [];
    for (let i = 0; i < actual.length; i++) {
      if (actual[i]) {
        newArray.push(actual[i]);
      }
    }
    return newArray;
  }
  // 将一个对象转成QueryString
  function toQueryString(obj) {
    if (!obj) return "";
    return cleanArray(
      Object.keys(obj).map(key => {
        if (obj[key] === undefined) return "";
          return encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]);
      })
    ).join("&");
}