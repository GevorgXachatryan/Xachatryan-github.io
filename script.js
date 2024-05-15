let toTop=document.getElementById("toTop");
toTop.computedStyleMap.display="none";
window.addEventListener("scroll",()=>{
    if(this.scrollY>360){
        toTop.style.display="block";
    }else{
        toTop.style.display="none";
    }
})
toTop.onclick=function(){
    window.scrollTo({
        top:0,
        behavior: "smooth"
    });
}




document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
   let obj = document.getElementById(id),
    current = start,
    range = end - start,
    increment = end > start ? 1 : -1,
    step = Math.abs(Math.floor(duration / range)),
    timer = setInterval(() => {
     current += increment;
     obj.textContent = current;
     if (current == end) {
      clearInterval(timer);
     }
    }, step);
  }
  counter("count1", 0, 5, 1100);
  counter("count2", 0, 43, 10000);
  counter("count3", 0, 32, 10000);
  counter("count4", 0, 2000, 8000);
 });

