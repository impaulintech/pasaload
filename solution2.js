//Get Load Balance
let loadBalance = document.getElementById("loadBalance")
loadBalance.innerHTML = 1000.00

//Mobile Number
mobileNo = document.getElementsByClassName("mobileNo")

//Loading Process Function
function loadingProcess(amount) {

    if (mobileNo[0].value.length < 11) {
        return alert("Please enter valid mobile number")
    }

    if (loadBalance.innerHTML < amount) {
        return alert("Insufficient Balance")
    }

    loadBalance.innerHTML -= parseInt(amount)
    result = document.getElementById("history")
    result.innerText += `₱${amount} is loaded to ${mobileNo[0].value} \n`
}

//Parent Button
let parentButton = document.querySelector(".parentButton");
parentButton.addEventListener("click", (e) => {
    const load = parseInt(e.target.innerText.slice(1))
    loadingProcess(load)
})