
//navbar
//ah yes, the heian era
function hideiconbar(){
    var baricon = document.getElementById("baricon")
    var navigation = document.getElementById("navigation")
    baricon.setAttribute("style", "display:none;");
    navigation.classList.remove("hide");
}
function showiconbar(){
    var baricon = document.getElementById("baricon")
    var navigation = document.getElementById("navigation")
    baricon.setAttribute("style", "display:block;");
    navigation.classList.add("hide");
}
