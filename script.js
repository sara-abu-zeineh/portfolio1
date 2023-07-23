const hiddenBarIcon = document.getElementById('hidden-bar');
const dropDownMenu = document.getElementById('drop-down');
console.log(hiddenBarIcon)

hiddenBarIcon.onclick = function(){
    dropDownMenu.classList.toggle("open");
    
}
