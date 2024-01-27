$(window).on("load", function () {
  gsap.to("#loader", 1, { y: "-100%" });
  gsap.to("#loader", 1, { opacity: 0 });
  gsap.to("#loader", 0, { display: "none", delay: 1 });
  gsap.to("#header", 0, { display: "block", delay: 1 });
  gsap.to("#navigation-content", 0, { display: "none" });
  gsap.to("#navigation-content", 0, { display: "flex", delay: 1 });
});
$(function () {
  $(".color-panel").on("click", function (e) {
    e.preventDefault();
    $(".color-changer").toggleClass("color-changer-active");
  });
  $(".colors a").on("click", function (e) {
    e.preventDefault();
    var attr = $(this).attr("title");
    console.log(attr);
    $("head").append('<link rel="stylesheet" href="css/' + attr + '.css">');
  });
});
$(function () {
  $(".menubar").on("click", function () {
    gsap.to("#navigation-content", 0.6, { y: 0 });
  });
  $(".navigation-close").on("click", function () {
    gsap.to("#navigation-content", 0.6, { y: "-100%" });
  });
});

$(function () {
  var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 100;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName("txt-rotate");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-rotate");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0em solid #666 ; }";
    document.body.appendChild(css);
  };
});
$(function () {
  $("#about-link").on("click", function () {
    gsap.to("#navigation-content", 0, { display: "none", delay: 0.7 });
    gsap.to("#navigation-content", 0, { y: "-100%", delay: 0.7 });
    gsap.to("#header", 0, { display: "none" });
    gsap.to("#blog", 0, { display: "none" });
    gsap.to("#portfolio", 0, { display: "none" });
    gsap.to("#breaker", 0, { display: "block" });
    gsap.to("#breaker-two", 0, { display: "block", delay: 0.1 });
    gsap.to("#contact", 0, { display: "none" });
    gsap.to("#breaker", 0, { display: "none", delay: 2 });
    gsap.to("#breaker-two", 0, { display: "none", delay: 2 });
    gsap.to("#team", 0, { display: "none", delay: 2 });
    gsap.to("#services", 0, { display: "none", delay: 2 });
    gsap.to("#testimonials", 0, { display: "none", delay: 2 });
    gsap.to("#pricing", 0, { display: "none", delay: 2 });
    gsap.to("#faq", 0, { display: "none", delay: 2 });
    gsap.to("#features", 0, { display: "none", delay: 2 });
    gsap.to("#about", 0, { display: "block", delay: 0.7 });
    gsap.to("#navigation-content", 0, { display: "flex", delay: 2 });
  });
  $("#contact-link").on("click", function () {
    gsap.to("#navigation-content", 0, { display: "none", delay: 0.7 });
    gsap.to("#navigation-content", 0, { y: "-100%", delay: 0.7 });
    gsap.to("#header", 0, { display: "none" });
    gsap.to("#about", 0, { display: "none" });
    gsap.to("#blog", 0, { display: "none" });
    gsap.to("#portfolio", 0, { display: "none" });
    gsap.to("#breaker", 0, { display: "block" });
    gsap.to("#breaker-two", 0, { display: "block", delay: 0.1 });
    gsap.to("#breaker", 0, { display: "none", delay: 2 });
    gsap.to("#breaker-two", 0, { display: "none", delay: 2 });
    gsap.to("#team", 0, { display: "none", delay: 2 });
    gsap.to("#services", 0, { display: "none", delay: 2 });
    gsap.to("#testimonials", 0, { display: "none", delay: 2 });
    gsap.to("#pricing", 0, { display: "none", delay: 2 });
    gsap.to("#faq", 0, { display: "none", delay: 2 });
    gsap.to("#features", 0, { display: "none", delay: 2 });
    gsap.to("#contact", 0, { display: "block", delay: 0.7 });
    gsap.to("#navigation-content", 0, { display: "flex", delay: 2 });
  });
  $("#portfolio-link").on("click", function () {
    gsap.to("#navigation-content", 0, { display: "none", delay: 0.7 });
    gsap.to("#navigation-content", 0, { y: "-100%", delay: 0.7 });
    gsap.to("#header", 0, { display: "none" });
    gsap.to("#about", 0, { display: "none" });
    gsap.to("#contact", 0, { display: "none" });
    gsap.to("#blog", 0, { display: "none" });
    gsap.to("#breaker", 0, { display: "block" });
    gsap.to("#breaker-two", 0, { display: "block", delay: 0.1 });
    gsap.to("#breaker", 0, { display: "none", delay: 2 });
    gsap.to("#breaker-two", 0, { display: "none", delay: 2 });
    gsap.to("#team", 0, { display: "none", delay: 2 });
    gsap.to("#services", 0, { display: "none", delay: 2 });
    gsap.to("#testimonials", 0, { display: "none", delay: 2 });
    gsap.to("#pricing", 0, { display: "none", delay: 2 });
    gsap.to("#faq", 0, { display: "none", delay: 2 });
    gsap.to("#features", 0, { display: "none", delay: 2 });
    gsap.to("#portfolio", 0, { display: "block", delay: 0.7 });
    gsap.to("#navigation-content", 0, { display: "flex", delay: 2 });
  });
  $("#blog-link").on("click", function () {
    gsap.to("#navigation-content", 0, { display: "none", delay: 0.7 });
    gsap.to("#navigation-content", 0, { y: "-100%", delay: 0.7 });
    gsap.to("#header", 0, { display: "none" });
    gsap.to("#about", 0, { display: "none" });
    gsap.to("#portfolio", 0, { display: "none" });
    gsap.to("#contact", 0, { display: "none" });
    gsap.to("#breaker", 0, { display: "block" });
    gsap.to("#breaker-two", 0, { display: "block", delay: 0.1 });
    gsap.to("#breaker", 0, { display: "none", delay: 2 });
    gsap.to("#breaker-two", 0, { display: "none", delay: 2 });
    gsap.to("#team", 0, { display: "none", delay: 2 });
    gsap.to("#services", 0, { display: "none", delay: 2 });
    gsap.to("#testimonials", 0, { display: "none", delay: 2 });
    gsap.to("#pricing", 0, { display: "none", delay: 2 });
    gsap.to("#faq", 0, { display: "none", delay: 2 });
    gsap.to("#features", 0, { display: "none", delay: 2 });
    gsap.to("#blog", 0, { display: "block", delay: 0.7 });
    gsap.to("#navigation-content", 0, { display: "flex", delay: 2 });
  });
  $("#home-link").on("click", function () {
    gsap.to("#navigation-content", 0, { display: "none", delay: 0.7 });
    gsap.to("#navigation-content", 0, { y: "-100%", delay: 0.7 });
    gsap.to("#header", 0, { display: "none" });
    gsap.to("#about", 0, { display: "none" });
    gsap.to("#portfolio", 0, { display: "none" });
    gsap.to("#contact", 0, { display: "none" });
    gsap.to("#blog", 0, { display: "none" });
    gsap.to("#breaker", 0, { display: "block" });
    gsap.to("#breaker-two", 0, { display: "block", delay: 0.1 });
    gsap.to("#breaker", 0, { display: "none", delay: 2 });
    gsap.to("#breaker-two", 0, { display: "none", delay: 2 });
    gsap.to("#team", 0, { display: "none", delay: 2 });
    gsap.to("#services", 0, { display: "none", delay: 2 });
    gsap.to("#testimonials", 0, { display: "none", delay: 2 });
    gsap.to("#pricing", 0, { display: "none", delay: 2 });
    gsap.to("#faq", 0, { display: "none", delay: 2 });
    gsap.to("#features", 0, { display: "none", delay: 2 });
    gsap.to("#header", 0, { display: "block", delay: 0.7 });
    gsap.to("#navigation-content", 0, { display: "flex", delay: 2 });
  });
  $("#team-link").on("click", function () {
    gsap.to("#navigation-content", 0, { display: "none", delay: 0.7 });
    gsap.to("#navigation-content", 0, { y: "-100%", delay: 0.7 });
    gsap.to("#header", 0, { display: "none" });
    gsap.to("#about", 0, { display: "none" });
    gsap.to("#portfolio", 0, { display: "none" });
    gsap.to("#contact", 0, { display: "none" });
    gsap.to("#blog", 0, { display: "none" });
    gsap.to("#breaker", 0, { display: "block" });
    gsap.to("#breaker-two", 0, { display: "block", delay: 0.1 });
    gsap.to("#breaker", 0, { display: "none", delay: 2 });
    gsap.to("#breaker-two", 0, { display: "none", delay: 2 });
    gsap.to("#header", 0, { display: "none", delay: 2 });
    gsap.to("#services", 0, { display: "none", delay: 2 });
    gsap.to("#testimonials", 0, { display: "none", delay: 2 });
    gsap.to("#pricing", 0, { display: "none", delay: 2 });
    gsap.to("#faq", 0, { display: "none", delay: 2 });
    gsap.to("#features", 0, { display: "none", delay: 2 });
    gsap.to("#team", 0, { display: "block", delay: 0.7 });
    gsap.to("#navigation-content", 0, { display: "flex", delay: 2 });
  });
  $("#services-link").on("click", function () {
    gsap.to("#navigation-content", 0, { display: "none", delay: 0.7 });
    gsap.to("#navigation-content", 0, { y: "-100%", delay: 0.7 });
    gsap.to("#header", 0, { display: "none" });
    gsap.to("#about", 0, { display: "none" });
    gsap.to("#portfolio", 0, { display: "none" });
    gsap.to("#contact", 0, { display: "none" });
    gsap.to("#blog", 0, { display: "none" });
    gsap.to("#breaker", 0, { display: "block" });
    gsap.to("#breaker-two", 0, { display: "block", delay: 0.1 });
    gsap.to("#breaker", 0, { display: "none", delay: 2 });
    gsap.to("#breaker-two", 0, { display: "none", delay: 2 });
    gsap.to("#header", 0, { display: "none", delay: 2 });
    gsap.to("#team", 0, { display: "none", delay: 2 });
    gsap.to("#testimonials", 0, { display: "none", delay: 2 });
    gsap.to("#pricing", 0, { display: "none", delay: 2 });
    gsap.to("#faq", 0, { display: "none", delay: 2 });
    gsap.to("#features", 0, { display: "none", delay: 2 });
    gsap.to("#services", 0, { display: "block", delay: 0.7 });
    gsap.to("#navigation-content", 0, { display: "flex", delay: 2 });
  });
  $("#testimonials-link").on("click", function () {
    gsap.to("#navigation-content", 0, { display: "none", delay: 0.7 });
    gsap.to("#navigation-content", 0, { y: "-100%", delay: 0.7 });
    gsap.to("#header", 0, { display: "none" });
    gsap.to("#about", 0, { display: "none" });
    gsap.to("#portfolio", 0, { display: "none" });
    gsap.to("#contact", 0, { display: "none" });
    gsap.to("#blog", 0, { display: "none" });
    gsap.to("#breaker", 0, { display: "block" });
    gsap.to("#breaker-two", 0, { display: "block", delay: 0.1 });
    gsap.to("#breaker", 0, { display: "none", delay: 2 });
    gsap.to("#breaker-two", 0, { display: "none", delay: 2 });
    gsap.to("#header", 0, { display: "none", delay: 2 });
    gsap.to("#team", 0, { display: "none", delay: 2 });
    gsap.to("#services", 0, { display: "none", delay: 2 });
    gsap.to("#pricing", 0, { display: "none", delay: 2 });
    gsap.to("#faq", 0, { display: "none", delay: 2 });
    gsap.to("#features", 0, { display: "none", delay: 2 });
    gsap.to("#testimonials", 0, { display: "block", delay: 0.7 });
    gsap.to("#navigation-content", 0, { display: "flex", delay: 2 });
  });
  $("#pricing-link").on("click", function () {
    gsap.to("#navigation-content", 0, { display: "none", delay: 0.7 });
    gsap.to("#navigation-content", 0, { y: "-100%", delay: 0.7 });
    gsap.to("#header", 0, { display: "none" });
    gsap.to("#about", 0, { display: "none" });
    gsap.to("#portfolio", 0, { display: "none" });
    gsap.to("#contact", 0, { display: "none" });
    gsap.to("#blog", 0, { display: "none" });
    gsap.to("#breaker", 0, { display: "block" });
    gsap.to("#breaker-two", 0, { display: "block", delay: 0.1 });
    gsap.to("#breaker", 0, { display: "none", delay: 2 });
    gsap.to("#breaker-two", 0, { display: "none", delay: 2 });
    gsap.to("#header", 0, { display: "none", delay: 2 });
    gsap.to("#team", 0, { display: "none", delay: 2 });
    gsap.to("#services", 0, { display: "none", delay: 2 });
    gsap.to("#testimonials", 0, { display: "none", delay: 2 });
    gsap.to("#faq", 0, { display: "none", delay: 2 });
    gsap.to("#features", 0, { display: "none", delay: 2 });
    gsap.to("#pricing", 0, { display: "block", delay: 0.7 });
    gsap.to("#navigation-content", 0, { display: "flex", delay: 2 });
  });
  $("#faq-link").on("click", function () {
    gsap.to("#navigation-content", 0, { display: "none", delay: 0.7 });
    gsap.to("#navigation-content", 0, { y: "-100%", delay: 0.7 });
    gsap.to("#header", 0, { display: "none" });
    gsap.to("#blog", 0, { display: "none" });
    gsap.to("#portfolio", 0, { display: "none" });
    gsap.to("#breaker", 0, { display: "block" });
    gsap.to("#breaker-two", 0, { display: "block", delay: 0.1 });
    gsap.to("#contact", 0, { display: "none" });
    gsap.to("#breaker", 0, { display: "none", delay: 2 });
    gsap.to("#breaker-two", 0, { display: "none", delay: 2 });
    gsap.to("#team", 0, { display: "none", delay: 2 });
    gsap.to("#services", 0, { display: "none", delay: 2 });
    gsap.to("#testimonials", 0, { display: "none", delay: 2 });
    gsap.to("#pricing", 0, { display: "none", delay: 2 });
    gsap.to("#about", 0, { display: "none", delay: 2 });
    gsap.to("#features", 0, { display: "none", delay: 2 });
    gsap.to("#faq", 0, { display: "block", delay: 0.7 });
    gsap.to("#navigation-content", 0, { display: "flex", delay: 2 });
  });
  $("#features-link").on("click", function () {
    gsap.to("#navigation-content", 0, { display: "none", delay: 0.7 });
    gsap.to("#navigation-content", 0, { y: "-100%", delay: 0.7 });
    gsap.to("#header", 0, { display: "none" });
    gsap.to("#blog", 0, { display: "none" });
    gsap.to("#portfolio", 0, { display: "none" });
    gsap.to("#breaker", 0, { display: "block" });
    gsap.to("#breaker-two", 0, { display: "block", delay: 0.1 });
    gsap.to("#contact", 0, { display: "none" });
    gsap.to("#breaker", 0, { display: "none", delay: 2 });
    gsap.to("#breaker-two", 0, { display: "none", delay: 2 });
    gsap.to("#team", 0, { display: "none", delay: 2 });
    gsap.to("#services", 0, { display: "none", delay: 2 });
    gsap.to("#testimonials", 0, { display: "none", delay: 2 });
    gsap.to("#pricing", 0, { display: "none", delay: 2 });
    gsap.to("#about", 0, { display: "none", delay: 2 });
    gsap.to("#faq", 0, { display: "none", delay: 2 });
    gsap.to("#features", 0, { display: "block", delay: 0.7 });
    gsap.to("#navigation-content", 0, { display: "flex", delay: 2 });
  });
});
$(function () {
  var body = document.querySelector("body");
  var $cursor = $(".cursor");
  function cursormover(e) {
    gsap.to($cursor, {
      x: e.clientX,
      y: e.clientY,
      stagger: 0.002,
    });
  }
  function cursorhover(e) {
    gsap.to($cursor, {
      scale: 1.4,
      opacity: 1,
    });
  }
  function cursor(e) {
    gsap.to($cursor, {
      scale: 1,
      opacity: 0.6,
    });
  }
  $(window).on("mousemove", cursormover);
  $(".menubar").hover(cursorhover, cursor);
  $("a").hover(cursorhover, cursor);
  $(".navigation-close").hover(cursorhover, cursor);
});
var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
    
});

