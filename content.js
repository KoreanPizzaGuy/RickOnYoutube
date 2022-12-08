var konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var index = 0;

document.addEventListener('keydown', function(e) {
  if (e.keyCode === konamiCode[index]) {
    index++;
  } else {
    index = 0;
  }

  if (index === konamiCode.length) {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
  }
});
