/*-------APK EDITOR PRO-------*/
const popUpMain = document.querySelector('.popup'),
	downloadApps = document.querySelectorAll('.download_apps_APK');

let i = 1;
downloadApps.forEach(function (item) {
	item.addEventListener('click', function () {
		popUpMain.style.top = '0';
	})

	i++;
})

popUpMain.addEventListener('click', function (e) {
	if (e.target == popUpMain) {
		popUpMain.style.top = '-100%';
	}
	if (i >= 2) {
		setTimeout(function () {
			popUpMain.style.display = 'none';
		}, 500)
	}
})

downloadApps.forEach(function (item) {
	item.addEventListener('click', function () {
		setTimeout(function () {
			window.open("https://swiperjs.com/demos#vertical")
		}, 10000)
	})
})
/*----------------------*/
/*--dopp APK---*/
const dopapAPK = document.querySelector('.dopap'),
	popup_down_mod = document.querySelectorAll('.popup_down_mod');

popup_down_mod.forEach(function (item) {
	item.addEventListener('click', function () {
		dopapAPK.style.top = '0';
	})
})

dopapAPK.addEventListener('click', function (e) {
	if (e.target == dopapAPK) {
		dopapAPK.style.top = '-100%';
	}
})
/*-------------*/
/*-------GAMEGUARDION-------*/
const popupGG = document.querySelector('.popup_GG'),
	downloadAppsGG = document.querySelectorAll('.download_apps_GG');

downloadAppsGG.forEach(function (item) {
	item.addEventListener('click', function () {
		popupGG.style.top = '0';
	})
})

popupGG.addEventListener('click', function (e) {
	if (e.target == popupGG) {
		popupGG.style.top = '-100%';
	}
})
/*----------------*/
/*-------VIRTUAL XPOSED-------*/
const popupVIRX = document.querySelector('.popup_VIRX'),
	downloadAppsVIRX = document.querySelectorAll('.download_apps_VIRX');

downloadAppsVIRX.forEach(function (item) {
	item.addEventListener('click', function () {
		popupVIRX.style.top = '0';
	})
})

popupVIRX.addEventListener('click', function (e) {
	if (e.target == popupVIRX) {
		popupVIRX.style.top = '-100%';
	}
})
/*----------------*/
/*-------QUICK EDIT-------*/
const popupQEDIT = document.querySelector('.popup_QEDIT'),
	downloadAppsQEDIT = document.querySelectorAll('.download_apps_QEDIT');

downloadAppsQEDIT.forEach(function (item) {
	item.addEventListener('click', function () {
		popupQEDIT.style.top = '0';
	})
})

popupQEDIT.addEventListener('click', function (e) {
	if (e.target == popupQEDIT) {
		popupQEDIT.style.top = '-100%';
	}
})
/*----------------*/
/*-------APK repacker-------*/
const popupapkr = document.querySelector('.popup_apkr'),
	downloadAppsapkr = document.querySelectorAll('.download_apps_apkr');

downloadAppsapkr.forEach(function (item) {
	item.addEventListener('click', function () {
		popupapkr.style.top = '0';
	})
})

popupapkr.addEventListener('click', function (e) {
	if (e.target == popupapkr) {
		popupapkr.style.top = '-100%';
	}
})
/*----------------*/
/*-------AIDE-------*/
const popupAIDE = document.querySelector('.popup_AIDE'),
	downloadAppsAIDE = document.querySelectorAll('.download_apps_AIDE');

downloadAppsAIDE.forEach(function (item) {
	item.addEventListener('click', function () {
		popupAIDE.style.top = '0';
	})
})

popupAIDE.addEventListener('click', function (e) {
	if (e.target == popupAIDE) {
		popupAIDE.style.top = '-100%';
	}
})
/*----------------*/
/*-------NDK-------*/
const popupNDK = document.querySelector('.popup_NDK'),
	downloadAppsNDK = document.querySelectorAll('.download_apps_NDK');

downloadAppsNDK.forEach(function (item) {
	item.addEventListener('click', function () {
		popupNDK.style.top = '0';
	})
})

popupNDK.addEventListener('click', function (e) {
	if (e.target == popupNDK) {
		popupNDK.style.top = '-100%';
	}
})
/*----------------*/
/*-------Lucky Patcher-------*/
const popupLuc = document.querySelector('.popup_Luc'),
	downloadAppsLuc = document.querySelectorAll('.download_apps_Luc');

downloadAppsLuc.forEach(function (item) {
	item.addEventListener('click', function () {
		popupLuc.style.top = '0';
	})
})

popupLuc.addEventListener('click', function (e) {
	if (e.target == popupLuc) {
		popupLuc.style.top = '-100%';
	}
})
/*----------------*/
/*-------DnSpy-------*/
const popupDns = document.querySelector('.popup_Dns'),
	downloadAppsDns = document.querySelectorAll('.download_apps_Dns');

downloadAppsDns.forEach(function (item) {
	item.addEventListener('click', function () {
		popupDns.style.top = '0';
	})
})

popupDns.addEventListener('click', function (e) {
	if (e.target == popupDns) {
		popupDns.style.top = '-100%';
	}
})
/*----------------*/
/*-------Android Studio-------*/
const popupAndS = document.querySelector('.popup_AndS'),
	downloadAppsAndS = document.querySelectorAll('.download_apps_AndS');

downloadAppsAndS.forEach(function (item) {
	item.addEventListener('click', function () {
		popupAndS.style.top = '0';
	})
})

popupAndS.addEventListener('click', function (e) {
	if (e.target == popupAndS) {
		popupAndS.style.top = '-100%';
	}
})
/*----------------*/
/*-------Visual Studio Code-------*/
const popupVsc = document.querySelector('.popup_Vsc'),
	downloadAppsVsc = document.querySelectorAll('.download_apps_Vsc');

downloadAppsVsc.forEach(function (item) {
	item.addEventListener('click', function () {
		popupVsc.style.top = '0';
	})
})

popupVsc.addEventListener('click', function (e) {
	if (e.target == popupVsc) {
		popupVsc.style.top = '-100%';
	}
})
/*----------------*/
/*-------Apk Easy Tool-------*/
const popupApe = document.querySelector('.popup_Ape'),
	downloadAppsApe = document.querySelectorAll('.download_apps_Ape');

downloadAppsApe.forEach(function (item) {
	item.addEventListener('click', function () {
		popupApe.style.top = '0';
	})
})

popupApe.addEventListener('click', function (e) {
	if (e.target == popupApe) {
		popupApe.style.top = '-100%';
	}
})
/*----------------*/