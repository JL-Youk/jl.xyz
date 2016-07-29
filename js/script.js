$( document ).ready(function() {
	$("#hiheyhello").typed({
        strings: ["Hi", "Hey","Hello","Salut","Bonjour","Hallo","Salâm","Demat","Ola","Buenos dias","Kalimera","Guten Tag","добър ден","Tagazok","Buongiorno","Bondjoû","Herzlich willkommen","Welcome","Akwaba","欢迎你来","Bienvenue","Awaa waa atuu","Selamat datang","Yôkoso","Тавтай морилогтун","Witaj"," Bem-vindo","Välkommen","Chào mừng"],
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
                    if(index == 1){
                        remove_class();
                    }
                    else if(index == 2){
                        remove_class();
                        $('#presentation').addClass('active');
                        $('#monavatar').addClass('active');
                    }
                    else if(index == 3){
                        remove_class();
                    }
                    else if(index == 4){
                        remove_class();
                        $('#idcomp1, #idcomp2, #idcomp3, #idcomp4, #idcomp5, #idcomp6, #idcomp7, #idcomp8, #idcomp9, #idcomp10').addClass('apparition');
                        $('#bar_remp_1').css({'width':'100%'}).text('100%');
                        $('#bar_remp_2').css({'width':'99%'}).text('99%');;
                        $('#bar_remp_3').css({'width':'90%'}).text('90%');;
                        $('#bar_remp_4').css({'width':'90%'}).text('90%');;
                        $('#bar_remp_5').css({'width':'80%'}).text('80%');;
                        $('#bar_remp_6').css({'width':'90%'}).text('90%');;
                        $('#bar_remp_7').css({'width':'30%'}).text('30%');;
                        $('#bar_remp_8').css({'width':'80%'}).text('80%');;
                        $('#bar_remp_9').css({'width':'40%'}).text('40%');;
                        $('#bar_remp_10').css({'width':'30%'}).text('30%');;
                    }
                    else if(index == 5){
                        remove_class();
                        $('#contactform_contact, #social1, #social2, #social3, #social4').addClass('apparitionsocial');
                    }
                    else{

                    }
                    function remove_class(){
                        $('#presentation,#monavatar').removeClass('active');
                        $('#idcomp1, #idcomp2, #idcomp3, #idcomp4, #idcomp5, #idcomp6, #idcomp7, #idcomp8, #idcomp9, #idcomp10, #idcomp11, #idcomp12, #idcomp0-1, #idcomp6-1').removeClass('apparition');
                        $('#contactform_contact, #social1, #social2, #social3, #social4').removeClass('apparitionsocial')
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
