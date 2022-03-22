var btn = document.getElementsByTagName("button");




function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("head").innerHTML =
                this.responseText;
        }
    };
    xhttp.open("GET", "sample.txt", true);
    xhttp.send();
}

