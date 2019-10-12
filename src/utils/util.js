export function objDeepCopy(source) {
  const sourceCopy = source instanceof Array ? [] : {};
  for (const item in source) {
    sourceCopy[item] = typeof source[item] === 'object' ? this.objDeepCopy(source[item]) : source[item];
  }
  return sourceCopy;
}

export function MP(ak) {
  return new Promise(function(resolve, reject) {
    window.onload = function() {
      resolve(BMap);
    };
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://api.map.baidu.com/api?v=2.0&ak='+ak+'&callback=init&s=1';
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

