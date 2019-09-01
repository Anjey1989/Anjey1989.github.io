let uniqueID=0;

let user = {
    numberID:"0",
    name:" ",
    e_mail:" ",
    specialOffer:" ",
    offerCycle:" "
};

let specialDealCheckbox=false;

$(function() {
    
    $(".buttonForForm").on('click', function () {
        $(".inputForm").toggleClass('d-none d-block');
    });

    $("#specialDealCheckbox").on('click', function () {
        $(".dropdown").toggleClass('d-none d-block');
        if ($(".dropdown").hasClass("d-block")) {
            specialDealCheckbox=true;
        }
        else {
            specialDealCheckbox=false;
        }
    });

    $(".buttonForSubscribe").on('click', function() {

        var userName=$("#firstName").val();
        var email=$("#email").val();
        let dataValid=false;

        if (userName.length < 1 && email.length < 1) { 
            $(".userNameInvalid").addClass("d-block");
            $(".emailInvalid").addClass("d-block");
        }

        else if (userName.length > 1 && email.length < 1) { 
            $(".userNameInvalid").removeClass("d-block");
            $(".emailInvalid").addClass("d-block");
        }

        else if (userName.length < 1 && email.length > 1) { 
            $(".emailInvalid").removeClass("d-block");
            $(".userNameInvalid").addClass("d-block");
        }
        else {
            $(".userNameInvalid").removeClass("d-block"); 
            $(".emailInvalid").removeClass("d-block");
           
        dataValid=true;
        uniqueID++;
           
        user.numberID=uniqueID;
        user.name=userName;
        user.e_mail=email;
        user.specialOffer=specialDealCheckbox;

        var alertMessage = "thank you for subscribing " + user.name;

        alert(alertMessage);

        if (user.specialOffer===true) {
            user.offerCycle = $("#cycleSelect option:selected").text();
        }
        }
    });

    $("#userTable").on("click",".del", function() {
        $(this).closest('tr').remove();
    })


})


