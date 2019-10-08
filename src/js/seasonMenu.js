function SeasonMenu(sSelector) {
	
	var d = this;

	d.wrap = $(sSelector);
	d.menuBtn = d.wrap.find('.seasonMenu__btn');
	d.menuIcon = d.menuBtn.find('.icon');

	var open = 'seasonMenu__wrap_open';

	d.showHide = function (event) {
		
		event.preventDefault();

		d.wrap.toggleClass(open);

		d.menuIcon.toggleClass('icon_upOrange');
		
	}

	d.menuBtn.click(d.showHide);

}