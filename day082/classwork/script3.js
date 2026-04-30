let timeoutID;

function send() {
    timeoutID = setTimeout(function() {
        alert("შეტყობინება გაიგზავნა!");
    }, 3000);
}

function cancel() {
    clearTimeout(timeoutID);
    alert("გაუქმდა");
}