function checkScreenSize() {
    var iw = window.innerWidth;
    var ih = window.innerHeight;
    var body = document.querySelector('body');
    if(window.matchMedia('(max-width: 599px)').matches)
    {
        var screenSizeClass = 'screen-small';
        body.classList.toggle(screenSizeClass);
        console.log('*** screenSizeClass: ', screenSizeClass, iw, ih);
    }
    if(window.matchMedia('(min-width: 600px)').matches)
    {
        var screenSizeClass = 'screen-middle';
        body.classList.toggle(screenSizeClass);
        console.log('*** screenSizeClass: ', screenSizeClass, iw, ih);
    }
    if(window.matchMedia('(min-width: 1000px)').matches)
    {
        var screenSizeClass = 'screen-large';
        body.classList.toggle(screenSizeClass);
        console.log('*** screenSizeClass: ', screenSizeClass, iw, ih);
    }
}
window.onresize = function() {
    checkScreenSize();
};
window.onload = function() {
    checkScreenSize();
};