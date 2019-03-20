// js自动设置设备字体大小
var iScale = 1;
iScale = 1/window.devicePixelRatio;
document.write('<meta name="viewport" content="width=device-width,initial-scale='+iScale+',minimum-scale='+iScale+',maximum-scale='+iScale+',user-scalable=no" />');
var iWidth = document.documentElement.clientWidth;
document.getElementsByTagName('html')[0].style.fontSize =  iWidth/16 + 'px';


$(function(){
//获取屏幕的宽度
var iWidth = document.documentElement.clientWidth;
//根据设计图中的canvas画布的占比进行设置
	function heart(hCtx,HW){
		hCtx.beginPath();
		hCtx.moveTo(HW/2,HW/3.75);
		hCtx.bezierCurveTo(HW/2,HW/4,HW/2.15,HW/5,HW/3,HW/5);
		hCtx.bezierCurveTo(HW/7.5,HW/5,HW/7.5,HW/2.4,HW/7.5,HW/2.4);
		hCtx.bezierCurveTo(HW/7.5,HW/1.875,HW/3.75,HW/1.47,HW/2,HW/1.25);
		hCtx.bezierCurveTo(HW/1.36,HW/1.47,HW/1.15,HW/1.875,HW/1.15,HW/2.4);
		hCtx.bezierCurveTo(HW/1.15,HW/2.4,HW/1.15,HW/5,HW/1.5,HW/5);
		hCtx.bezierCurveTo(HW/1.76,HW/5,HW/2,HW/4,HW/2,HW/3.75);
	}

// 画中间最大的心 start
	var bHW = Math.floor(iWidth*270/720);
	bHeart.setAttribute('width',bHW+'px');
	bHeart.setAttribute('height',bHW+'px');
	var bHCtx = bHeart.getContext('2d');
	heart(bHCtx,bHW);
	bHCtx.lineWidth = bHW/100;
	bHCtx.fillStyle = 'rgba(255,255,255,.3)';
	bHCtx.fill();
	bHCtx.strokeStyle = 'rgba(255,255,255,.6)';
	bHCtx.lineCap = 'round';
	bHCtx.stroke();
// 画中间最大的心 end

//心跳动画
$('#bHeart').addClass('scaleBigger');

// 画周围的心 start
var sHeart = document.getElementsByClassName('sHeart');
var sHW = Math.floor(iWidth*80/720);

for(var i=0;i<sHeart.length;i++){
	sHeart[i].setAttribute('width',sHW+'px');
	sHeart[i].setAttribute('height',sHW+'px');
	var sHCtx = sHeart[i].getContext('2d');
	sHCtx.beginPath();
	heart(sHCtx,sHW);
	sHCtx.lineWidth = sHW/100;
	sHCtx.fillStyle = 'rgba(255,255,255,.3)';
	sHCtx.fill();
	sHCtx.strokeStyle = 'rgba(255,255,255,.6)';
	sHCtx.lineCap = 'round';
	sHCtx.stroke();
}
//星星画布 start
var bStar = document.getElementsByClassName('bStar');
var bSH = iWidth;
for(var i=0;i<bStar.length;i++){
	bStar[i].setAttribute('width',iWidth/8+'px');
	bStar[i].setAttribute('height',bSH+'px');
}
	var context0 = bStar[0].getContext("2d");
	var context1 = bStar[1].getContext("2d");
	var context2 = bStar[2].getContext("2d");
	var context3 = bStar[3].getContext("2d");
	var context4 = bStar[4].getContext("2d");
	var context5 = bStar[5].getContext("2d");
	var context6 = bStar[6].getContext("2d");
	var context7 = bStar[7].getContext("2d");
	var context8 = bStar[8].getContext("2d");


	// 开始画漫天繁星
	// 1
	    line(context0,iWidth/2);
	    drawStar(context0,iWidth/24,iWidth/2);
	// 2
	    line(context1,iWidth/4);
	    drawStar(context1,iWidth/30,iWidth/4);
	// 3
	    line(context2,iWidth/1.5);
	    drawStar(context2,iWidth/35,iWidth/1.5);
	// 4
	    line(context3,iWidth/5);
	    drawStar(context3,iWidth/25,iWidth/5);
	// 5
	    line(context4,iWidth/3);
	    drawStar(context4,iWidth/20,iWidth/3);
	// 6
	    line(context5,iWidth/4);
	    drawStar(context5,iWidth/28,iWidth/4);
	// 7
	    line(context6,iWidth/5);
	    drawStar(context6,iWidth/32,iWidth/5);
	// 8
	    line(context7,iWidth/8);
	    drawStar(context7,iWidth/42,iWidth/8);
	// 9
	    line(context8,iWidth/2.5);
	    drawStar(context8,iWidth/18,iWidth/2.5);

	// 结束画漫天繁星

	//画星星函数

	    function drawStar(context, r, y) {
	      context.beginPath();
	      var dit = Math.PI * 4 / 5;
	      var sin = Math.sin(0) * r + y;
	      var cos = Math.cos(0) * r + iWidth/26;
	      context.moveTo(cos, sin);
	      for (var j = 0; j < 5; j++) {
	        var tempDit = dit * j;
	        sin = Math.sin(tempDit) * r + y;
	        cos = Math.cos(tempDit) * r + iWidth/26;
	        context.lineTo(cos, sin);
	      }
	      context.closePath();
	      context.fillStyle = "#f2e247";
	      context.fill();
	    }
	//画星星函数

	//画直线函数

	    function line (context,y){
		    context.beginPath();
		    context.moveTo(iWidth/35,0);
		    context.lineTo(iWidth/35,y);
		    context.lineWidth = iWidth/320;
		    context.strokeStyle = "#f2e247";
		    context.stroke();
		    context.closePath();
	    }
	//画直线函数

	//画布嵌入花瓣
	var flower = document.getElementsByClassName('flower');
	for(var i=0;i<flower.length;i++){
		flower[i].setAttribute('width',iWidth/6+'px');
		flower[i].setAttribute('height',iWidth/6+'px');
	}
	var fCtx0 = flower[0].getContext('2d');
	var fCtx1 = flower[1].getContext('2d');
	var fCtx2 = flower[2].getContext('2d');
	var fCtx3 = flower[3].getContext('2d');

	function flo(fCtx,url,w,h){
		var img = new Image();   // 创建一个<img>元素
		img.onload = function(){
		  fCtx.drawImage(img,0,0,w,h);
		};
		img.src = 'img/'+url+'.png';
	}
	flo(fCtx0,'bFlower',iWidth/7,iWidth/8);
	flo(fCtx1,'mFlower',iWidth/10,iWidth/12);
	flo(fCtx2,'sFlower',iWidth/15,iWidth/16);
	flo(fCtx3,'mbFlower',iWidth/9,iWidth/11);

});


