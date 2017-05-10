$('.jsOpen').on('click', function () {
  var $this = $(this);

  $this.toggleClass('_active');
  $this.find('.jsOpenContent').slideToggle('400');
});