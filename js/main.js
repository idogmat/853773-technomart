(function () {
	var openMap = document.querySelector('.contacts-map');
	var popupMap = document.querySelector('.modal-map');
	var closeMap = document.querySelector('.close-map');

	    if (openMap) {
	        openMap.addEventListener('click', function (event) {
	            event.preventDefault();
	            popupMap.classList.add('modal-show');
	        });

	        closeMap.addEventListener('click', function (event) {
	            event.preventDefault();
	            popupMap.classList.remove('modal-show');
	        });
	    };

	var openWrite = document.querySelector('.write-usbtn');
	var popupWrite = document.querySelector('.write-us');
	var closeWrite = document.querySelector('.write-us-close');
	
			if (openWrite) {
	        openWrite.addEventListener('click', function (event) {
	            event.preventDefault();
	            popupWrite.classList.add('modal-show');
	            
	        });

	         closeWrite.addEventListener('click', function (event) {
	            event.preventDefault();
	            popupWrite.classList.remove('modal-show');
	        });
	    };

	var openCart = document.querySelectorAll('.action-buy');
	var popupCart = document.querySelector('.modal-cart');
	var closeCart = document.querySelector('.modal-cart-close');

	    if (openCart) {
	    openCart.addEventListener('click', function (event) {
	        event.preventDefault();
	        popupCart.classList.add('modal-show');

	    });

	    closeCart.addEventListener('click', function (event) {
	        event.preventDefault();
	        popupCart.classList.remove('modal-show');

	    });
	};
})();