var btn = false;

function updateBtn() {
    if (btn === false) {
        btn = true;
        document.getElementById("style1").disabled = true;
        document.getElementById("style2").disabled = false;
    }
    else {
        btn = false;
        document.getElementById("style1").disabled = false;
        document.getElementById("style2").disabled = true;
    }
}
