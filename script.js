var tabs = document.getElementsByClassName("tab")
var buttons = document.querySelectorAll("button")

function changeTab(id, event){
    for(var tab of tabs){
    tab.style.display = "none"
    }
    document.getElementById(id).style.display = "block"
    for( var button of buttons){
        button.classList.remove("active")
    }
    event.currentTarget.classList.add("active")
}