// back to top


/* Please ❤ this if you like it! */



(function($) { "use strict";

	//Switch dark/light
	
	/* $(".switch").on('click', function () {
		if ($("body").hasClass("light")) {
			$("body").removeClass("light");
			$(".switch").removeClass("switched");
		}
		else {
			$("body").addClass("light");
			$(".switch").addClass("switched");
		}
	}); */
		
	$(document).ready(function(){"use strict";
	
		//Scroll back to top
		
		var progressPath = document.querySelector('.progress-wrap path');
		var pathLength = progressPath.getTotalLength();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
		progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
		progressPath.style.strokeDashoffset = pathLength;
		progressPath.getBoundingClientRect();
		progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
		var updateProgress = function () {
			var scroll = $(window).scrollTop();
			var height = $(document).height() - $(window).height();
			var progress = pathLength - (scroll * pathLength / height);
			progressPath.style.strokeDashoffset = progress;
		}
		updateProgress();
		$(window).scroll(updateProgress);	
		var offset = 50;
		var duration = 550;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.progress-wrap').addClass('active-progress');
			} else {
				jQuery('.progress-wrap').removeClass('active-progress');
			}
		});				
		jQuery('.progress-wrap').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
		
		
	});
	
})(jQuery); 


/*about me mask*/
const mask = document.querySelector("#div-mask-back");
const tl = gsap.timeline();

