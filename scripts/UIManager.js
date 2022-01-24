import {camera, renderer} from "./SceneBasics.js";

let body = document.body,
    html = document.documentElement,
    info = document.getElementById("info"),
    message = document.getElementById("message");

adjustOrientation();

window.addEventListener('resize', function(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    info.style.width = '100%';
    info.style.height = '100%';
    adjustMessageContent();
    console.log(getPixelRatio());
    console.log(isMobile());

}, false);

adjustMessageContent();
message.style.visibility = 'visible';

function adjustMessageContent(){

    if(getPixelRatio() < 0.9){
        message.style.width =  '95%';
    }

    else{
        message.style.width =  '65%';
    }
}

function getPixelRatio(){
    return getWidth() / getHeight();
}

function getHeight(){
    return Math.max( body.scrollHeight, body.offsetHeight,
        html.clientHeight, html.scrollHeight, html.offsetHeight);
}

function getWidth(){
    return Math.max( body.scrollWidth, body.offsetWidth,
        html.clientWidth, html.scrollWidth, html.offsetWidth);
}

window.addEventListener("orientationchange", function() {
    // Announce the new orientation number
    adjustOrientation();
    adjustMessageContent();

}, false);


function adjustOrientation(){
    if(screen.orientation.type === "landscape-primary" && isMobile()){
        alert('Please use portrait orientation!');
    }

    else{
        info.style.width = '100%';
        info.style.height = '100%';
    }
}

function isMobile(){
    return !!(navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i));
}
