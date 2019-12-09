var oldTitle = document.title;
var titleTime; //標題恢復計時器
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    document.querySelector("[rel='icon']").setAttribute("href", "/images/favicon-16x16.ico");
    document.title = '╭(°A°`)╮ 页面崩溃啦 ~';
    clearTimeout(titleTime);
  } else {
    document.title = '(ฅ>ω<*ฅ) 噫又好了~';
    document.querySelector("[rel='icon']").setAttribute("href", "/images/favicon-16x16.ico");
    titleTime = setTimeout(function () {
      document.title = oldTitle;
    }, 1000);
  }
});