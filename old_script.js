let loadBalance = document.getElementById("loadBalance")

loadBalance.innerHTML = parseInt("1000.00")


tenButton = document.getElementById("tenButton");
const pasaTen = () => {
	mobileNo = document.getElementById("mobileNo").value
	addTen = parseInt("10")
	difference = loadBalance.innerHTML -= addTen
	result = document.getElementById("loadedUp")
	result.innerText += `₱10 is loaded to ${mobileNo} \n`
}
tenButton.addEventListener("click", pasaTen);



fiftyButton = document.getElementById("fiftyButton");
const pasaFifty = () => {
	mobileNo = document.getElementById("mobileNo").value
	addFifty = parseInt("50")
	difference = loadBalance.innerHTML -= addFifty

	result = document.getElementById("loadedUp")
	result.innerText += `₱50 is loaded to ${mobileNo} \n`
}
fiftyButton.addEventListener("click", pasaFifty);



hundredButton = document.getElementById("hundredButton");
const pasaHundred = () => {
	mobileNo = document.getElementById("mobileNo").value
	addHundred = parseInt("100")
	difference = loadBalance.innerHTML -= addHundred

	result = document.getElementById("loadedUp")
	result.innerText += `₱100 is loaded to ${mobileNo} \n`
}
hundredButton.addEventListener("click", pasaHundred);
