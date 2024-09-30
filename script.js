window.addEventListener("DOMContentLoaded", () => {
    var vid1 = document.getElementById("mockup-1");
    var vid2 = document.getElementById("mockup-2");

    vid1.muted = true;
    vid2.muted = true;
    
    var vid1Ready = false
    var vid2Ready = false
    
    vid1.onloadeddata = function() {
        if (vid2Ready == true) {
          vid1.play()
          vid2.play()
        } else {
          vid1Ready = true
        }
    };
    
    vid2.onloadeddata = function() {
        if (vid1Ready == true) {
          vid1.play()
          vid2.play()
        } else {
          vid2Ready = true
        }
    };
})