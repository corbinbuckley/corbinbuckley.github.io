window.onload = function () {
    currentDate();

    function currentDate() {
        var d = new Date();
        document.getElementById("currentdate").innerHTML = d.toDateString();
        
    };
}
