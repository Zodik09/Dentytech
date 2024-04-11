function locomotive() {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    lerp: 0.05,
  });
}
locomotive();
function loader() {
  var tl = gsap.timeline();

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
    ".whiteHeading h1",
    {
      color: "black",
      duration: 0.5,
      delay: 0.5
    },
    "gotogether"
  );
  tl.to(".whiteHeading", {
    opacity: 1,
    duration: 0.2,
    ease: "expo.out",
  });
  tl.to("#loader",{
    opacity: 0
  })
  tl.to("#loader",{
    display: "none"
  })
}
loader();
