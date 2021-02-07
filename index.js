document.getElementById("submit").addEventListener("click", function() {
    let amount = document.getElementById("original-currency-amount").value;
    let oldCurr = document.getElementById("original-currency-unit").value;
    let newCurr = document.getElementById("new-currency-unit").value;
    let rate = document.getElementById("exchange-rate").value;
    let message = document.getElementById("output-text");
    let newAmount = amount * rate;
    
    let lastCharOld = oldCurr.charAt(oldCurr.length - 1);
    let lastCharNew = newCurr.charAt(newCurr.length - 1);
    
    if (amount > 1 && lastCharOld != "s") {
        oldCurr = `${oldCurr}s`;
    } else if (amount <= 1 && lastCharOld == "s") {
        oldCurr = oldCurr.slice(0, oldCurr.length - 1);
    }
    
    if (newAmount > 1 && lastCharNew != "s") {
        newCurr = `${newCurr}s`;
    } else if (newAmount <= 1 && lastCharNew == "s") {
        newCurr = newCurr.slice(0, newCurr.length - 1);
    }
    
    message.style.fontSize = "1em";
    message.style.fontWeight = "500";
    
    message.innerHTML = `Your ${amount} ${oldCurr} will currently buy you ${newAmount} ${newCurr}`;
})