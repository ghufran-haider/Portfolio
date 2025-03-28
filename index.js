$(".bi-github").on("click",function () {
  window.open("https://github.com/ghufran-haider") ;
});
$(".bi-instagram").on("click",function () {
    window.open("https://www.instagram.com/ghufran.haider_naqvi/?next=https%3A%2F%2Fwww.instagram.com%2Fdirect%2Ft%2F102970187769291%2F%3F__coig_login%3D1");
})
$(".bi-twitter-x").on("click",function () {
    window.open("https://x.com/ghufranir?t=NbNt6cSQcl0aKSigSytAfg&s=08");
})
$("#mailtome").on("click",function(event) {
  event.preventDefault();
  let yourName = $("#name").val();  
  let message = $("#Message").val();
  let budget = $("#budget option:selected").val(); 
  let str = `mailto:hghufran30@gmail.com?subject=New Inquiry from ${encodeURIComponent(yourName)}&body=${encodeURIComponent("Message:\n" + message + "\n\nBudget: " + budget + "\n\nBest Regards,\n" + yourName)}`;
  window.open(str,"_blank");

  $("#name").val("");  
  $("#Message").val("")
  $("#budget option:selected").val("");
})