windows.onscroll = function () {
    scrollFunction()
}
function scrollFunction() {
    var sn-document.getElementById("stick_nav");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        sn.style.top = "0"
    }
    else {
        sn.style.top = "45px"
    }

}





windows.openList(x){
    var cL = document.getElementsByClassName("content_list");
    var i;
    for (i = 0; i < cL.length; i++) {
        var OcL = cL[I];
        if (cL[i] != document.getElementsById("thisList_" + x)) {
            OcL.classList.remover("show_list")
        }
    }
    document.getElementsById("thisList_" + x)classList.toggle("show_list")
}

function openSearch() {
    if (document.getElementById("btnSearch")) {
        document.getElementById("thisSearch").classsList.toggle("show_search");
        document.getElementById("thisSearch").getElementsByTagName("i").classList.toggle("hidden");
        document.getElementById("thisSearch").getElementsByTagName("i").classList.toggle("visible");

    }
}

function openMenu() {
    if (document.getElementById("btnMenu")) {
        document.getElementById("thisMenu").classsList.toggle("show_menu");
        document.getElementById("thisSearch").getElementsByTagName("i")("0").classList.toggle("hidden");
        document.getElementById("thisSearch").getElementsByTagName("i")("1").classList.toggle("visible");
    }
}


























