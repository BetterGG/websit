// 公共js  css 等汇总
import './assets/css/common.css';
import './assets/css/header.css';
import './assets/css/footer.css';


import './assets/js/jquery.min.js'
// import './assets/js/header'
// import './assets/js/footer'
import 'components/header/header'
// import footer from 'components/footer/footer'


/**
 * 回到顶部功能 
 */
(()=>{
    document.addEventListener("load", function() {
        //header ,  footer
        generateHtml()

        //回到顶部
        //   ...
    })
})();


/**
 * 生成header , footer
 */
function generateHtml() {
    //ajax 数据获取
    //    ....

    let header = '';
    let footer = "";

    document.getElementById("header").innerHTML = header;
    document.getElementById("footer").innerHTML = footer;
}