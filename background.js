(function($) {
    var self = $.javert = new function(){};
    $.extend(self, {
        javertImgs : [
			"http://i.imgur.com/oWZuIqa.png",
			"http://i.imgur.com/vIymbNq.png",
			"http://i.imgur.com/DL4f66M.png",
			"http://i.imgur.com/0MhTrQx.png",
			"http://i.imgur.com/rGcORqX.png",
			"http://i.imgur.com/EY0CJ4a.png",
			"http://i.imgur.com/XVgcWdP.png",
			"http://i.imgur.com/QQhtYa2.png",
			"http://i.imgur.com/evuOriK.png",
			"http://i.imgur.com/Bmhzg2x.png",
			"http://i.imgur.com/UCGXKoh.png",
			"http://i.imgur.com/jdhJJuH.png",
			"http://i.imgur.com/oG5PiSH.png",
			"http://i.imgur.com/al50bHO.png",
			"http://i.imgur.com/RBScdbD.png",
			"http://i.imgur.com/QJMHPDb.png",
			"http://i.imgur.com/xO2w0xP.png",
			"http://i.imgur.com/Yb4wp1z.png",
			"http://i.imgur.com/V9bJ1gK.png",
			"http://i.imgur.com/AnE1tG5.png",
			"http://i.imgur.com/o8IUhDB.png",
			"http://i.imgur.com/qrsLyY2.png",
			"http://i.imgur.com/QNy8Ol5.png",
			"http://i.imgur.com/ozxlsZE.png",
			"http://i.imgur.com/gULs43R.png",
			"http://i.imgur.com/qnAymTM.png",
			"http://i.imgur.com/P7wSdSX.png",
			"http://i.imgur.com/elz6D5E.png",
			"http://i.imgur.com/8iznV0h.png",
        ],
        handleImages : function (lstImgs, time) {
            $.each($('img'), function(i,item) { 
                if($.inArray($(item).attr('src'), lstImgs) == -1) {
					var h = $(item).height();
					var w = $(item).width();
					if(h > 0 && w > 0) {
						$(item).css('width', w + 'px').css('height', h + 'px');
						$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
					}
					else {
						$(item).load(function(){
							if($.inArray($(item).attr('src'), lstImgs) == -1) {
								var h = $(item).height();
								var w = $(item).width();
								$(item).css('width', w + 'px').css('height', h + 'px');
								$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
							}
						});
					}
				}
            });
            if (time > 0) {
                setTimeout(function () { self.handleImages(lstImgs, time); }, time);
            }
        }
    });
    $(function(){
        self.handleImages(self.javertImgs, 3000);
    });
})(jQuery);
