function BgInit(sSelector) {
	
	var b = this;

	b.section = $(sSelector);
	b.container = b.section.find('.block__bg');
	
	b.initBg = function () {		
		b.container.each(function () {
			let src = $(this).find('img').attr('src');

			$(this).css('background-image', 'url(' + src + ')');
			
			$(this).find('img').css({'opacity': '0'});
		});
	}

	$(document).ready(b.initBg);

}