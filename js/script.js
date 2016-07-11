$( document ).ready(function() {
	$("#hiheyhello").typed({
        strings: ["Hi", "Hey","Hello","Bonjour","Hallo","Salâm","Demat","Ola","Buenos dias","Kalimera","Guten Tag","добър ден","Buongiorno","Bondjoû"],
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

    $("#demosMenu").change(function(){
      window.location.href = $(this).find("option:selected").attr("id") + '.html';
    });

       $('#fullpage').fullpage({
                'verticalCentered': false,
                'css3': true,
                'navigation': true,
                'navigationPosition': 'right',

                'afterLoad': function(anchorLink, index){
                    if(index == 2){
                        $('#presentation').addClass('active');
                    }
                    else if(index == 4){
                        $('#idcomp1, #idcomp2, #idcomp3, #idcomp4, #idcomp5, #idcomp6, #idcomp7, #idcomp8, #idcomp9, #idcomp10, #idcomp11, #idcomp12, #idcomp0-1, #idcomp6-1').addClass('apparition');
                    }
                    else{

                    }
                },

                'onLeave': function(index, nextIndex, direction){
                    if (index == 3 && direction == 'down'){
                        $('.section').eq(index -1).removeClass('moveDown').addClass('moveUp');
                    }
                    else if(index == 3 && direction == 'up'){
                        $('.section').eq(index -1).removeClass('moveUp').addClass('moveDown');
                    }

                    $('#staticImg').toggleClass('active', (index == 2 && direction == 'down' ) || (index == 4 && direction == 'up'));
                    $('#staticImg').toggleClass('moveDown', nextIndex == 4);
                    $('#staticImg').toggleClass('moveUp', index == 4 && direction == 'up');
                }
            });



  });
