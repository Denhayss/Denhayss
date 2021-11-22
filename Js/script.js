const notifElem = document.querySelector('.notification')

const notif = {
	open: (color = 'blue') => notifElem.classList.add('go', color),
	close: () => notifElem.classList.remove('go')
}

setTimeout(() => {
	notif.open('blue')
	setTimeout(() => {
		notif.close()
	}, 15000);
}, 5000);
/*-------------------------*/
/*-------SLIDER---------*/
let imageSwiper = new Swiper('.image-slider', {
	loop: true,

	pagination: {
		el: '.swiper-pagination',
	},

	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination :{
		el:'.swiper-pagination',
		//БУЛЕТЫ
		clickable:true,
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	}
})
/*----------------------*/
/*-----------BURGER MENU-------------- */
$(document).ready(function() {
	$(".header__burger").click(function(event){
		$('.header__burger,.header__menu,.content_h,.header__list').toggleClass("active");
		$('.body').toggleClass('lock')
		});
});
/*-----------BURGER MENU-------------- */
/*------------СМЕНА ФОНА ОТ ВРЕМЕНИ ----------*/
/*----STANDOFF2----
   var   day = new Date();
   var   hour = day.getHours();

 $(window).load(function() {

    if (hour >= 7 && hour < 18) {
       $('.wrapper_new1.loaded').css({background:"url('https://static.tildacdn.com/tild6330-3038-4639-b332-383538323334/utro.jpg')"} );
       $('.wrapper_new.loaded').css({background:"rgba(0, 0, 0, 0.8)"} );
    } else if (hour >= 18 && hour < 7) {
      $('.wrapper_new1.loaded').css({background:"url('https://static.tildacdn.com/tild3965-6538-4364-b635-656562646636/den.jpg')"} );
      $('.wrapper_new.loaded').css({background:"rgba(255, 255, 255, 0.8)"} );
    };
 });  




/*----STANDOFF2----*/
/*--------------------------------------------*/
/*-------PUSH-------*/
/*----STANDOFF2----*/
function notifyMe () {
		var notificationpush = new Notificationpush ("Все еще работаешь?", {
			tag : "ache-mail",
			body : "влыоатвоаотывоаоыва текст",
			icon : "https://itproger.com/img/notify.png"
		});
	}
	
	function notifSet () {
		if (!("Notificationpush" in window))
			alert ("Ваш браузер не поддерживает уведомления.");
		else if (Notificationpush.permission === "granted")
			setTimeout(notifyMe, 2000);
		else if (Notificationpush.permission !== "denied") {
			Notificationpush.requestPermission (function (permission) {
				if (!('permission' in Notificationpush))
					Notificationpush.permission = permission;
				if (permission === "granted")
					setTimeout(notifyMe, 2000);
			});
		}
	}
/*----STANDOFF2----*/
/*-------PUSH-------*/
