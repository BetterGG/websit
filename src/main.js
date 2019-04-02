// 公共js  css 等汇总
import './assets/css/common.css';
import './assets/css/header.css';
import './assets/css/footer.css';

import './assets/js/jquery.min.js'

//header 引入
import Header from './components/header/index.js';
// import Footer from './components/footer/index.js';

(()=>{
    window.addEventListener("load", function() {
        //header footer
        generateHtml('header', Header);
        // generateHtml('footer', Footer);

        //回到顶部
        //  ...
    })
})();


 /**
  *  生成代码片段并插入对应节点
  * @param {String} nodeList  节点ID
  * @param {String} html    要插入的代码片段
  */
function generateHtml(nodeList, html) {
    document.getElementById(nodeList).innerHTML = html;
}