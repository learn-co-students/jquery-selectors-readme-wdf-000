// declare your functions here...
// $('img') tag selector
// $('.pics') class selector
// $('#baby-ninja') id selector
// $('ul li') descendant selector
// $('div img:first-child')  first-child selector
// $("img[alt='the beatles making faces']") alt-tag selector within image element
// $('div:last')  last-selector


function paragraphSelector(){
  return $('p')
}

function lastImageSelector(){
  return $('img:last')
}

function ninjaBabySelector(){
  return $('#baby-ninja')
}

function divSelector(){
  return $('div.pics')
}

function firstListItem(){
  return $('ul#pic-list li:first-child') 
}
