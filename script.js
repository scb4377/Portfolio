const title = document.querySelector(".title");
const translate = document.querySelector(".translate");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const navLinks = document.querySelectorAll(".links");
const hamLines = document.querySelectorAll(".line");
const projects = document.querySelectorAll(".projectContainer");
const projectPage = document.querySelector("#projects");

const demoBtns = document.querySelectorAll(".demo");
const sourceBtns = document.querySelectorAll(".source");

const github = document.querySelectorAll(".fa-github");
const linkedIn = document.querySelectorAll(".fa-linkedin");
const contactForm = document.querySelector(".contact-form");
const vh = window.innerHeight * 0.01;
const cta = document.querySelector(".contact-me");
const musicVideo = document.querySelector(".musicVideo");
// const mVid = document.querySelector(".mVid");
const height = window.innerHeight;
const width = window.innerWidth;

const panel = document.querySelector(".panel");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");

const secondSection = document.querySelector(".second-section");

const projectLinks = document.querySelectorAll(".project-link");
const homeLinks = document.querySelectorAll(".home-link");

// const about = document.querySelector(".about-wrapper");

// Set boundries of music visualizer video
// var bounding = musicVideo.getBoundingClientRect();

//variable for window height for mobile including toolbar
document.documentElement.style.setProperty("--vh", `${vh}px`);

let headerHeight = header.offsetHeight;

console.log(secondSection.getBoundingClientRect())

const clickOffMenu = (e) => {
  if (menu.classList.contains("active"))
  {
    menu.classList.toggle("active");
  }
  else {
    console.log(e.target.classList)
  }

  NavLinkAnim();

  RotateHamburger();
}

document.querySelectorAll(".section").forEach(section => section.addEventListener("click", clickOffMenu))

const RotateHamburger = () => {
  //hamburger animation
  hamLines.forEach(() => {
    if (menu.classList.contains("active")) {
      hamLines[0].style.opacity = "0";
      hamLines[1].style.transform = "rotate(405deg)";
      hamLines[2].style.transform =
        "rotate(-405deg) translateY(-4px) translateX(4px)";
    } else {
      hamLines[0].style.opacity = "1";
      hamLines[1].style.transform = "";
      hamLines[2].style.transform = "";
    }
  });
}

