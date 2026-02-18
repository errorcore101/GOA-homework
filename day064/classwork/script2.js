    let now = new Date(); // Date ობიექტი იღებს მიმდინარე თარიღსა და დროს სისტემიდან

    let year = now.getFullYear();
    let hours = now.getHours();
    let seconds = now.getSeconds();

    document.getElementById("year").innerHTML = "წელი: " + year;
    document.getElementById("time").innerHTML =
        "საათი: " + hours + " | წამი: " + seconds;

showTime();
setInterval(showTime, 1000);