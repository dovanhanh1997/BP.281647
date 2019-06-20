function converMoney() {
    let To = parseInt(document.getElementById("to").value);
    let From = parseInt(document.getElementById("from").value);
    let Enter = parseInt(document.getElementById("amount").value);
    result = Enter * From / To;
    document.getElementById("Result").innerHTML = result;

}