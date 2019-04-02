const Logo =require("../../assets/img/logo.jpg");

const Header = `<div class="header">
  <div class="top">
    <div class="topCon">
      <div class="leftCon">公司官网</div>
      <div class="rightCon">
        <a target="_blank" href="http://u.lyscbd.top/nb/nsoft_1244.html">推荐Google浏览器</a>
      </div>
    </div>
  </div>
  <div class="con">
    <div class="logo">
      <img src="${Logo}">
    </div>
    <div class="recruit" id="pageName">人才招聘</div>
    <div class="btns">
      <div class="loginIn">
        <a href="login.html">登录</a>
      </div>
      <div class="loginUp">
        <a href="register.html">注册</a>
      </div>
    </div>
  </div>
  <div class="nav">
    <ul class="navItems">
      <li class="item">
        <a href = "/index.html">首页</a>
      </li>
      <li class="item">
        <a href="recruit.html">人才招聘</a>
      </li>
      <li class="item">
        <a href="notice.html">通知公告</a>
      </li>
      <li class="item">
        <a href="introduce.html">单位介绍</a>
      </li>
      <li class="item">
        <a href="center.html">个人中心</a>
      </li>
      <li class="item">
        <a href="question.html">常见问题</a>
      </li>
      <li class="item">
        <a href="/contactus.html"> 联系我们 </a>
      </li>
    </ul>
  </div>
</div>`;



export default Header;