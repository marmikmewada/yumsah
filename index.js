const frontcards = document.querySelectorAll(".front-card");
const backcards = document.querySelectorAll(".back-card");

const moreInfo = document.querySelectorAll(".info-div>a");

moreInfo.forEach((value,index)=>{
    moreInfo[index].addEventListener("click", function(e){
        e.preventDefault();
        e.stopImmediatePropagation();
        frontcards[index].classList.add("hidden-one");
        backcards[index].classList.remove("hidden-one");
        backcards[index].classList.add("hidden-two");
    })
})
