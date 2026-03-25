function pageLoaded() {

    const p = document.getElementById("text");

    p.onmouseover = function() {
        p.style.backgroundColor = "yellow";
    };

    p.onmouseout = function() {
        p.style.backgroundColor = "lightgray";
    };
}