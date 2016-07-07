$( document ).ready(function() {
	$("#hiheyhello").typed({
        strings: ["Hi", "Hey","Hello","Hallo","Salâm","Demat","Ola","Buenos dias","Kalimera","Bonjour","Guten Tag","добър ден","Buongiorno","Bondjoû"],
        typeSpeed: 75,
            // time before typing starts
        startDelay: 0,
            // backspacing speed
        backSpeed: 10,
            // time before backspacing
        backDelay: 1000,
            // loop
        loop: true,
        showCursor: true,
      });

	// Changing the defaults
	window.sr = ScrollReveal();

	sr.reveal('.RevealDiv', { duration: 700,  });
	sr.reveal('.RevealListe', { delay: 300, duration: 700,  rotate: {x: 90}});
	sr.reveal('.RevealImages', {origin : 'right', delay: 300, duration: 700,  rotate: {x: 90}});
	sr.reveal('.RevealLeft', {origin :'left', delay: 300, duration: 900,  });
	sr.reveal('.RevealRight', {origin : 'right', delay: 300, duration: 900,  });

  });
