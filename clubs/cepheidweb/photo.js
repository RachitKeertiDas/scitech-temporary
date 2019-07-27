function getRandomSize(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

for (var i = 0; i < 25; i++) {
  var width = getRandomSize(20, 40);
  var height =  getRandomSize(20, 40);
  $('#photos').append('<img src="//www.lorempixel.com/'+width+'/'+height+'/cats" alt="pretty kitty">');
}