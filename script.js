//alert("ready to load javascript");

const endDate = "13 Dec 2024 10:00 PM";

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");

function clock() {
    const end = new Date(endDate);
    const now = new Date();

    const diff = (end - now) / 1000;
    //console.log(diff);

    //if time is over then not show negative value.
    if(diff < 0) return;

    //convert into days
    inputs[0].value = Math.floor(diff / 3600 / 24);

    //convert into hours
    inputs[1].value = Math.floor(diff / 3600 ) % 24;

    //convert into min
    inputs[2].value = Math.floor(diff / 60) % 60;

    //convert into sec
    inputs[3].value = Math.floor(diff) % 60;

}
//initial call 
clock();

//for time update
setInterval(() => {
    clock()
}, 1000);