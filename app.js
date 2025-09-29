let string = "";

function display(num) {
    string = string + num;
    document.getElementById("input-field").value = string;
}

function equal() {
    try {
        string = eval(string);
        document.getElementById("input-field").value = string;
    } catch (e) {
        document.getElementById("input-field").value = "Error";
        string = "";
    }
}

function clr() {
    string = "";
    document.getElementById("input-field").value = string;
}

function del() {
    string = string.slice(0, -1);
    document.getElementById("input-field").value = string;
}
function percent() {
    try {
        string = (eval(string) / 100).toString();
        document.getElementById("input-field").value = string;
    } catch (e) {
        document.getElementById("input-field").value = "Error";
        string = "";
    }
}
