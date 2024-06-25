function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

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