//HEADER slide
(function () {
	var header = document.querySelector('.header');
	window.onscroll = () => {
		if (window.pageYOffset > 22) {
			header.classList.add('header__active');
		} else {
			header.classList.remove('header__active');
		}
	};
}());

//Header BURGER
$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	})
	$('.header__link').click(function (event) {
		$('.header__burger, .header__menu').removeClass('active');
		$('body').removeClass('lock')
	});
});



