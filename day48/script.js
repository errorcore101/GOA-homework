
// ფუნქციებს ვიყენებთ იმისთვის, რომ კოდი იყოს უფრო ორგანიზებული და გასაგები

// ფუნქცია გვაძლევს საშუალებას ერთჯერ დაწერილი კოდი
// რამდენჯერმე გამოვიყენოთ გამეორების გარეშე

// ფუნქციები ამცირებს შეცდომების შანსს,
// რადგან ერთი ლოგიკა ერთ ადგილას არის დაწერილი

// ასევე ფუნქციები ამარტივებს კოდის წაკითხვას და შეცვლას
// (თუ რამე შეიცვლება, მხოლოდ ფუნქციაში ვასწორებთ)


let originalText = "This is the original text";

function changeText() {
    document.getElementById("text").textContent = "The text has been changed";
}

function resetText() {
    document.getElementById("text").textContent = originalText;
}