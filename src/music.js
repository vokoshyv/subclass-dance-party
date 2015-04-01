$(document).ready(function(event){

var audio = {};

audio['theme'] = new Audio();
audio['theme'].src = 'music/theme.mp3';
audio['theme'].autoplay = true;

$('#battle').click(function(){
  audio['theme'].pause();

  audio['battle'] = new Audio();
  audio['battle'].src = 'music/battle.mp3';
  audio['battle'].addEventListener('load', function(){
    audio["battle"].play();
  })
event.preventDefault();
})
