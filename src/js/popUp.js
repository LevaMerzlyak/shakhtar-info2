function PopUp(sHeader, sLoginMenu) {
	
	var p = this;

	p.header = $(sHeader);

	p.menuBtn = p.header.find('.menuBtn');
	p.menu = p.header.find('.header__nav');
	p.mainMenuOpen = false;

	p.login = p.header.find('.login');
	p.enter = p.login.find('.login__link_log');
	p.reg = p.login.find('.login__link_reg');
	p.logUsr = p.login.find('.login__user');

	p.searchBtn = p.header.find('.search__link');
	p.searchMenu = p.header.find('.search__block');
	p.searchMenuOpen = false; 

	p.loginMenu = $(sLoginMenu);
	p.close = p.loginMenu.find('.close__btn');
	p.loginMenuEnter = p.loginMenu.find('#login-menu');
	p.loginMenuReg = p.loginMenu.find('#reg-menu');

	p.avatar = p.login.find('.user__photo');
	p.avatarMenu = p.header.find('.avatar__menu');
	p.avatarSubmit = p.avatarMenu.find('#avatarSubmit');
	p.avatarMenuOpen = false;

	p.openCloseMainMenu = function (event) {
		
		event.preventDefault();

		if (p.mainMenuOpen) {
			p.closeMainMenu();
		} else {
			if (p.avatarMenuOpen) {
				p.closeAvatarMenu();
				setTimeout(p.openMainMenu, 750);
			} else {
				p.openMainMenu();
			}
		}

	}

	p.openMainMenu = function () {

		p.menuBtn.addClass('menuBtn_close');
		p.menu.addClass('header__nav_menuOpen');

		p.mainMenuOpen = true;

	}

	p.closeMainMenu = function () {
		
		p.menuBtn.removeClass('menuBtn_close');
		p.menu.removeClass('header__nav_menuOpen');

		p.mainMenuOpen = false;

	}

	p.openEnter = function (event) {
		
		event.preventDefault();

		p.loginMenu.addClass('login__wrap_open');

		setTimeout(function () {
			p.showEnter();
		}, 500);

	}

	p.openReg = function (event) {
		
		event.preventDefault();

		p.loginMenu.addClass('login__wrap_open');

		setTimeout(function () {
			p.showReg();
		}, 500);
		
	}

	p.showEnter = function (event) {

		if (event) event.preventDefault();
		
		if (p.loginMenu.hasClass('login__wrap_reg')) p.loginMenu.removeClass('login__wrap_reg');
		p.loginMenu.addClass('login__wrap_enter');

	}

	p.showReg = function (event) {

		if (event) event.preventDefault();
		
		if (p.loginMenu.hasClass('login__wrap_enter')) p.loginMenu.removeClass('login__wrap_enter');
		p.loginMenu.addClass('login__wrap_reg');

	}

	p.hideLoginMenu = function (event) {
		
		if (event) event.preventDefault();

		p.loginMenu.removeClass('login__wrap_open');
		if (p.loginMenu.hasClass('login__wrap_enter')) {
			p.loginMenu.removeClass('login__wrap_enter');
		} else {
			p.loginMenu.removeClass('login__wrap_reg');			
		}

	}

	p.closeLoginMenu = function (event) {
		
		if (event.target === this ) p.hideLoginMenu();

	}

	p.openCloseAvatarMenu = function () {

		if (p.avatarMenuOpen) {
			p.closeAvatarMenu();
		} else {
			if (p.searchMenuOpen || p.mainMenuOpen) {
				p.closeMainMenu();
				p.closeSearchMenu();
				setTimeout(p.openAvatarMenu, 750);
			} else {
				p.openAvatarMenu();
			}
		}

	}

	p.openAvatarMenu = function () {
		
		p.avatarMenu.addClass('avatar__menu_open');

		p.avatarMenuOpen = true;

	}

	p.closeAvatarMenu = function () {
		
		p.avatarMenu.removeClass('avatar__menu_open');

		p.avatarMenuOpen = false;

	}

	p.openCloseSearchMenu = function (event) {

		event.preventDefault();

		if (p.searchMenuOpen) {
			p.closeSearchMenu();
		} else {
			if (p.avatarMenuOpen) {
				p.closeAvatarMenu();
				setTimeout(p.openSearchMenu, 750);
			} else {
				p.openSearchMenu();
			}
		}

	}

	p.openSearchMenu = function () {
		
		p.searchMenu.addClass('search__block_open');

		p.searchMenuOpen = true;

	}

	p.closeSearchMenu = function () {

		p.searchMenu.removeClass('search__block_open');

		p.searchMenuOpen = false;

	}

	p.enter.click(p.openEnter);
	p.logUsr.click(p.openEnter);
	p.reg.click(p.openReg);
	p.loginMenuEnter.click(p.showEnter);
	p.loginMenuReg.click(p.showReg);
	p.close.click(p.hideLoginMenu);
	p.loginMenu.click(p.closeLoginMenu);

	p.avatar.click(p.openCloseAvatarMenu);
	p.avatarSubmit.click(p.closeAvatarMenu);

	p.searchBtn.click(p.openCloseSearchMenu);
	
	p.menuBtn.click(p.openCloseMainMenu);
}