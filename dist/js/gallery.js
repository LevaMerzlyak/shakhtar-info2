function Gallery(sSelector) {

	let g = this;

	g.gallery = $(sSelector);
	g.preview = g.gallery.find('.galleryPreview__img');

	g.prevBtn = g.gallery.find('.gallery__btn_prev');
	g.nextBtn = g.gallery.find('.gallery__btn_next');

	g.thumbsMenu = g.gallery.find('.thumbnails__wrap');
	g.thumbs = g.thumbsMenu.find('.thumbnail__link');
	g.active = 'thumbnail__link_active';
	g.length = g.thumbs.length;
	g.current = 0;

	g.viewWidth = $(window).width();

	g.galleryInit = function () {

		let cur = g.thumbs.eq(g.current);
		let src = cur.find('.thumbnail__img').attr('src');

		g.gallery.find('.' + g.active).removeClass(g.active);
		cur.addClass(g.active);
		src = src.replace('_thumb');
		g.preview.attr('src', src);

		g.scrollThumbs();
		
	}

	g.showImage = function (event) {
		
		event.preventDefault();
		g.current = g.thumbs.index(this);

		g.galleryInit();

	}

	g.showPrev = function (event) {
		
		event.preventDefault();
		g.current--;

		g.shift();

	}

	g.showNext = function (event) {
		
		event.preventDefault();
		g.current++;

		g.shift();

	}

	g.shift = function () {
		
		if (g.current > (g.length - 1)) g.current = 0;
		if (g.current < 0) g.current = g.length - 1;

		g.galleryInit();

	}

	g.scrollThumbs = function () {

		let el = g.thumbs.eq(g.current - 1);
		let start = g.thumbs.eq(0);
		let dis = 0;

		if (g.viewWidth <= 500) {

			if (g.current) {
				dis = el.offset().left - start.offset().left;
			} else {
				dis = 0;
			}
			g.thumbsMenu.animate({
				scrollLeft: dis
			}, {
				duration: 'medium',
				easing: 'swing' 
			});

		} else {

			if (g.current) {
				dis = el.offset().top - start.offset().top;
			} else {
				dis = 0;
			}
			g.thumbsMenu.animate({
				scrollTop: dis
			}, {
				duration: 'medium',
				easing: 'swing' 
			});

		}		
		
	}


	$(document).ready(g.galleryInit);
	g.thumbs.click(g.showImage);
	g.prevBtn.click(g.showPrev);
	g.nextBtn.click(g.showNext);

	$(window).resize(function () {

		g.viewWidth = $(window).width();

		g.scrollThumbs();

	});

}