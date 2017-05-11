





$('[data-modal]').click(function (e) {
  e.preventDefault();
  $('.modal').removeClass('_active');
  var modalItem = $(this).data('modal');
  $(modalItem).addClass('_active');
  $('.mask').addClass('_active');
});

$('.mask, .modal__close').click(function () {
  $(this).removeClass('_active');
  $('.modal').removeClass('_active');
});



$('.jsOpen').on('click', function () {
  var $this = $(this);

  $this.toggleClass('_active');
  $this.find('.jsOpenContent').slideToggle('400');
});
$(document).ready(function() {
  $('.jsScrollDown').scrollTop(100000);
});


