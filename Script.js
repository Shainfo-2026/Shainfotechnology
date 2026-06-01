/* ================= POPUP ================= */

const popup = document.getElementById("popup");

const openPopup = document.getElementById("openPopup");

const closePopup = document.getElementById("closePopup");

openPopup.addEventListener("click", () => {
  popup.classList.add("active");
});

closePopup.addEventListener("click", () => {
  popup.classList.remove("active");
});

/* CLOSE WHEN CLICK OUTSIDE */

popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.classList.remove("active");
  }
});

/* ESC CLOSE */

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    popup.classList.remove("active");
  }
});



/* ================= FAQ ================= */

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {

  question.addEventListener("click", () => {

    const answer = question.nextElementSibling;

    const isOpen = answer.style.display === "block";

    /* CLOSE ALL */

    document.querySelectorAll(".faq-answer").forEach((item) => {
      item.style.display = "none";
    });

    /* OPEN CURRENT */

    if (!isOpen) {
      answer.style.display = "block";
    }

  });

});



/* ================= STATS COUNTER ================= */

const counters = document.querySelectorAll(".stat-box h2");

let started = false;

function startCounter() {

  if (started) return;

  const statsSection = document.querySelector(".stats-section");

  const sectionTop = statsSection.getBoundingClientRect().top;

  const screenHeight = window.innerHeight;

  if (sectionTop < screenHeight - 100) {

    counters.forEach((counter) => {

      const target = parseInt(counter.innerText);

      let count = 0;

      const increment = Math.ceil(target / 40);

      const updateCounter = () => {

        count += increment;

        if (count >= target) {
          counter.innerText = target + "+";
        } else {
          counter.innerText = count + "+";
          requestAnimationFrame(updateCounter);
        }

      };

      updateCounter();

    });

    started = true;

  }

}

window.addEventListener("scroll", startCounter);



/* ================= SCROLL ANIMATION ================= */

const observer = new IntersectionObserver(

  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }

    });

  },

  {
    threshold: 0.15,
  }

);

const hiddenElements = document.querySelectorAll(
  ".projectrun-section, .services-section, .website-section, .content-section, .best-section, .why-wrap, .industries-section, .stats-section, .faq-section"
);

hiddenElements.forEach((el) => {
  observer.observe(el);
});



/* ================= FORM SUBMIT ================= */

const forms = document.querySelectorAll("form");

forms.forEach((form) => {

  form.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Enquiry Submitted Successfully!");

    form.reset();

    popup.classList.remove("active");

  });

});



/* ================= INDUSTRY SLIDER PAUSE ================= */

const track = document.querySelector(".industry-track");

track.addEventListener("mouseenter", () => {
  track.style.animationPlayState = "paused";
});

track.addEventListener("mouseleave", () => {
  track.style.animationPlayState = "running";
});



/* ================= ACTIVE NAV HIGHLIGHT ================= */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach((section) => {

    const sectionTop = section.offsetTop;

    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }

  });

});



/* ================= SMOOTH FADE UP ================= */

const revealElements = document.querySelectorAll(
  ".best-card, .why-card, .industry-item, .stat-box"
);

const revealObserver = new IntersectionObserver(

  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.style.opacity = "1";

        entry.target.style.transform = "translateY(0)";

      }

    });

  },

  {
    threshold: 0.2,
  }

);

revealElements.forEach((el) => {

  el.style.opacity = "0";

  el.style.transform = "translateY(40px)";

  el.style.transition = "all .7s ease";

  revealObserver.observe(el);

});



/* ================= HERO BUTTON EFFECT ================= */

const buttons = document.querySelectorAll(".cta-btn, .submit-btn");

buttons.forEach((button) => {

  button.addEventListener("mouseenter", () => {

    button.style.transform = "translateY(-3px) scale(1.02)";

  });

  button.addEventListener("mouseleave", () => {

    button.style.transform = "translateY(0) scale(1)";

  });

});



/* ================= PAGE LOADER EFFECT ================= */

window.addEventListener("load", () => {

  document.body.style.opacity = "1";

});

document.body.style.opacity = "0";

document.body.style.transition = "opacity .5s ease";



/* ================= AUTO CLOSE FAQ ================= */

faqQuestions.forEach((question) => {

  question.addEventListener("click", () => {

    faqQuestions.forEach((q) => {

      if (q !== question) {

        q.nextElementSibling.style.display = "none";

      }

    });

  });

});



/* ================= PARALLAX HERO ================= */

window.addEventListener("scroll", () => {

  const hero = document.querySelector(".hero-section");

  let scrollPosition = window.pageYOffset;

  hero.style.backgroundPositionY = scrollPosition * 0.4 + "px";

});



/* ================= TYPEWRITER EFFECT ================= */

const heroTitle = document.querySelector(".hero-left h1");

const originalText = heroTitle.innerHTML;

heroTitle.innerHTML = "";

let i = 0;

function typeWriter() {

  if (i < originalText.length) {

    heroTitle.innerHTML += originalText.charAt(i);

    i++;

    setTimeout(typeWriter, 25);

  }

}

typeWriter();



/* ================= BUTTON RIPPLE ================= */

buttons.forEach((button) => {

  button.addEventListener("click", function (e) {

    let ripple = document.createElement("span");

    ripple.classList.add("ripple");

    this.appendChild(ripple);

    let x = e.clientX - e.target.offsetLeft;

    let y = e.clientY - e.target.offsetTop;

    ripple.style.left = `${x}px`;

    ripple.style.top = `${y}px`;

    setTimeout(() => {
      ripple.remove();
    }, 600);

  });

});


/* ================= HEADER MENU ================= */

const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("sfNav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("open");
  hamburger.classList.toggle("open");
});

/* CLOSE MENU ON LINK CLICK */

document.querySelectorAll(".nav-btn").forEach(link => {

  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });

});

/* GOOGLE ADS CONVERSION */

function gtag_report_conversion(url){

if(window.gtag){

window.gtag('event','conversion',{

send_to:'AW-17853848982/-CWeCM_gkN0bEJa7sMFC',

value:1.0,
currency:'INR',

event_callback:function(){

if(url){
window.location=url;
}

}

});

}

return false;

}