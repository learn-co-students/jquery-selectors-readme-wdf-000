// declare your functions here...
$(document).ready(function() {
  var i = $('.pics #pic-list img:first-child');
  console.log(i[0]);
});

function paragraphSelector() {
  return $('p');
}

function lastImageSelector() {
  return $('img:last');
}

function ninjaBabySelector() {
  return $('#baby-ninja');
}

function divSelector() {
  return $('.pics');
}

function firstListItem() {
  return $('#pic-list li:first-child');
}