(function () {
var openMap = document.querySelector('.contacts-map');
var popupMap = document.querySelector('.modal-map');
var closeMap = document.querySelector('.close-map');

    if (openMap) {
        openMap.addEventListener('click', function (evt) {
            event.preventDefault();
            popupMap.classList.add('modal-show');
        });

        closeMap.addEventListener('click', function (evt) {
            event.preventDefault();
            popupMap.classList.remove('modal-show');
        });
    };

var openWrite = document.querySelector('.write-usbtn');
var popupWrite = document.querySelector('.write-us');
var closeWrite = document.querySelector('.write-us-close');

	if (openWrite) {
        openWrite.addEventListener('click', function (evt) {
            event.preventDefault();
            popupWrite.classList.add('modal-show');
        });

        closeWrite.addEventListener('click', function (evt) {
            event.preventDefault();
            popupWrite.classList.remove('modal-show');
        });
    }; 
})();