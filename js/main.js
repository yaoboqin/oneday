var _wHeight = document.documentElement.clientHeight;

var inputDo = function(){
	$('.swiper-container').css({
        'height' : _wHeight + 'px'
    });

    $('.textarea,.names').click(function(event){
        event.stopPropagation()
        $(this).focus()
    });

    $('#last').click(function(){
        $('.textarea,.names').blur();
    });
}

var tomo = function(){
	$("#wScratchPad2").wScratchPad({
		width:$(window).width(),
		color: 'grey',
		image: './images/m_12_di.gif',
		image2 :'./images/m_12.gif',
		scratchMove: function(e, percent)
		{
			if(percent > 70)
			{
				this.clear();
				$('#tumo').removeClass('swiper-no-swiping')
			}
		}
	});
}
var animate = function(){
	var mySwiper = new Swiper('.swiper-container',{
        //pagination: '.pagination',
        paginationClickable: true,
        noSwiping :true,
        mode: 'vertical',
        onSlideChangeEnd : function(swiper){

            switch(mySwiper.activeIndex)
            {
                case 0:
                    animatedObj.rest()
                    break;
                case 1:
                    animatedObj.rest()
                    animatedObj.starMove('#zi2','0px','-100px')
                    break;
                case 2:
                    animatedObj.rest()
                    animatedObj.starMove('#zi3','0px','50px')
                    break;
                case 3:
                    animatedObj.rest()
                    animatedObj.starMove('#zi4','0px','-50px')
                    break;
                case 4:
                    animatedObj.rest()
                    animatedObj.starMove('#zi5','0px','50px')
                    break;
                case 5:
                    animatedObj.rest()
                    animatedObj.starMove('#drc-left','100%','0px')
                    animatedObj.starMove('#drc-right','-100%','0px')
                    setTimeout(function(){
                        $('.c-ht').css({
                            'opacity' : '1'
                        })
                    },1500)
                    setTimeout(function(){
                        $('.xin').css({
                            'opacity' : '1'
                        })
                    },2700)
                    break;
                case 6:
                    animatedObj.rest()
                    setTimeout(function(){$('.light').show()},800);
                    setTimeout(function(){
                        animatedObj.starMove('#zi7','0px','-60%')
                    },1200)
                    break;
                case 7:
                    animatedObj.rest()
                    animatedObj.starMove('#zi8','70px','0px')
                    break;
                case 8:
                    animatedObj.rest()
                    animatedObj.starMove('#zi9','0px','50px')
                    break;
                case 9:
                    animatedObj.rest()
                    animatedObj.starMove('#zi10','0px','-20px')
                    break;
                case 10:
                    animatedObj.rest()
                    animatedObj.starMove('#zi11','-30%','0')
                    break;
                case 11: //涂抹土豆
                    animatedObj.rest()
                    //animatedObj.starMove('#zi11','-30%','0')
                    //window.event.returnValue = true;
                    break;
                case 12:
                    animatedObj.rest()
                    animatedObj.starMove('#zi13','-10%','0')
                    break;
                case 13:
                    animatedObj.rest()
                    break;
                case 14:
                    animatedObj.rest()
                    break;
            }

        }
    });

    var animatedObj = {
        starMove : function(o,x,y){
            $(o).css({
                'transform':'translate('+x+','+y+')',
                'opacity' : '1'
            })
        },
        rest : function(){
            $('.light').hide();
            $('.m_zi,.drc').css({
                'transform':'translate(0px,0px)',
                'opacity' : '0'
            })
            $('.c-ht,.xin').css({
                'opacity' : '0'
            })
        }
    }
}
var weixinShareTips = function(){
	$('.shareBtn').click(function(){
        $('.share').show()
    })

    $('.share').click(function(){
        $(this).hide();
    })
}
var weixinShare = function(){
	document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {

	WeixinJSBridge.on('menu:share:appmessage', function (argv) {
			var name=$('.names').val();
			if(name==""){
				name="你";
			}
			window.shareData.tTitle="ONE DAY";
			window.shareData.tContent= "致我最亲爱的"+name+":"+$('.textarea').val();
		WeixinJSBridge.invoke('sendAppMessage', { 
			"img_url": window.shareData.imgUrl,
			"img_width": "640",
			"img_height": "640",
			"link": window.shareData.sendFriendLink,
			"desc": window.shareData.tContent,
			"title": window.shareData.tTitle
		}, function (res) {
		   _report('send_msg', res.err_msg);
		})
	});

	WeixinJSBridge.on('menu:share:timeline', function (argv) {
			var name=$('.names').val();
			if(name==""){
				name="你";
			}
			window.shareData.tTitle="ONE DAY!遇见你之前，我最爱的字眼叫“远行”；遇见你之后，最让我心动的是“回家”";
			window.shareData.tContent= "致我最亲爱的"+name+":"+$('.textarea').val();
		WeixinJSBridge.invoke('shareTimeline', {
			"img_url": window.shareData.imgUrl,
			"img_width": "640",
			"img_height": "640",
			"link": window.shareData.sendFriendLink,
			"desc": window.shareData.tContent,
			"title": window.shareData.tTitle
		}, function (res) {
			_report('timeline', res.err_msg);
		});
	});

	WeixinJSBridge.on('menu:share:weibo', function (argv) {
			var name=$('.names').val();
			if(name==""){
				name="你";
			}
			window.shareData.tTitle="ONE DAY";
			window.shareData.tContent= "致我最亲爱的"+name+":"+$('.textarea').val();
		WeixinJSBridge.invoke('shareWeibo', {
			"content": window.shareData.tContent,
			"url": window.shareData.sendFriendLink,
		}, function (res) {
			_report('weibo', res.err_msg);
		});
	});
	}, false)
}
var signUp = function(){
	$('.xdts').click(function(){
		var c = $(".textarea").text(),
			n = $(".names").val(),
			data = [];
		data.push(
			{
				name  : 'name', 
				value : n
			},
			{
				name  : 'cont', 
				value : c
			}
		)
		$.ajax({
			type		: "POST",
			url 		: "/interface/record.htm",
			dataType	: 'json',
			data		: data,
			timeout		: 10000, 
			success	: function(json){
			/*
				返回data格式：
				code:100，   //100为成功，其他自定
				msg:'感谢您参与本次活动'
			*/
				if(json.code==100){
					alert(json.msg);
				}
			},				
			error : function(jqXHR, textStatus, err){
				console.log('error');
			}
		});
	})
}
var playBoxInit = function(selector){
	return $(selector).each(function(index, element) {
		var o = $(this);
		o.click(function(){
			playbox.init(selector.replace("#","")).play();
		})
	});
}
$(function(){
	playBoxInit("#playbox");								//背景音乐控件
	window.shareData = {
			"imgUrl": "images/one_day_share.jpg",
			"sendFriendLink": "http://www.ziyinzhan.com/oneday/index.htm",
			"tTitle": "ONE DAY",
			"tContent": "致我最亲爱的你：遇见你之前；我最爱的字眼叫“远行”遇见你之后，最让我心动的是回家。"
	};														//微信分享到朋友圈内容
	inputDo();												//表单空间高度处理
	tomo();													//涂抹效果
	animate();												//翻页动画效果
	weixinShareTips();										//微信分享弹窗提示
	weixinShare();											//微信分享好友内容填写
	signUp();												//把分享内容提交到后台
});