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

//Ten Button
tenButton = document.getElementById("tenButton")
tenButton.addEventListener("click", () => {
    loadingProcess(10)
})

//Fifty Button
pasaFifty = document.getElementById("fiftyButton")
pasaFifty.addEventListener("click", () => {
    loadingProcess(50)
})

//One Hundred Button
hundredButton = document.getElementById("hundredButton")
hundredButton.addEventListener("click", () => {
    loadingProcess(100)
})
