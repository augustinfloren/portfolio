window.addEventListener("DOMContentLoaded", () => {
    var vid1 = document.getElementById("mockup-1");
    var vid2 = document.getElementById("mockup-2");
    var vid3 = document.getElementById("mockup-3");
    var vid4 = document.getElementById("mockup-4");

    vid1.muted = true;
    vid2.muted = true;
    vid3.muted = true;
    
    vid4.muted = true;
    
    var vid1Ready = false
    var vid2Ready = false
    var vid3Ready = false
    
    var vid4Ready = false
    
    vid1.onloadeddata = function() {
        if (vid2Ready == true) {
          vid1.play()
          vid2.play()
          vid3.play()
        } else {
          vid1Ready = true
        }
    };
    
    vid2.onloadeddata = function() {
        if (vid1Ready == true) {
          vid1.play()
          vid2.play()
          vid3.play()
        } else {
          vid2Ready = true
        }
    };

    vid3.onloadeddata = function() {
      if (vid3Ready == true) {
        vid1.play()
        vid2.play()
        vid3.play()
      } else {
        vid3Ready = true
      }
  };

  vid4.onloadeddata = function() {
    if (vid3Ready == true) {
      vid1.play()
      vid2.play()
      vid3.play()
      vid4.play()
    } else {
      vid4Ready = true
    }
};
})