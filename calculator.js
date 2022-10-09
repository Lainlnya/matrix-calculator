$(function(){
    //pop up event
    let do_caution = (input_contents)=>{
        $(".do_caution").css("display", "block");
        $(".do_caution").html(input_contents);
        $(".do_caution").click(function(){
            $(".do_caution").css("display", "none");
        });
    }


    $(document).on("click", function(e){
        let input1 = $("#number_input1").val();
        let input2 = $("#number_input2").val();
        let input3 = $("#number_input3").val();
        let input4 = $("#number_input4").val();
        //e.target.value = this.value.replace(/[^1-9.]/g, '').replace(/(\..*)\./g, '$1');
        const check_number = /^[-0]+|^[ㄱ-ㅎa-zA-Z]*$/g;
        const check_cell = /^[ㄱ-ㅎa-zA-Z]*$/g;
        $("input").on("keyup", function(){
            if(check_number.test($("#number_input1").val())){
                $("#number_input1").val("");
            }
            if(check_number.test($("#number_input2").val())){
                $("#number_input2").val("");
            }
            if(check_number.test($("#number_input3").val())){
                $("#number_input3").val("");
            }
            if(check_number.test($("#number_input4").val())){
                $("#number_input4").val("");
            }
        });

        switch(e.target.id){
        //outbut_button
            case "output_button":
                function box_one(){
                    let make_boxone=[];
                    let i=0;
                    while(i<input1){
                        let j=0;
                        while(j < input2){
                            make_boxone += '<input id="cell_boxone_'+i+'_'+ j+'" class="cell_box" type="number" value="'+0+'">';
                            j++;
                        }
                    i++;
                    }
                    return make_boxone;
                }
                function box_two(){
                    let make_boxtwo=[];
                    let i=0;
                    while(i<input3){
                        let j=0;
                        while(j < input4){
                            make_boxtwo += '<input id="cell_boxtwo_'+i+'_' +j+'" class="cell_box" type="number" value="'+0+'">';
                            j++;
                        }
                        i++;
                    }
                    return make_boxtwo;
                }
                if(check_number.test(input1) || check_number.test(input2)|| check_number.test(input3) || check_number.test(input4)|| input1>8 || input2>8 ||input3>8 || input4>8){
                    do_caution("숫자 1~8까지만 입력 가능합니다.");
                    $("#number_input1, #number_input2, #number_input3, #number_input4").val("");
                }else{
                $("#print_area1").html(box_one());
                $("#print_area2").html(box_two());
                $("#print_area1").css("width", input2*50+"px");
                $("#print_area2").css("width", input4*50+"px");
                }
            break;

            //random_button
            case "random_button" :
                function box_three(){
                    let make_boxone=[];
                    let i=0;
                    while(i<input1){
                        let j=0;
                        while(j < input2){
                            make_boxone += '<input id="cell_boxone_'+i+'_'+ j+'" class="cell_box" type="number" value="'+(Math.floor(Math.random()*13)+1)+'">';
                            j++;
                        }
                    i++;
                    }
                    return make_boxone;
                }
                function box_four(){
                    let make_boxtwo=[];
                    let i=0;
                    while(i<input3){
                        let j=0;
                        while(j < input4){
                            make_boxtwo += '<input id="cell_boxtwo_'+i+'_' +j+'" class="cell_box" type="number" value="'+(Math.floor(Math.random()*13)+1)+'">';
                            j++;
                        }
                        i++;
                    }
                    return make_boxtwo;
                }
                if(check_number.test(input1) || check_number.test(input2)|| check_number.test(input3) || check_number.test(input4)|| input1>8 || input2>8 ||input3>8 || input4>8){
                    do_caution("숫자 1~8까지만 입력 가능합니다.");
                    $("#number_input1, #number_input2, #number_input3, #number_input4").val("");
                }else{
                $("#print_area1").html(box_three());
                $("#print_area1").css("width", input2*50+"px");
                $("#print_area2").html(box_four());
                $("#print_area2").css("width", input4*50+"px");
                }       
            break;

            //puls_button
            case "plus_button" :
                function plus_box(){
                    let i=0;
                    let calculate_area="";
                    while(i<input1){
                        let j=0;
                        while(j<input2){
                        calculate_area+='<div class="result_box">'+(parseInt($("#cell_boxone_"+i+"_"+j).val()) + parseInt($("#cell_boxtwo_"+i+"_"+j).val()))+'</div>';
                        j++;
                    }
                    i++;
                    }
                    return calculate_area;
                }
                if(input1==input3 && input2 ==input4){
                    $("#print_area3").html(plus_box());
                    $("#print_area3").css("width", input2*50+"px");
                    let temp_value = document.querySelectorAll(".cell_box");
                    temp_value.forEach(function(value, index, array){
                        if(value.value=="" || check_cell.test(value.value)){
                            do_caution("행렬의 모든 값이 입력되어야 합니다."); $("#print_area3").empty();
                        }
                    });
                    let print_area1 = document.getElementById('print_area1');
                    let p_one = window.getComputedStyle(print_area1).getPropertyValue('width');
                    console.log(p_one);
                    if(p_one!==input2*50+"px"){
                        do_caution("output 버튼을 눌러주세요."); 
                        $("#print_area1, #print_area2, #print_area3").empty();
                    }

                }else{
                        do_caution("모든 행렬의 숫자가 동일해야 합니다.");
                        $("#print_area1, #print_area2, #print_area3").empty();
                        $("#number_input1, #number_input2, #number_input3, #number_input4").val("");
                }
            break;

            //minus_button
            case "minus_button" :
                function minus_box(){
                    let i=0;
                    let calculate_area="";
                    while(i<input1){
                        let j=0;
                        while(j<input2){
                        calculate_area+='<div class="result_box">'+(parseInt($("#cell_boxone_"+i+"_"+j).val()) - parseInt($("#cell_boxtwo_"+i+"_"+j).val()))+'</div>';
                        j++;
                    }
                    i++;
                    }
                    return calculate_area;
                }
                if( input1==input3&& input2==input4){
                    $("#print_area3").html(minus_box());
                    $("#print_area3").css("width", input2*50+"px");
                    let temp_value = document.querySelectorAll(".cell_box");
                    temp_value.forEach(function(value, index, array){
                        if(value.value=="" || check_cell.test(value.value)){
                            do_caution("행렬의 모든 값이 입력되어야 합니다."); $("#print_area3").empty();
                        }                        
                    });
                    let print_area1 = document.getElementById('print_area1');
                    let p_one = window.getComputedStyle(print_area1).getPropertyValue('width');
                    console.log(p_one);
                    if(p_one!==input2*50+"px"){
                        do_caution("output 버튼을 눌러주세요."); 
                        $("#print_area1, #print_area2, #print_area3").empty();
                    }
                    }else{
                        do_caution("모든 행렬의 숫자가 동일해야 합니다.");
                        $("#print_area1, #print_area2, #print_area3").empty();
                        $("#number_input1, #number_input2, #number_input3, #number_input4").val("");
                    }     
            break;
            //reset_button
            case "reset_button" :
                $("#print_area1, #print_area2, #print_area3").empty();
                $("#number_input1, #number_input2, #number_input3, #number_input4").val("");
            break;

            //times_button
            case "times_button":
                let multiple_array = () =>{
                    let x_result=0;
                    let middle_array = "";
                    let result_array="";
                    let multiple_string = "";

                    let i=0;
                    while(i<input1){
                        multiple_string = [];
                        let k=0;
                        while(k<input4){
                            let j=0;
                            while(j<input3){
                                x_result += parseInt($("#cell_boxone_"+i+"_"+j).val())*parseInt($("#cell_boxtwo_"+j+"_"+k).val());
                            j++;
                            }
                            multiple_string += '<div class="result_box">'+x_result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+'</div>';
                            x_result=0;
                        k++;
                        }
                        middle_array += multiple_string;
                    i++;
                    result_array = middle_array;
                    }
                return result_array;
                }
                if(input2== input3){
                $("#print_area3").html(multiple_array());
                $("#print_area3").css("width", input4*50+"px");
                let temp_value = document.querySelectorAll(".cell_box");
                temp_value.forEach(function(value, index, array){
                    if(value.value=="" || check_cell.test(value.value)){
                        do_caution("행렬의 모든 값이 입력되어야 합니다."); $("#print_area3").empty();
                    }
                });
                let print_area1 = document.getElementById('print_area1');
                let p_one = window.getComputedStyle(print_area1).getPropertyValue('width');
                console.log(p_one);
                if(p_one!==input2*50+"px"){
                    do_caution("output 버튼을 눌러주세요."); 
                    $("#print_area1, #print_area2, #print_area3").empty();
                }
                }else{
                    do_caution("첫 번째의 열과 두 번째의 행이 동일해야 합니다.");
                    $("#print_area1, #print_area2, #print_area3").empty();
                    $("#number_input1, #number_input2, #number_input3, #number_input4").val("");
                }
            break;
        }

    });
});
