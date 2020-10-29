const englishText = document.querySelectorAll('.en');
const russionText = document.querySelectorAll('.ru');
const engMode = document.querySelector(".lang-eng");
const ruMode = document.querySelector(".lang-ru");



document.querySelector("#mode").addEventListener('change', async function() {
    if(this.checked) {
      engMode.classList.remove("active");
      ruMode.classList.add("active");
      console.log(englishText)
      for (let text of englishText){
          text.style.display = "none";
        }
      for (let text of russionText){
            text.style.display = "inline-block";
          }
    } else {
    ruMode.classList.remove("active");
    engMode.classList.add("active");
    for (let text of englishText){
        text.style.display = "inline-block";
      }
    for (let text of russionText){
      text.style.display = "none";
      }
    }
  });

//   $(document).ready(function(){
//     $.fn.animate_Text = function() {
//      var string = this.text();
//      return this.each(function(){
//       var $this = $(this);
//       $this.html(string.replace(/./g, '<span class="new">$&</span>'));
//       $this.find('span.new').each(function(i, el){
//        setTimeout(function(){ $(el).addClass('div_opacity'); }, 20 * i);
//       });
//      });
//     };
//     // $(".ru").show();
//     $(".ru").animate_Text();
//    });
