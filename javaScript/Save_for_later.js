
//I try many possible way to show what I have checked and show their name on the web, but it didn't work.
//So I copy from some youtube and then change a little bit, now it work.

//$("#AfadorChecked").prop('checked',true)
//$('#AfadorChecked').attr('checked', true)
//$('#AfadorChecked').is(':checked');
//$('#AfadorChecked').each(function(){ this.checked = true; });
let checkVar = 1;


function checkedAll(){
checkVar ++ ;

if (checkVar >= 2){
    checkVar = 0;
}
sessionStorage.setItem("X",JSON.stringify(checkVar));

$(document).ready(function () {
    let x = sessionStorage.getItem("X");
    if (x >= 2){
        x = 0;
    }
if (x == 0) {
$('input:checkbox').prop('checked',true);

alert(`I don't know how to link this checked all button to the text display.
Please double click for each individual box for let text display work.`)

} else {

    $('input:checkbox').prop('checked',false);    
    
}


});

}


$(document).ready(function () {

    $('input[name="DogName"]').click(function () {
        getSelectedCheckBoxes('DogName');
    });

    $('input[name="DogSat"]').click(function () {
        getSelectedCheckBoxes1('DogSat');
    });

    $('input[name="DogH"]').click(function () {
        getSelectedCheckBoxes2('DogH');
    });

    $('input[name="DogW"]').click(function () {
        getSelectedCheckBoxes3('DogW');
    });

    $('input[name="DogLS"]').click(function () {
        getSelectedCheckBoxes4('DogLS');
    });

    var getSelectedCheckBoxes = function (groupName) {
        var result = $('input[name="' + groupName + '"]:checked');
        if (result.length > 0) {
            var resultString = result.length + " checkboxe(s) checked<br/>";
            result.each(function () {
                resultString += $(this).val() + "<br/>";
            });
            $('#div' + groupName).html(resultString);
        } else {
            $('#div' + groupName).html("No checkbox checked");
        }
    };

    var getSelectedCheckBoxes1 = function (groupName) {
        var result = $('input[name="' + groupName + '"]:checked');
        if (result.length > 0) {
            var resultString = result.length + " checkboxe(s) checked<br/>";
            result.each(function () {
                resultString += $(this).val() + "<br/>";
            });
            $('#divSub' + groupName).html(resultString);
        } else {
            $('#divSub' + groupName).html("No checkbox checked");
        }
    };

    var getSelectedCheckBoxes2 = function (groupName) {
        var result = $('input[name="' + groupName + '"]:checked');
        if (result.length > 0) {
            var resultString = result.length + " checkboxe(s) checked<br/>";
            result.each(function () {
                resultString += $(this).val() + "<br/>";
            });
            $('#divSub' + groupName).html(resultString);
        } else {
            $('#divSub' + groupName).html("No checkbox checked");
        }

        
    };

    var getSelectedCheckBoxes3 = function (groupName) {
        var result = $('input[name="' + groupName + '"]:checked');
        if (result.length > 0) {
            var resultString = result.length + " checkboxe(s) checked<br/>";
            result.each(function () {
                resultString += $(this).val() + "<br/>";
            });
            $('#divSub' + groupName).html(resultString);
        } else {
            $('#divSub' + groupName).html("No checkbox checked");
        }

        
    };

    var getSelectedCheckBoxes4 = function (groupName) {
        var result = $('input[name="' + groupName + '"]:checked');
        if (result.length > 0) {
            var resultString = result.length + " checkboxe(s) checked<br/>";
            result.each(function () {
                resultString += $(this).val() + "<br/>";
            });
            $('#divSub' + groupName).html(resultString);
        } else {
            $('#divSub' + groupName).html("No checkbox checked");
        }  
    };


});
    





    