function hideDivById(divId) {
    hideAllDivW3Includes()
    var element = document.getElementById(divId)
    if (element.style.display === "none") {
        element.style.display = "block"
    }
}

function hideAllDivW3Includes() {
    var elementArray = document.getElementsByName("w3includes")
    for (var element of elementArray) {
        element.style.display = "none"
    }
}

w3.includeHTML()