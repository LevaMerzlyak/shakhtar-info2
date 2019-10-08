function VideoPlay(sSelector) {
	
	v = this;

	v.player = $(sSelector);
	v.poster = v.player.find('.videoPlayer__poster');

	v.autoplay = '?autoplay=1';

	let active = 'videoPlayer_active';

	v.playVideo = function (event) {

		event.preventDefault();

		let poster = $(event.target);
		let player = poster.closest('.videoPlayer');
		let iframe = player.find('.videoPlayer__iframe');
		let src = iframe.data('src');

		src += v.autoplay;

		let prev = $(document).find('.' + active);
		if (prev.length) {
			v.stopVideo(prev);
		}

		player.addClass(active);
		iframe.attr('src', src);

	}

	v.stopVideo = function (oActive) {
		
		let iframe = oActive.find('.videoPlayer__iframe');

		oActive.removeClass(active);
		iframe.attr('src', '');

	}

	v.poster.click(v.playVideo);


}