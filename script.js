$(function (){

  $.ajax({
    type: 'GET',
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies',
    dataType: "json",
    headers: { "X-Mashape-Key": "qzwa4lx4gVmshWzgX5hbOgznXaK2p1XBRPQjsnEBhCpIknHhcG" },
    success: function(data) {
      console.log('success', data);
    }
  });

});
