document.addEventListener("DOMContentLoaded", function(event) { 
  var paragraphs = document.querySelectorAll('.animate-from-left, .animate-from-right');
  paragraphs.forEach(function(paragraph) {
      paragraph.style.opacity = 1;
  });
});

/*EARLY LIFE*/
document.addEventListener("DOMContentLoaded", function() {
  const leftContainers = document.querySelectorAll('.left-container');
  const rightContainers = document.querySelectorAll('.right-container');
  let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  let animatedLeftContainers = new Set();
  let animatedRightContainers = new Set();

  function checkVisibility() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollDirection = scrollTop > lastScrollTop ? 'down' : 'up';

    leftContainers.forEach((container) => {
      if (scrollDirection === 'down' && !animatedLeftContainers.has(container) && isElementInViewport(container)) {
        container.classList.add('visible');
        animatedLeftContainers.add(container);
      }
    });

    rightContainers.forEach((container) => {
      if (scrollDirection === 'down' && !animatedRightContainers.has(container) && isElementInViewport(container)) {
        container.classList.add('visible');
        animatedRightContainers.add(container);
      }
    });

    lastScrollTop = scrollTop; // Update last scroll position
  }

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <= window.innerHeight
    );
  }

  // Listen for scroll events
  window.addEventListener('scroll', checkVisibility);

  // Initial check
  checkVisibility();
});



/*EDUCATION*/
$(".step").click( function() {
	$(this).addClass("active").prevAll().addClass("active");
	$(this).nextAll().removeClass("active");
});

$(".step01").click( function() {
	$("#line-progress").css("width", "3%");
	$(".discovery").addClass("active").siblings().removeClass("active");
});

$(".step02").click( function() {
	$("#line-progress").css("width", "25%");
	$(".strategy").addClass("active").siblings().removeClass("active");
});

$(".step03").click( function() {
	$("#line-progress").css("width", "50%");
	$(".creative").addClass("active").siblings().removeClass("active");
});

$(".step04").click( function() {
	$("#line-progress").css("width", "75%");
	$(".production").addClass("active").siblings().removeClass("active");
});

$(".step05").click( function() {
	$("#line-progress").css("width", "100%");
	$(".analysis").addClass("active").siblings().removeClass("active");
});


/*LOVELIFE*/ 
let animatedCards = {};

function animateOnScroll() {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    if (!animatedCards[index] && isElementInViewport(card)) {
      if (index % 3 === 0) {
        card.classList.add('animate-left');
      } else if (index % 3 === 1) {
        card.classList.add('animate-bottom');
      } else {
        card.classList.add('animate-right');
      }
      animatedCards[index] = true;
    }
  });
}

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

window.addEventListener('scroll', animateOnScroll);

animateOnScroll(); // Trigger initial animation

/*SCROLL TO TOP*/
document.addEventListener("DOMContentLoaded", function() {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", function() {
      if (window.pageYOffset > 0) {
          // Show the button when not at the top of the page
          scrollToTopBtn.style.display = "block";
      } else {
          // Hide the button when at the top of the page
          scrollToTopBtn.style.display = "none";
      }
  });

  scrollToTopBtn.addEventListener("click", function() {
      // Scroll to the top of the page smoothly
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
  });
});

/*TRAVELS*/
let items = document.querySelectorAll('.slider .item');
let active = 0; // Initialize active index to 0 (the first card)
let containerWidth = document.querySelector('.slider').offsetWidth;

function loadShow() {
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;

    // Calculate the max translation distance to ensure no overflow
    let maxTranslation = Math.min(containerWidth / 2, 120 * 2);

    // Show after
    let stt = 0;
    for (let i = active + 1; i < items.length; i++) {
        stt++;
        let translateValue = Math.min(120 * stt, maxTranslation);
        items[i].style.transform = `translateX(${translateValue}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
    stt = 0;
    for (let i = active - 1; i >= 0; i--) {
        stt++;
        let translateValue = Math.min(120 * stt, maxTranslation);
        items[i].style.transform = `translateX(${-translateValue}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}

loadShow();

let next = document.getElementById('next');
let prev = document.getElementById('prev');

next.onclick = function () {
    active = active + 1 < items.length ? active + 1 : active;
    loadShow();
}

prev.onclick = function () {
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
}

