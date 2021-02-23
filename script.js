if( /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    alert("mobile");
   }
else {
    alert("desktop");
}

setInterval(logger, 10);
let op = 1
let factor = -.01;
function logger() {
    //console.log(document.getElementById("underscore").style.opacity);
    if (op <= 0) factor = .01;
    if (op >= 1) factor = -.01;
    op += factor;
    document.getElementById("underscore").style.opacity = op;
}

function hovering(x) {
    if (x>0) {
        document.getElementById("link-arrow-"+x).style.padding = "0 0 0 3px";
        console.log(document.getElementById("link-arrow-"+x).style.padding);
    }
    else {
        x=-x;
        document.getElementById("link-arrow-"+x).style.padding = "0 0 0 0";
        console.log(document.getElementById("link-arrow-"+x).style.padding);
    }
}
