// Arrow up and down script
// function myArrow() {
//   var x = document.getElementById("arrow");
//   if (x.style.transform === "rotate(-180deg)") {
//     x.style.transform = "rotate(0deg)";
//   } else {
//     x.style.transform = "rotate(-180deg)";
//   }
// }

var expanded = false;

function showCheckboxes() {
    var checkboxes = document.getElementById("checkboxes");
    if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
    } else {
        checkboxes.style.display = "none";
        expanded = false;
    }
}


AOS.init();
