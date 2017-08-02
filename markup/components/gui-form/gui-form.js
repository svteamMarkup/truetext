$('.jsFormRedactChange').click(function (e) {
  e.preventDefault();
  var $this = $(this),
      currentValue = $this.closest('.jsFormRedact').find('.jsFormRedactView').html();

  $this.closest('.jsFormRedact').find('.jsFormRedactControl, .jsFormRedactView').addClass('_hidden');
  $this.closest('.jsFormRedact').find('.jsFormRedactHidden').addClass('_visible');
  $this.closest('.jsFormRedact').find('.jsFormRedactField').val(currentValue).focus();
});

$('.jsFormRedactCancel').click(function (e) {
  e.preventDefault();
  var $this = $(this);

  $this.closest('.jsFormRedact').find('.jsFormRedactControl, .jsFormRedactView').removeClass('_hidden');
  $this.closest('.jsFormRedact').find('.jsFormRedactHidden').removeClass('_visible');
});