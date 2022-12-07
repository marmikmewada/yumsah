// portfolio starts

// selecting elements of portfolio-left to display
const portfolioleftimg = document.querySelector(".portfolio-left>img");
const portfolioleftp = document.querySelector(".portfolio-left>p");
const portfoliolefth1 = document.querySelector(".portfolio-left>h1");
const portfolioleftbuttona = document.querySelector(".portfolio-left>button>a");

// selecting elements on the portfilio right to set event listeners to each
const portfoliorightatags = document.querySelectorAll(".portfolio-right>div>i");

// using for each method to add event listeners to portfoliorightatags
// portfoliorightatags for each starts below
portfoliorightatags.forEach((value, index) => {
  // portfoliorightatags index event listener starts
  portfoliorightatags[index].addEventListener("click", () => {
    // if index === 0 starts
    if (index === 0) {
      portfolioleftimg.removeAttribute("src");
      portfolioleftbuttona.removeAttribute("href");
      portfoliolefth1.textContent = "blanquita's Panaderia-bakery";
      portfolioleftp.textContent =
        "Local bakery business that wants to sell their mexican bread to grocery stores & individuals in East Side Chicago, Illinois.";
      portfolioleftbuttona.setAttribute(
        "href",
        "https://www.blanquitasbakery.com/"
      );
      portfolioleftimg.setAttribute("src", "blanquitasbakery.jpg");
    }
    // index === 0 ends

    // if index === 1 starts
    if (index === 1) {
      portfolioleftimg.removeAttribute("src");
      portfolioleftbuttona.removeAttribute("href");
      portfoliolefth1.textContent = "Luna's Enlightment-Work in progress";
      portfolioleftp.textContent =
        "We are building a website for a business that provides custom candles, tarot readings and guidance for a spiritual awakening.";
      portfolioleftbuttona.setAttribute(
        "href",
        "https://luna-candle.netlify.app/"
      );
      portfolioleftimg.setAttribute("src", "lunasenlightmentimg.jpg");
    }
    // if index === 1 ends

    // if index  === 2 starts
    if (index === 2) {
      portfolioleftimg.removeAttribute("src");
      portfolioleftbuttona.removeAttribute("href");
      portfoliolefth1.textContent = "Mind if we Chat-Podcast";
      portfolioleftp.textContent =
        "We created a website for a podcast regarding mental health from the East Side of Chicago, Illinois.";
      portfolioleftbuttona.setAttribute(
        "href",
        "https://www.mindifwechat.org/"
      );
      portfolioleftimg.setAttribute("src", "MIWC-min.jpg");
    }
    // if index === 2 ends

    // if index  === 3 starts
    if (index === 3) {
      portfolioleftimg.removeAttribute("src");
      portfolioleftbuttona.removeAttribute("href");
      portfoliolefth1.textContent = "Outrageous Dog Training-Pet Trainer";
      portfolioleftp.textContent =
        "We created this website for a skilled dog trainer based in Orange County, California.";
      portfolioleftbuttona.setAttribute(
        "href",
        "https://outrageousdogtraining.com/"
      );
      portfolioleftimg.setAttribute("src", "outrageousdogtraining-min.jpg");
    }
    // if index === 3 ends
    // if index  === 4 starts
    if (index === 4) {
      portfolioleftimg.removeAttribute("src");
      portfolioleftbuttona.removeAttribute("href");
      portfoliolefth1.textContent = "El Pollo Ranchero-Restaurant";
      portfolioleftp.textContent =
        "We designed the website for a mexican restaurant based in Whiting, Indiana.";
      portfolioleftbuttona.setAttribute(
        "href",
        "https://elpollorancherowhiting.com/"
      );
      portfolioleftimg.setAttribute("src", "polloranchero-min.jpg");
    }
    // if index === 4 ends

    // if index  === 5 starts
    if (index === 5) {
      portfolioleftimg.removeAttribute("src");
      portfolioleftbuttona.removeAttribute("href");
      portfoliolefth1.textContent = "Toci La Diosa-Work in progress";
      portfolioleftp.textContent =
        "We are building a website for a business based in Chicago, Illinois that helps promote small businesses in the community.";
      portfolioleftbuttona.setAttribute(
        "href",
        "https://toci-la-diosa.netlify.app/"
      );
      portfolioleftimg.setAttribute("src", "tociladiosaimg.jpg");
    }
    // if index === 5 ends
  });
  // portfoliotags index event listener ends
});
// portfolio for each ends

