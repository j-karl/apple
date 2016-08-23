$(function(){
	$('.header .nav-phone .menu').on('click',function(){
		$(this).toggleClass('active')
	});

	$('.header .nav .search').on('click',function(){
		$('.nav').removeClass('move');
		$('.header .nav , .header .search-box').toggleClass('searching');
		$('.search-result').toggleClass('show');
		$('.zhezhao').toggleClass('sousuo');
		$('.close').toggleClass('show');
		$('.logo-phone , .shangjiantou').toggleClass('shang');
	});

	$('.close').on('click',function(){
		$('.header .nav , .header .search-box').removeClass('searching');
		$('.search-result').removeClass('show');
		$('.zhezhao').removeClass('sousuo');
		$('.close').removeClass('show');
	});

	$('.menu').on('click',function(){
		$('.logo-phone , .shangjiantou').removeClass('shang');
		$('.phone-daohang').toggleClass('show');
		$('.header .container .nav li').toggleClass('show');
		$('.header .container .nav-phone .bag').toggleClass('hide');
		$('.header .nav , .header .search-box').removeClass('searching');
		$('.search-result').removeClass('show');
		$('.zhezhao').removeClass('sousuo');
		$('.close').removeClass('show');
		$('.nav-phone').toggleClass('color');
		$('body').toggleClass('hide');
	});

	$('.zhezhao').on('click',function(){
		$('.header .nav , .header .search-box').removeClass('searching');
		$('.search-result').removeClass('show');
		$('.zhezhao').removeClass('sousuo');
		$('.close').removeClass('show');
	});

	$('.shangjiantou').on('click',function(e){
		e.preventDefault();
		$('.header .nav , .header .search-box').removeClass('searching');
		$('.search-result').removeClass('show');
		$('.zhezhao').removeClass('sousuo');
		$('.nav').addClass('move');
		$('.logo-phone , .shangjiantou').removeClass('shang');
	});

	$('.bag').on('click',function(e){
		e.preventDefault();
		$('.bag').toggleClass('show');
	});


	//轮播图
	var ul = $('.dalunbo');
	var items = $('li',ul);
	var list = $('li',$('.lunbo'));
	var btnL = $('.move-left');
	var btnR = $('.move-right');
	var flag = false;

	move = function(n,dir){
		flag = true;
		dir = dir?dir:'left';
		var active = $('.dalunbo .active');
		active.addClass(dir)
		.delay(600)
		.queue(function(){
			flag = false;
			$(this).removeClass('active '+dir).dequeue();
		});
		list.removeClass('active');
		var op = (dir === 'left')?'right':'left';
		$(n).addClass(op);
		$(n).get(0).offsetWidth;
		$(n).removeClass(op);
		$(n).addClass('active');
		list.eq(items.index($(n))).addClass('active');
	}

	btnR.on('click',function(){
		if(flag){
			return;
		}
		if($('.dalunbo .active').next().length == 0){
			var next = items.eq(0);
		}else{
			var next = $('.dalunbo .active').next();
		}
		move(next,'left');
	});
	btnL.on('click',function(){
		if(flag){
			return;
		}
		if($('.dalunbo .active').prev().length == 0){
			var next = items.eq(-1);
		}else{
			var next = $('.dalunbo .active').prev();
		}
		move(next,'right');
	});

	list.on('click',function(){
		if($(this).index() > items.index($('.dalunbo .active'))){
			var dir = 'left';
		}else{
			var dir = 'right';
		}
		list.removeClass('active');
		list.eq($(this).index()).addClass('active');
		var next = items.eq($(this).index());
		move(next,dir);
	});
	var t = setInterval(function(){
		btnR.trigger('click');
	},3000);
	$('.container').on('mouseenter',function(){
		clearInterval(t);
	});
	$('.container').on('mouseleave',function(){
		t = setInterval(function(){
			btnR.trigger('click');
		},3000)
	});

	//底部链接点击展开
	var dt =  $('.footer .footer-inner .container div dl dt');
	dt.on('click',function(e){
		e.preventDefault();
		$(this).nextAll().toggleClass('show');
		$(this).toggleClass('active');
	});
})