/**
 * Created by whf on 17/1/11.
 */

var oContainer = document.getElementById('container');
var oBigImg = document.getElementById('bigImg');
var oSmallImg = document.getElementById('smallImg');
var oSmallImgs = oSmallImg.getElementsByTagName('img');
var oBigImgs = oBigImg.getElementsByTagName('img');
var oInfo =  document.getElementById('info');
var oCurrentPage = document.getElementById("current-page");
var oPre = document.getElementById('pre');
var oNext = document.getElementById('next');
var timer;

var iNow=0,zIndex=8;


for (var i=0;i<oBigImgs.length;i++){
    oBigImgs[i].style.zIndex = oBigImgs.length-i;
}

//设置小图片的透明度，第一张默认不透明
for(var i=0; i<oSmallImgs.length; i++){
    oSmallImgs[i].style.opacity = 0.3;
    oSmallImgs[i].style.filter = "alpha(opacity=30)";
}
oSmallImgs[0].style.opacity = 1;
oSmallImgs[0].style.filter = "alpha(opacity=100)";


oContainer.onmouseover = function () {
    clearInterval(timer);
}
oContainer.onmouseout = function () {
    play();
}
play();

function play() {
   timer = setInterval(function () {
        oNext.onclick();
    },1000);
}

oPre.onclick = oNext.onclick = function () {
    console.log('fff');
    if (this == oPre){
        iNow --;

        changeImg();
    }
    else if (this == oNext){
        iNow ++;

        changeImg();
    }

}

function changeImg() {
    if (iNow<0){
        iNow = oBigImgs.length-1;
    }
    if (iNow>oBigImgs.length-1){
        iNow = 0;
    }
    oBigImgs[iNow].style.opacity = 0;
    oBigImgs[iNow].style.filter = 'alpha(opacity=0)';
    oBigImgs[iNow].style.zIndex = zIndex++;

    oInfo.style.zIndex = oNext.style.zIndex = oPre.style.zIndex = zIndex++;

    oCurrentPage.innerHTML = iNow + 1;

    animate(oBigImgs[iNow],{
        opacity : 100
    });

    /*
     iNow    移动的距离
     0       0*width
     1       0*width

     2       1*width
     3       2*width
     4       3*width
     5       4*width

     6       4*width
     7       4*width
     * */
    var left = 0;
    if(iNow == 0 || iNow == 1){
        left= 0;
    }else if(iNow == oSmallImgs.length - 1 || iNow == oSmallImgs.length - 2){
        left = oSmallImgs.length / 2;//4
    }else{
        left = iNow - 1;
    }

    //小图片所有都透明，当前图片不透明
    for(var i=0; i<oSmallImgs.length; i++){
        oSmallImgs[i].style.opacity = 0.3;
        oSmallImgs[i].style.filter = "alpha(opacity=30)";
    }
    oSmallImgs[iNow].style.opacity = 1;
    oSmallImgs[iNow].style.filter = "alpha(opacity=100)";

    animate(oSmallImg, {
        left: -left * oSmallImgs[0].offsetWidth
    });

}
