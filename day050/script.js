// confirm() აჩვენებს ფანჯარას OK და Cancel ღილაკებით
// OK → აბრუნებს true
// Cancel → აბრუნებს false
confirm("Continue?");

function showChoice() {
    let selected = document.querySelector('input[name="choice"]:checked');

    if (selected) {
        console.log(selected.value);
    }
}