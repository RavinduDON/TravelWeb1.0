function getdata() {
    var name=document.getElementById("txtname").value;
   alert("Mr "+name+" Your data successfully save");
   document.getElementById("lblName").setAttribute("name",name);
}
function canceldata() {
    document.getElementById("btncancel").addEventListener("click", function () {
        document.getElementsByTagName("input").setAttribute("name"," ");
    });
}
