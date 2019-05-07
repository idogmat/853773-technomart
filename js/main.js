$(function() {
  $("#slider-range").slider({
    // orientation: "vertical",
    // step: 15,
    range: true,
    min: 0,
    max: 3200,
    values: [0, 1500],
    slide: function(event, ui) {
      $("#amount").val(ui.values[0]);
      $("#amount_1").val(ui.values[1]);
    }
  });
  $("#amount").val($("#slider-range").slider("values", 0));
  $("#amount_1").val($("#slider-range").slider("values", 1));

  // Изменение местоположения ползунка при вводиде данных в первый элемент input
  $("input#amount").change(function() {
    var value1 = $("input#amount").val();
    var value2 = $("input#amount_1").val();
    if (parseInt(value1) > parseInt(value2)) {
      value1 = value2;
      $("input#amount").val(value1);
    }
    $("#slider-range").slider("values", 0, value1);
  });

  // Изменение местоположения ползунка при вводиде данных в второй элемент input 	
  $("input#amount_1").change(function() {
    var value1 = $("input#amount").val();
    var value2 = $("input#amount_1").val();

    if (parseInt(value1) > parseInt(value2)) {
      value2 = value1;
      $("input#amount_1").val(value2);
    }
    $("#slider-range").slider("values", 1, value2);
  });

  // фильтрация ввода в поля
  jQuery('#amount, #amount_1').keypress(function(event) {
    var key, keyChar;
    if (!event) var event = window.event;

    if (event.keyCode) key = event.keyCode;
    else if (event.which) key = event.which;

    if (key == null || key == 0 || key == 8 || key == 13 || key == 9 || key == 46 || key == 37 || key == 39) return true;
    keyChar = String.fromCharCode(key);

    if (!/\d/.test(keyChar)) return false;

  });

});

var buyCart = document.querySelectorAll('.js-buy');
var modalBuyCart = document.querySelector('.modal-cart')
var closeBuyCart = document.querySelector('.modal-cart-close')

buyCart.forEach(function(entry) {
  entry.addEventListener('click', function(event) {
    event.preventDefault();
    modalBuyCart.classList.add("modal-show");
  });
  closeBuyCart.addEventListener('click', function(event) {
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
