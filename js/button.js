function currentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
}


function elmYPosition(eID) {
    var elm = document.getElementById(eID);
    var y = elm.offsetTop;
    var node = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
    } return y;
}



  $(function() {
  $(window).scroll(function() {
  if($(this).scrollTop() != 0) {
  $('#topNubex').fadeIn();
  } else {
  $('#topNubex').fadeOut();
  }
  });
  $('#topNubex').click(function() {
  $('body,html').animate({scrollTop:0},500);
  });
  });
  
// var smoothJumpUp = function() {
//     if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
//         window.scrollBy(0,-50);
//         setTimeout(smoothJumpUp, 10);
//     }
// }

// window.onscroll = function() {
//   var scrolled = window.pageYOffset || document.documentElement.scrollTop;
//   if (scrolled > 100) {
//       document.getElementById('topNubex').style.display = 'block';
//   } else {
//       document.getElementById('topNubex').style.display = 'none';
//   }
// }