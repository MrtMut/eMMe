// This code is used to create a slider effect on the website.
// It uses the setInterval function to change the background image of the slider every 2.5 seconds.
// The images used in this code are stored in the SLIDE__IMG array.
// The sliderPosition variable is used to keep track of the current image being displayed.
// The passImages function is called every 2.5 seconds to change the background image and update the sliderPosition variable.
// The sliderPosition variable is incremented or reset to 0 if it reaches the end of the array.
// The sliderPosition variable is used to set the background image of the slider using the style.backgroundImage property.
// The sliderPosition variable is also used to set the background position of the slider using the style.backgroundPosition property.
// The sliderPosition variable is incremented or reset to 0 if it reaches the end of the array.
// The setInterval function is used to call the passImages function every 2.5 seconds.
window.onload = function() {
    const SLIDE__IMG = [
        "assets/img/avatars-1.png",
        'assets/img/avatars-2.png',
        'assets/img/avatars-3.png',
        'assets/img/avatars-4.png',];

    let slidePosition = 0;
    function passImages() {
        if (slidePosition >= SLIDE__IMG.length - 1) {
            slidePosition = 0;
        } else {
            slidePosition++;
        }
        document.getElementById("slider_imagen").style.backgroundImage = `url(${SLIDE__IMG[slidePosition]})`;
        // document.getElementById("slider_imagen").style.backgroundPosition = "center";
    }
    passImages();
    setInterval(passImages, 2500);
}