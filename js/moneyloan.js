var _hmt = _hmt || [];
(function() {
   var hm = document.createElement("script");
   hm.src = "https://hm.baidu.com/hm.js?99441cd4e86bd3021b0b3ff1bac951ae";
   var s = document.getElementsByTagName("script")[0];
   s.parentNode.insertBefore(hm, s);
})();
(function(doc, win) {
   var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function() {
         var clientWidth = docEl.clientWidth;
         if (!clientWidth) return;
         docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
      };

   if (!doc.addEventListener) return;
   win.addEventListener(resizeEvt, recalc, false);
   doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

// function downLoad() {
//    if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
//       window.open("CnSellersApp://"); //ios app协议
//       window.setTimeout(function() {
//          window.location.href = "http://www.cnsellers.cn/sellermobile/_index.html";//去苹果应用商店
//       }, 2000)
//    }
//    if (navigator.userAgent.match(/android/i)) {
//       window.open("sellingworldapp://"); //android app协议
//       window.setTimeout(function() {
//          window.location.href = "http://www.cnsellers.cn/sellermobile/_index.html"; // 下载地址
//       }, 2000)
//    }
// }

function showtomaskchoice(){
   $('.headers').children('img').eq(1).css('display','none');
   $('.headers').children('img').eq(2).css('display','block');
   $('.maskchoicest').css('display','flex');
}

function closetomaskchoice(){
   $('.headers').children('img').eq(2).css('display','none');
   $('.headers').children('img').eq(1).css('display','block');
   $('.maskchoicest').hide();
}

// function showtopage(index) {
//    if(index==1){
//       $('#thefirstlog').show();
//       $('#thetwolog').hide();
//       $('#thethreelog').hide();
//       $('.maskchoicest').children('div').css('color','#666666');
//       $('.maskchoicest').children('div').eq(0).css('color','#1EB337');
//       $('.maskchoicest').children('div').css('border-left','0.04rem solid #ffffff');
//       $('.maskchoicest').children('div').eq(0).css('border-left','0.04rem solid #1EB337');
//    }else if(index==2){
//       $('#thefirstlog').hide();
//       $('#thetwolog').show();
//       $('#thethreelog').hide();
//       $('.maskchoicest').children('div').css('color','#666666');
//       $('.maskchoicest').children('div').eq(1).css('color','#1EB337');
//       $('.maskchoicest').children('div').css('border-left','0.04rem solid #ffffff');
//       $('.maskchoicest').children('div').eq(1).css('border-left','0.04rem solid #1EB337');
//    }else{
//       $('#thefirstlog').hide();
//       $('#thetwolog').hide();
//       $('#thethreelog').show();
//       $('.maskchoicest').children('div').css('color','#666666');
//       $('.maskchoicest').children('div').eq(2).css('color','#1EB337');
//       $('.maskchoicest').children('div').css('border-left','0.04rem solid #ffffff');
//       $('.maskchoicest').children('div').eq(2).css('border-left','0.04rem solid #1EB337');
//    }
// }