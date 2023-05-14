function togglePanel() {
    var panel = document.getElementById("right-panel");
    if (panel.style.right == "-300px") {
        panel.style.right = "0";
    } else {
        panel.style.right = "-300px";
    }
}