$(function(){

	let question = 1;

	//кнопка далее
	$(".kalk6 .next").on('click',  function(){

        $(".kalk6 .white .question"+question).css('display','none');
        question = question + 1;
        $(".kalk6 .white .question"+question).css('display','block');

    }); //end on

	//кнопка назад
    $(".kalk6 .previous").on('click',  function(){

        $(".kalk6 .white .question"+question).css('display','none');
        question = question - 1;
        $(".kalk6 .white .question"+question).css('display','block');

    }); //end on

    //выбор ответа пользователем - записываем ответы в скрытые инпуты
    $(".kalk6 .col").on('click',  function(){

    	let job = $(this).children(".job").html();

        $(".kalk6 .white .question7 .q_"+question).val(job);

        $(".kalk6 .white .question"+question).css('display','none');
        question = question + 1;
        $(".kalk6 .white .question"+question).css('display','block');

    }); //end on

    //кнопка узнать стоимость
    $(".kalk6 .sent").on('click',  function(){

    	let name = $(".kalk6 .white .question7 input[name=name]").val();
    	let phonenumber = $(".kalk6 .white .question7 input[name=phonenumber]").val();

    	if ((name.length<1)||(phonenumber.length<1)){
    		event.preventDefault();
    		if((name.length<1)&&(phonenumber.length<1)){
    			$(".kalk6 .white .question7 input[name=name]").css('background-color','#FDE0DD');
    			$(".kalk6 .white .question7 input[name=phonenumber]").css('background-color','#FDE0DD');
    		}else if(name.length<1){
    			$(".kalk6 .white .question7 input[name=name]").css('background-color','#FDE0DD');
    		}else if(phonenumber.length<1){
    			$(".kalk6 .white .question7 input[name=phonenumber]").css('background-color','#FDE0DD');
    		}
    	}else{

    		alert('Спасибо за ваш интерес, мы вам перезвоним.');

    	}

    	
    }); //end on

   

});//end ready
