const textareaEl = document.getElementById("textarea");

const totalCounterEl = document.getElementById("total-counter")

const remaningCounterEl = document.getElementById("remaning-counter");

textareaEl.addEventListener("keyup", () => {
    updateCounter()
});

updateCounter();

function updateCounter(){
   
    totalCounterEl.innerText = textareaEl.value.length;
   
   remaningCounterEl.innerText = textareaEl.getAttribute('maxlengh') - textareaEl.value.length; 
}