tl.to(mask, {
  "--m1": "20%",
  delay: 2,
  duration: 0.5,
  ease: "back.out(2)"
}).to(mask, {
  "--m2": "30%",
  duration: 0.5,
  delay: 0.5,
  ease: "back.out(2)"
});

window.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;
  const x = Math.round((clientX / window.innerWidth) * 100);
  const y = Math.round((clientY / window.innerHeight) * 100);

  gsap.to(mask, {
    "--x": `${x}%`,
    "--y": `${y}%`,
    duration: 0.3,
    ease: "sine.out"
  });
});

/* CREDIT */
// background animation : https://codepen.io/alvarotrigo/pen/GRvYNax
// mask : https://codepen.io/kartikth40/pen/XWMOReZ
let elementsCC = document.querySelectorAll('.origin-center');
 
elementsCC.forEach(element => {
  let bbox = element.getBBox(),
    x = bbox.x,
    y = bbox.y,
    w = bbox.width,
    h = bbox.height;
                 
  //center center
  let resultCC = (x + (w / 2)) + 'px ' + (y + (h / 2)) + 'px';
  
  element.style.setProperty("transform-origin", resultCC)
}); // forEach


let elementsTL = document.querySelectorAll('.origin-left');
 
elementsTL.forEach(element => {
  let bbox = element.getBBox(),
    x = bbox.x,
    y = bbox.y,
    w = bbox.width,
    h = bbox.height;
                 
  //top left
  let resultTL = x + 'px ' + y + 'px';
  
  element.style.setProperty("transform-origin", resultTL)
}); // forEach