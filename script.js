$(document).ready(function(){   

    $('#submitBtn').click(function(){
        let name = $("input[name=full_name]").val();
        let coffeeType = $("input[name=coffee_type]:checked").val();

        let extras = [];
        $("input[name=extras]:checked").each(function(){
            extras.push($(this).val());
        });

        let total = 0;

        //Adding cost of coffee to total variable
        if(coffeeType === 'turkish'){
            total += 3;
        }
        else if(coffeeType === 'american'){
            total += 5;
        }
        else if(coffeeType === 'iced-latte'){
            total += 7;
        }

        //Adding total cost of extras to total variable
        for(let i = 0; i < extras.length; i++) {
            let extra = extras[i]; //Get one of the selected extras

            if(extra === 'extra_coffee'){
                total += 1.5;
            }
            else if(extra === 'whipped_cream'){
                total += 2;
            }
            else if(extra === 'extra caramel'){
                total += 3;
            }
        }

        //Create report use with ``
        let report = `Name : ${name}, Total : ${total}`;
        console.log(report);
    });
});