function loco() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  lerp:0.05
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

}

function revealToSpan() {
    document.querySelectorAll('.reveal')
        .forEach((e) => {
            // Create two spans
            let spanParent = document.createElement('span');
            let spanChild = document.createElement('span');

            // Parent and child both sets their respective classes.
            spanParent.classList.add('parent');
            spanChild.classList.add('child');

            // Span parent gets child and child gets elem details.
            spanChild.innerHTML = e.innerHTML;
            spanParent.appendChild(spanChild);

            // elem replaces its value with parent span.
            e.innerHTML = '';
            e.appendChild(spanParent);
        })
}
function settingValues() {
    gsap.set('#nav a', {
        y: '-100%',
        opacity: 0
    })
    gsap.set('#home span .child', {
        y: '100%'
    })
    gsap.set('#home #hero .row2 #downArrow', {
        opacity: 0
    })
    document.querySelectorAll('#hero .row2 #web path').forEach((e) => {
        e.style.strokeDasharray = e.getTotalLength() + 'px';
        e.style.strokeDashoffset = e.getTotalLength() + 'px';
    })
}
function loaderAnimation() {
    var tl = gsap.timeline()
    tl.from('#loader .child span', {
        x: 100,
        stagger: 0.2,
        duration: 1,
        ease: Power3.easeInOut
    })
        .to('#loader .parent .child', {
            y: "-100%",
            duration: 0.5,
            ease: Circ.easeInOut
        })
        .to('#loader', {
            height: '0vh',
            duration: 0.7,
            ease: Circ.easeInOut
        })
        .to('#sunred', {
            height: '100vh',
            top: 0,
            duration: 1,
            delay: -0.9,
            ease: Circ.easeInOut
        })
        .to('#sunred', {
            height: '0vh',
            top: 0,
            delay: -0.3,
            duration: 0.6,
            ease: Circ.easeInOut,
        })
        .to('#home .parent .child', {
            y: 0,
            stagger: 0.09,
            duration: 1.5,
            delay: -1,
            ease: Expo.easeInOut
        })
        .to('#nav a', {
            y: 0,
            opacity: 1,
            delay: -0.9,
            stagger: 0.05,
            ease: Expo.easeInOut
        })
        .to('#home #hero .row2 #downArrow', {
            opacity: 1,
            delay: -0.5,
            ease: Expo.easeInOut,
            onComplete() {
                animateWebSVG()
            }
        })
}
function animateWebSVG() {
    gsap.to('#hero .row2 #web path', {
        strokeDashoffset: 0,
        duration: 2,
        ease: "bounce.inOut",
        onComplete() {
            showKrillin()
        }
    });
}
function showKrillin() {
    gsap.to('#naruto', {
        opacity: 1,
        duration: 0.5,
        scale: 1,
        ease: 'bounce'
    })
}
function showAndHideSkills() {
    // Select all elements with the class 'box'
    const skills = document.querySelectorAll('#tornPaper .skills .skillsList .skill');
    const skill = document.querySelectorAll('#tornPaper .skills .skillsList .skill ul');

    // Loop through each box and add event listeners for mouseenter and mouseleave
    skills.forEach(box => {
        // Mouse enter event
        box.addEventListener('mouseenter', () => {
            gsap.to(skill, {
                duration: 0.5,
                opacity: 1,
                ease: 'ease'
            });
        });

        // Mouse leave event
        box.addEventListener('mouseleave', () => {
            gsap.to(skill, {
                duration: 0.5,
                opacity: 0,
                ease: 'ease'
            });
        });
    });
}
function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateTime, 1000);
updateTime();  // Initial call to set the time immediately
showAndHideSkills();
loco();
revealToSpan();
settingValues();
loaderAnimation();