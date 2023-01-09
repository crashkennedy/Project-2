
let selected;
let buttons = document.querySelectorAll(".no1")
let rating = document.getElementById("value")
let feedback = document.getElementById("flow")
let submit = document.getElementById("submit")


function hard ({target}){
selected = target.value;
}

function three(){
  if(!selected){
    return alert("please rate us");
  }

  $("#value").html(selected)
  $("#flow").removeClass("hidden");
$("#blo").remove()
}
buttons.forEach((button) => {
  button.addEventListener("click", hard);

});
$("#submit").click(three);
 