const header = document.querySelector("nav")
const fancy = document.querySelector(".index-more")


var obs = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    // Each entry describes an intersection change for one observed
    // target element:
    //   entry.boundingClientRect
    if (entry.intersectionRatio > .8) {
      header.style.color = "black"
    } else {
      header.style.color = "white"
    }
    console.log(entry.intersectionRatio)
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
  });
}, { threshold: [0, 0.1, .2, .3, 0.4, .5, 0.6, .7, .8, .9, 1], root: header})

obs.observe(fancy)
