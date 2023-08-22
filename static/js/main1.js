
(function ($) {
    "use strict";


    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
		//var x = document.forms["login100-form validate-form"]["week_no"].value;
		//var x = document.getElementById("week").value;
        if($(input).attr("type") == 'shop_id' || $(input).attr("type") == 'week_no') {
            if($(input).val().trim().match([a-zA-Z]))
			{
                return false;
            }
        }
        else
		{
            if($(input).val().trim() == ''||$(input).val().trim()<1)
			{
                return false;
            }
        }

    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }



})(jQuery);