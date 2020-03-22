function getdata() {
    document.getElementById("btnsubmit").addEventListener("click", function(){ alert("Your Data Submited Successfully.."); });
}
function canceldata() {
    document.getElementById("btncancel").addEventListener("click", function () {
        document.getElementsByTagName("input").setAttribute("name"," ");
    });
}