// portfolio ends

// frequently asked questions starts
const frequentlyaskedp = document.querySelectorAll(".querry>p");
const frequentlycontenth1 = document.querySelector(".answer-frequently>h1");
const frequentlycontentp = document.querySelector(".answer-frequently>p");


// frequently asked p starts
frequentlyaskedp.forEach((value, index) => {
  frequentlyaskedp[index].addEventListener("click", (e) => {
    if (index == 0) {
      frequentlycontenth1.textContent = "";
      frequentlycontentp.textContent = "";
      frequentlycontenth1.textContent = "General Refund Policy";
      frequentlycontentp.textContent =
        "Yumsah’s Website Design strives to provide the best work possible. It is possible for the designer and the client to have different opinions on a piece of work. Website design is a very tedious process; it can be an extremely long process as a designer. A deposit will be required before we start the work.Before submitting your deposit, make sure you check out our portfolio so you have an idea of the quality of our work. In the case that there is a disagreement on the work quality and the client requests a refund, the owner of Yumsah’s will decide if the work does not meet the quality of our service. If the work meets the quality we provide as seen in our portfolio, no refund will be issued as many hours have already been spent designing. The client will have to come to an agreement on how they want the website changed. Any purposeful excessive changes will be denied.";
    }

    if (index === 1) {
      frequentlycontenth1.innerHTML = "Is there a cancellation fee";
      frequentlycontentp.textContent =
        "We are based on a month to month service. You can cancel anytime you want with no cancellation fee. If you want to transfer your domain from our business to another, there is a $100 fee, as we pay for the domain included in your plan. If you do not plan on having a website or using the same domain with another website design business, no need to worry about any fees! Just let us know a week in advance before your service ends so we can cancel your monthly payment.";
    }
    if (index === 2) {
      frequentlycontenth1.textContent = "Can I pause my subscription";
      frequentlycontentp.textContent = "If you plan to be back, let us know the period you need to take time off. In this case, your website will be temporarily taken down during that period until you wish to continue. Your website will run until the end of the pay period.";
    }
    if (index === 3) {
      frequentlycontenth1.textContent = "What if my website is hacked or goes offline?";
      frequentlycontentp.textContent = "These things happen. According to Google, 1 out of 25 websites get hacked. We will rebuild your website with any plan. However if the content is inaccessible, we will require you to resend your content to proceed. Since it is a new upload, you can request a redesign if you wish. Since we are offering a free backup website instead of charging a fee, monthly payments will not be paused and will continue as scheduled.";
    }
    if (index === 4) {
      frequentlycontenth1.textContent = "When do payments start?";
      frequentlycontentp.textContent = "Your monthly payments start 6 weeks after the first month’s deposit is paid. The average time it takes us to build your website is 1-2 weeks. To encourage responsiveness, we include a free week if you are responsive to details about your business. If delays are caused from our side, we will discuss when your monthly payments begin.";
    }
    if (index === 5) {
      frequentlycontenth1.textContent = "What if I miss a payment?";
      frequentlycontentp.textContent = "When you sign up, the monthly payments will be taken care of automatically with recurring billing. In the event that you are unable to pay on time, you can contact us so we can determine if there is a grace period that may be of assistance for you or if you need to pause your plan.";
    }
    if (index === 6) {
      frequentlycontenth1.textContent = "How will payments be made?";
      frequentlycontentp.textContent = "Payments will be made through HoneyBook. This will allow for an effortless way to make monthly payments with your debit or credit card. Once you click on “Make this a recurring payment” there is no need to ever touch the app again until you decide to move on from our service. It takes less than 30 seconds to sign up and all we need is your email. Website design services are tax deductible, so make sure you pay with your business card to take advantage!";
    }
    if (index === 7) {
      frequentlycontenth1.textContent = "Do you write content for me?";
      frequentlycontentp.textContent = "We can help you with basic content writing such as fixing grammar errors, run on sentences, etc. You know your businesses’ services better than we do. We can send suggested topics to put on your website and you can send us what you want it to say.";
    }
    if (index === 8) {
      frequentlycontenth1.textContent = "What if I want to make changes to my website?";
      frequentlycontentp.textContent = "Website editing is included with any plan. It is best to leave it up to us because any accidental mistake can take down your website and we will not be liable if that is the case. If you have experience with Wordpress, you are welcome to do your own changes, just let us know!";
    }
    if (index === 9) {
      frequentlycontenth1.textContent = "If I don’t use my editing time, can I save it up?";
      frequentlycontentp.textContent = "The editing time resets weekly & biweekly. Any unused time does not rollover.";
    }
    if (index === 10) {
      frequentlycontenth1.textContent = "What if I need more editing time?";
      frequentlycontentp.textContent = "If you have used up all your editing time for the month and need more changes, you may request more time by emailing us. Let us know the task you want and we will send you an estimate.";
    }
    if (index === 11) {
      frequentlycontenth1.textContent = "What can I do with my editing time?";
      frequentlycontentp.textContent = "Emergency edits like changing your hours of operation or announcing a new product coming in. Changing colors, adding or removing paragraphs. Adding or removing items on sale Changing colors, adding or removing paragraphs. Adding a “Now Hiring, Apply Within” banner. Having promotions in your store such as special guests.";
    }
    if (index === 12) {
      frequentlycontenth1.textContent = "Are there ways to get free editing time or free website hosting?";
      frequentlycontentp.textContent = "If you refer us to a friend or business and they purchase a package, you will get free service for a set amount of time.";
    }
    if (index === 13) {
      frequentlycontenth1.textContent = "Do I own my website?";
      frequentlycontentp.textContent = "To be able to offer low cost website design, our business takes in the costs of hosting, domain, SSL and the countless hours spent on maintaining the websites. For this reason, clients do not own their website. However as long as payments are made, there is no difference between ownership and renting the website month to month. If you want to be the owner of the website, this means you will pay for your own hosting, maintain the server and edit your own website. If you’d like to own your website send us a message to discuss pricing.";
    }
    if (index === 14) {
      frequentlycontenth1.textContent = "How do I request website editing changes?";
      frequentlycontentp.textContent = "We will give you an email address you can send requests to. Please send an email with the subject line “BUSINESS NAME - Short description of edit”. Inside the email include pictures, sketches and all the information you need us to put on the website. If the task is over your limit, we will let you know. If you do not have editing time, we will send you an invoice and will do the job as soon as it is paid. You can alternatively also send us a text message the same way.";
    }
    
  });
  // frequently asked [index] event listenever ends
});
// frequently asked p for each ends

// frequently asked questions ends

// // e.preventDefault();


// main menu 
const menuicon = document.querySelector(".fa-bars");
const menucloseicon = document.querySelector(".fa-xmark");

const mobilemenu = document.querySelector(".mobile-menu");
console.log(mobilemenu);

menuicon.addEventListener("click", ()=>{
  mobilemenu.removeAttribute("id", "hidden");
  menuicon.setAttribute("id", "hidden");
  menucloseicon.removeAttribute("id", "hidden");
})
menucloseicon.addEventListener("click",()=>{
  mobilemenu.setAttribute("id", "hidden");
  menuicon.removeAttribute("id", "hidden");
  menucloseicon.setAttribute("id", "hidden");
} )

// main menu ends 
