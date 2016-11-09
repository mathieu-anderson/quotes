$(function (){
var $quotesObject = $('#quotes');
  $.ajax({
    type: 'GET',
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
    dataType: "json",
    headers: { "X-Mashape-Key": "qzwa4lx4gVmshWzgX5hbOgznXaK2p1XBRPQjsnEBhCpIknHhcG" },
    success: function(quotesObject) {
      $.each(quotesObject, function(quotesProperty){
        $quotesObject.append('<p>' + quotesObject[quotesProperty] + '</p>');

      });
    }
  });

});
