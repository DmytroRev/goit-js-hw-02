function checkForSpam(message) {
const modMessage = message.toLowerCase()
const spamMod = "spam"
const saleMod = "sale"
const search = modMessage.includes(spamMod) || modMessage.includes(saleMod)
return search
}
console.log(checkForSpam("Latest technology news"))
console.log(checkForSpam("JavaScript weekly newsletter"))
console.log(checkForSpam("Get best sale offers now!"))
console.log(checkForSpam("Amazing SalE, only tonight!"))
console.log(checkForSpam("Trust me, this is not a spam message"))
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"))
console.log(checkForSpam("[SPAM] How to earn fast money?"))



