//  IMPORT  
// REMOVE
$('.pop-up .close').click(function(){
  $('.pop-up').removeClass('open');
});
  $('.pop-up-import-ethereum .close').click(function(){
    $('.pop-up-import-ethereum').removeClass('open');
  });
    $('.pop-up-import-EOS .close').click(function(){
      $('.pop-up-import-EOS').removeClass('open');
    });
      $('.pop-up-import-cardano .close').click(function(){
        $('.pop-up-import-cardano').removeClass('open');
      });    

// ADD

$("#import").click(function() {
  $('.pop-up').addClass('open');
});
  $("#import-ethereum").click(function() {
    $('.pop-up-import-ethereum').addClass('open');
    $('.pop-up').removeClass('open');
  });
    $("#import-EOS").click(function() {
      $('.pop-up-import-EOS').addClass('open');
      $('.pop-up').removeClass('open');
    });
      $("#import-cardano").click(function() {
        $('.pop-up-import-cardano').addClass('open');
        $('.pop-up').removeClass('open');
      });

//  EXPORT
// REMOVE
$('.pop-up-export .close').click(function(){
  $('.pop-up-export').removeClass('open');
});
  $('.pop-up-export-ethereum .close').click(function(){
    $('.pop-up-export-ethereum').removeClass('open');
  });
    $('.pop-up-export-EOS .close').click(function(){
      $('.pop-up-export-EOS').removeClass('open');
    });
      $('.pop-up-export-cardano .close').click(function(){
        $('.pop-up-export-cardano').removeClass('open');
      });    

// ADD

$("#export").click(function() {
  $('.pop-up-export').addClass('open');
});
  $("#export-ethereum").click(function() {
    $('.pop-up-export-ethereum').addClass('open');
    $('.pop-up-export').removeClass('open');
  });
    $("#export-EOS").click(function() {
      $('.pop-up-export-EOS').addClass('open');
      $('.pop-up-export').removeClass('open');
    });
      $("#export-cardano").click(function() {
        $('.pop-up-export-cardano').addClass('open');
        $('.pop-up-export').removeClass('open');
      });