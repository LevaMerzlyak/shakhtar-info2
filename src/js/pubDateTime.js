function PubDateTime(sSelector) {

	var l = this;

	l.list = $(sSelector);
	l.pubDateTime = l.list.find('.pub__dateTime');

	l.sToday = 'Сегодня';

	l.initDateTime = function () {		

		if (l.pubDateTime.children().length > 0) {

			l.pubDateTime.each(function () {
				let pubDate = $(this).find('.pub__date');
				let pubTime = $(this).find('.pub__time');
				let aDateTime = $(this).attr('datetime').split(' ');
				let sDate = aDateTime[0];
				let sTime = aDateTime[1];

				pubTime.html(sTime);

				if (l.getToday() == sDate) {
					pubDate.html(l.sToday);
				} else {
					let aDate = sDate.split('-');
					let dateText = aDate[2] + '.' + aDate[1] + '.' + aDate[0];
					
					pubDate.html(dateText);
				}

			});
		} else {
			l.pubDateTime.each(function () {
				let sDateTime = $(this).attr('datetime');

				if (l.getToday() == sDateTime) {
					$(this).html(l.sToday);
				} else {
					let aDate = sDateTime.split('-');
					let dateText = aDate[2] + '.' + aDate[1] + '.' + aDate[0];
					
					$(this).html(dateText);
				}
			});
		}

	}

	l.getToday = function () {
		let today = new Date();
		let dd = today.getDate();
		let mm = today.getMonth() + 1;
		let yyyy = today.getFullYear();

		if (dd < 10) dd = '0' + dd;
		if (mm < 10) mm = '0' + mm;

		today = yyyy + '-' + mm + '-' + dd;

		return today;
	}

	$(document).ready(l.initDateTime);

}