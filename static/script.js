function hideDivById(divId) {
    var element = document.getElementById(divId)
    if (element.style.display === "none") {
        element.style.display = "block"
    } else {
        element.style.display = "none"
    }
}

w3.includeHTML()