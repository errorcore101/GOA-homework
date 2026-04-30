let timeoutID;

function start() {
    timeoutID = setTimeout(function() {
        document.getElementById("text").innerText = "დრო ამოიწურა!";
    }, 5000);
}

function reset() {
    clearTimeout(timeoutID);
    document.getElementById("text").innerText = "დაელოდეთ...";
}