function locomotive() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    lerp: 0.1,
  });

  // Back To Top Animation.
  var top = document.querySelector("#backToTop");
  top.addEventListener("click", () => {
    scroll.scrollTo(0);
  });
  // Go to Page 2.
  var bottom1 = document.querySelector("#goToBottom1");
  bottom1.addEventListener("click", () => {
    scroll.scrollTo(720);
  });
  
  var bottom2 = document.querySelector("#goToBottom2");
  bottom2.addEventListener("click", () => {
    scroll.scrollTo(1440);
  });
}
locomotive();
function loader() {
  let tl = gsap.timeline();
  tl.to("#loader .yellow", {
    bottom: "100vh",
    duration: 0.4,
    delay: 0.5,
    ease: "expo.out",
  });
  tl.to(
    "#loader video",
    {
      bottom: "100vh",
      duration: 0.5,
      delay: 0.5,
      ease: "expo.out",
    },
    "gotogether"
  );
  tl.to(
    ".loaderHeading h1, #loaderRightNav a, .loaderBottomNav a",
    {
      color: "black",
      duration: 0.5,
      delay: 0.5,
    },
    "gotogether"
  );
  tl.to(
    "#loaderRightNav svg g, .loaderBottomNav svg polyline",
    {
      stroke: "black",
      duration: 0.5,
      delay: 0.5,
    },
    "gotogether"
  );
  tl.to(
    "#loader nav svg path",
    {
      fill: "black",
      duration: 0.5,
      delay: 0.5,
    },
    "gotogether"
  );
  tl.to(".loaderHeading", {
    opacity: 1,
    duration: 0.2,
    ease: "expo.out",
  });
  tl.to("#loader", {
    opacity: 0,
  });
  tl.to("#loader", {
    display: "none",
  });
}
loader();

function rotate1() {
  const svg = document.getElementById("rotation");
  const nav = document.querySelectorAll(".links");
  let rotated = false;

  svg.addEventListener("click", function () {
    if (rotated) {
      svg.style.transform = "rotate(0deg)";
      nav.forEach((e) => {
        e.style.transform = "translateX(0px)";
      });
    } else {
      svg.style.transform = "rotate(135deg)";
      nav.forEach((e) => {
        e.style.transform = "translateX(250px)";
      });
    }
    rotated = !rotated;
  });
}
function rotate2() {
  const svg = document.getElementById("rotation");
  const mobileRightNav = document.querySelector("#mobileRightNav");
  let rotated = false;

  svg.addEventListener("click", function () {
    if (rotated) {
      svg.style.transform = "rotate(0deg)";
      mobileRightNav.style.transform = "translateX(250px)";
    } else {
      svg.style.transform = "rotate(-135deg)";
        mobileRightNav.style.transform = "translateX(0px)";
    }
    rotated = !rotated;
  });
}
function myFunction() {
  var width = window.innerWidth;
  if (width > 1025) {
      rotate1();
  } 
  else {
      rotate2();
  }
}
// Call myFunction on page load and whenever the window is resized
window.onload = myFunction;
window.onresize = myFunction;

function bgimage() {
  var mainHeadings = document.querySelectorAll(".mainHeading");
  var page2 = document.querySelector("#page2");
  mainHeadings.forEach((e) => {
    e.addEventListener("mouseenter", () => {
      var bgimg = e.getAttribute("data-img");
      page2.style.backgroundImage = `url(${bgimg})`;
    });
  });
}
bgimage();