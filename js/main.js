		var buyCart = document.querySelectorAll('.js-buy');
	var modalBuyCart= document.querySelector('.modal-cart')
	var closeBuyCart = document.querySelector('.modal-cart-close')
		
		buyCart.forEach(function (entry) {
			entry.addEventListener('click', function (event){
			event.preventDefault();
			modalBuyCart.classList.add("modal-show");
		});
			closeBuyCart.addEventListener('click', function (event){
				event.preventDefault();
				modalBuyCart.classList.remove("modal-show");
			});
		});
		
	var opMap = document.querySelector('.contacts-map');
	var popupMap = document.querySelector('.modal-map');
	var closeMap = document.querySelector('.close-map');

	
		opMap.addEventListener('click', function(event) {
			event.preventDefault();
			popupMap.classList.add('modal-show');
		});

		closeMap.addEventListener('click', function(event) {
		    event.preventDefault();
		    popupMap.classList.remove('modal-show');
		});
	


	var openWrite = document.querySelector('.write-usbtn');
	var popupWrite = document.querySelector('.write-us');
	var closeWrite = document.querySelector('.write-us-close');
	var formContact = popupWrite.querySelector('.write-us-form');
	var nameContact = popupWrite.querySelector('[name=name]');
	var emailContact = popupWrite.querySelector('[name=email]');
	var textContact = popupWrite.querySelector('[name=text]');
	var storageName = localStorage.getItem('nameContact');
	var storageEmail = localStorage.getItem('emailContact');
	var isStorageSupport = true;
	var storage = "";

	try {
	    storage = localStorage.getItem('nameContact');
	    } catch (err) {
	    isStorageSupport = false;
	}

	openWrite.addEventListener("click", function(evt) {
	    evt.preventDefault();
	    popupWrite.classList.add("modal-show");

	    if (storage) {
	        storageName.value = storageName;	        
	        } else {
	        storageName.focus();
	    }
	});

	closeWrite.addEventListener("click", function(evt) {
	    evt.preventDefault();
	    popupWrite.classList.remove("modal-show");
	    popupWrite.classList.remove("modal-error");
	});

	formContact.addEventListener("submit", function(evt) {
	    if (!nameContact.value || !emailContact.value || !textContact.value) {
	        evt.preventDefault();
	        popupWrite.classList.remove("modal-error");
	        popupWrite.offsetWidth = popupWrite.offsetWidth;
	        popupWrite.classList.add("modal-error");
	    } else {
	        if (isStorageSupport = true) {
	            localStorage.setItem('nameContact', nameContact.value);
	            localStorage.setItem('emailContact', emailContact.value);
	            console.log(localStorage.getItem('emailContact'));
	        }
	    }
	});

	window.addEventListener("keydown", function(evt) {
	    if (evt.keyCode === 27) {
	        evt.preventDefault();
	        if (popupWrite.classList.contains("modal-show")) {
	            popupWrite.classList.remove("modal-show");
	            popupWrite.classList.remove("modal-error");
	        }
	    }
	});

	var linkArrow = document.querySelectorAll('.slider-arrows a');
	var inputNav = document.querySelectorAll('.promo-item input[name=toggle]');

	if (linkArrow) {
	    for (var i = 0; i < linkArrow.length; i++) {
	        linkArrow[i].addEventListener('click', function(event) {
	            event.preventDefault();
	            var currentInput = document.querySelector('.promo-item input:checked');
	            var currentInputIndex = [].indexOf.call(inputNav, currentInput);
	            var inputCount = inputNav.length;
	            switch (this.dataset.direction) {
	                case 'left':
	                    if (currentInputIndex == 0) {
	                        inputNav[inputCount - 1].checked = true;
	                    } else {
	                        inputNav[currentInputIndex - 1].checked = true;
	                    }
	                    break;

	                case 'right':
	                    if ((inputCount - 1) == currentInputIndex) {
	                        inputNav[0].checked = true;
	                    } else {
	                        inputNav[currentInputIndex + 1].checked = true;
	                    }
	                    break;
	            }
	        });
	    };
	};
	
