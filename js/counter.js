const counters = document.querySelectorAll(".counter");

function animateCounter(counter) {
  let target = +counter.getAttribute("data-target");
  let duration = 1500; // 2 seconds
  let start = 0;
  let stepTime = Math.abs(Math.floor(duration / target));

  // ✅ must exist in HTML
  let numberEl = counter.querySelector(".count-num");

  let timer = setInterval(() => {
    start += 1;
    numberEl.innerText = start;
    if (start >= target) {
      clearInterval(timer);
    }
  }, stepTime);
}

// Intersection Observer
const counterObserver  = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver .unobserve(entry.target); // run once
      }
    });
  },
  { threshold: 0.6 }
);

counters.forEach((counter) => counterObserver .observe(counter));
