// Add smooth scrolling to navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  
  
  
  $(document).ready(function() {
        // jQuery fadeIn animation
        $(".content").hide().fadeIn(1000);
  
        // Trigger GSAP animation when button is clicked
        $("#animateButton").click(function() {
          gsap.from(".content", { duration: 1, y: -100, opacity: 0, ease: "power2.out" });
        });
      });
  
  