const NavLinkAnim = () => {
  //create animation ease in of links
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.5
      }s`;
    }
  });
}


// for mobile navigation
hamburger.addEventListener("click", () => {
  //toggle active for hamburger animation
  menu.classList.toggle("active");

  NavLinkAnim();

  RotateHamburger();
});

// function for demo buttons
const demoFunc = (e, clName) => {
  let url;

  switch (clName) {
    case "bug-demo":
      url = "https://project-manager-bug-tracker.herokuapp.com/";
      break;
    case "snowboard-demo":
      url = "https://snowboards-sk.herokuapp.com/";
      break;
    case "crypto-tracker-demo":
      url = "https://sblevins-dev.github.io/CryptoTracker/";
      break;
    case "pb-demo":
      url = "https://sblevins-dev.github.io/PowerballApp/";
      break;
  }

  return url;
};

demoBtns.forEach((demo) => {
  let clName = demo.className.split(" ")[1];
  let url;

  demo.addEventListener("click", (e) => {
    url = demoFunc(e, clName)

    window.open(url, "_blank");
  });
});

// function for source buttons
let url;

const sourceFunc = (e, clName) => {
  let url;

  switch (clName) {
    case "bug-source":
      url = "https://github.com/sblevins-dev/bugTracker";
      break;
    case "snowboard-source":
      url = "https://github.com/sblevins-dev/snowboard-app";
      break;
    case "crypto-tracker-source":
      url = "https://github.com/sblevins-dev/CryptoTracker";
      break;
    case "CEIS-170":
      url = "https://github.com/sblevins-dev/CEIS-170";
      break;
    case "CEIS-209":
      url = "https://github.com/sblevins-dev/CEIS-209";
      break;
    case "CEIS-295":
      url = "https://github.com/sblevins-dev/CEIS-295";
      break;
    case "pb-source":
      url = "https://github.com/sblevins-dev/PowerballApp";
      break;
    case "bank-source":
      url = "https://github.com/sblevins-dev/BankingSystem";
      break;
    default:
      url = "https://github.com/sblevins-dev/43";
      console.log(clName);
      break;
  }

  return url;
};

sourceBtns.forEach((source) => {
  let clName = source.className.split(" ")[1];

  let url;

  source.addEventListener("click", (e) => {
    url = sourceFunc(e, clName);

    window.open(url, "_blank");
  });
});

//github link
github.forEach((git) =>
  git.addEventListener("click", () => {
    window.open("https://github.com/sblevins-dev", "_blank");
  })
);

//linkedin link
linkedIn.forEach((link) =>
  link.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/sblevins-dev/", "_blank");
  })
);

//Add submitform listener
window.addEventListener("submit", submitForm);

// Verify form
function formValidation(box, index) {
  let classes = (classes) => document.getElementsByClassName(classes);
  let errMsg = classes("error");
  let testBool = false;

  if (box == "") {
    errMsg[index].textContent = "* Sorry, this cannot be left blank";
  } else {
    errMsg[index].textContent = "";
    testBool = true;
  }
  return testBool;
}

function verifyEmail(email, index) {
  let verifyEmail = /^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i;
  let emailErrMsg = document.querySelector(".verify-email");

  if (!verifyEmail.test(email) || email == "") {
    emailErrMsg.textContent = "* Sorry, please enter a valid email";
    return false;
  } else {
    emailErrMsg.textContent = "";
    return true;
  }
}

//Submit form
function submitForm(e) {
  e.preventDefault();

  //Grab form values
  let fname = document.querySelector("#fname").value;
  let lname = document.querySelector("#lname").value;
  let email = document.querySelector("#email").value;
  let message = document.querySelector("#message").value;

  let check1 = formValidation(fname, 0);
  let check2 = formValidation(lname, 1);
  let check3 = verifyEmail(email, 2);
  let check4 = formValidation(message, 3);

  function check() {
    if (check1 && check2 && check3 && check4) {
      return true;
    } else {
      return false;
    }
  }

  //Validate inputs
  if (check()) {
    // create object to pass emailJS
    let messageObject = {
      name: fname + " " + lname,
      email: email,
      message: message,
    };

    //send email if verified
    sendEmail(messageObject);
    document.querySelector(".error").textContent = "";
  }
}

function sendEmail(templateParams) {
  let contact = document.querySelector(".contact-container");
  let successMess = document.querySelector(".success-wrapper");
  let errorMess = document.querySelector(".error-wrapper");

  //emailJS
  emailjs.send("service_kxar6ow", "template_m2vhmlq", templateParams).then(
    function (response) {
      contact.style.visibility = "hidden";
      successMess.style.visibility = "visible";
      //console.log("SUCCESS!", response.status, response.text);

      //Clear form on submit
      contactForm.reset();
    },
    function (error) {
      contact.style.visibility = "hidden";
      errorMess.style.visibility = "visible";
      //console.log("FAILED...", error);
    }
  );
}

let page = 0;

const panelArr = document.querySelectorAll(".panel-page");

function changePage(e) {
  panelArr[page].style.visibility = "hidden"
  panelArr[page].style.display = "none"
  console.log(page)

  if (e.target.className == "left-btn") {
    page--;
  }
  else {
    page++;
  }

  if (page >= panelArr.length) page = 0;
  else if (page < 0) page = panelArr.length - 1;

  console.log(page);

  panelArr[page].style.visibility = "visible"
  panelArr[page].style.display = "flex";
}



(function loadSideScroller() {
  leftBtn.addEventListener("click", changePage);
  rightBtn.addEventListener("click", changePage);
  projectLinks.forEach(link => link.addEventListener("click", goToProjects));

  homeLinks.forEach(link => link.addEventListener("click", goToHome));
})()

function goToProjects() {
  panelArr[page].style.visibility = "hidden";
  panelArr[page].style.display = "none";

  page = 1;

  panelArr[1].style.visibility = "visible";
  panelArr[1].style.display = "flex";
}

function goToHome() {
  panelArr[page].style.visibility = "hidden";
  panelArr[page].style.display = "none";

  page = 0;

  panelArr[page].style.visibility = "visible";
  panelArr[page].style.display = "flex";
}









