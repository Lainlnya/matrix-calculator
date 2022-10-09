    function Start_matrix(x_number, y_number){
        this.x_number = x_number;
        this.y_number = y_number;
        this.print_area = "";
        this.calculate_area="";
        this.plain_input = (number_input) =>{
            let i=0;
            while(i < this.x_number){
                let j=0;
                while(j < this.y_number){
                    this.print_area += '<input id="'+number_input+i+"_"+j+'" class="cell_box" type="number" value="'+0+'">';
                    j++;
                }
            i++;
            }
            return this.print_area;
        }
        this.random_input = (number_input) =>{
            let i=0;
            while(i < this.x_number){
                let j=0;
                while(j < this.y_number){
                    this.print_area += '<input id="'+number_input+i+"_"+j+'" class="cell_box" type="number" value="'+ Math.floor(Math.random()*9+1) +'">';
                    j++;
                }
            i++;
            }
            return this.print_area;
        }
        this.plus_array=()=>{
            let i=0;
            while(i < this.x_number){
                let j=0;
                while(j < this.y_number){
                    this.calculate_area += '<div class="result_box">'+(parseInt($("#box_one"+i+"_"+j).val())+parseInt($("#box_two"+i+"_"+j).val()))+'</div>'
                    j++;
                }
                i++;
            }
        }
        this.minus_array=()=>{
            let i=0;
            while(i < this.x_number){
                let j=0;
                while(j < this.y_number){
                    this.calculate_area += '<div class="result_box">'+(parseInt($("#box_one"+i+"_"+j).val())-parseInt($("#box_two"+i+"_"+j).val()))+'</div>'
                    j++;
                }
                i++;
            }
        }
    }
    let do_caution = (input_contents)=>{
        $(".do_caution").css("display", "block");
        $(".do_caution").html(input_contents);
        $(".do_caution").click(function(){
            $(".do_caution").css("display", "none");
        });
    }
    
    $(document).on("click",function(e){
        let number_input1 = Number($("#number_input1").val());
        let number_input2 = Number($("#number_input2").val());
        let number_input3 = Number($("#number_input3").val());
        let number_input4 = Number($("#number_input4").val());

        let first_mini = new Start_matrix(number_input1, number_input2);
        let second_mini = new Start_matrix(number_input3, number_input4);
    

        let multiple_array = () =>{
            let x_result=0;
            let middle_array = "";
            let result_array="";
            let multiple_string = "";

            let i=0;
            while(i<number_input1){
                multiple_string = [];
                let k=0;
                while(k<number_input4){
                    let j=0;
                    while(j<number_input3){
                        x_result += parseInt($('#box_one'+i+"_"+j).val())*parseInt($('#box_two'+j+"_"+k).val());
                    j++;
                    }
                    multiple_string += '<div class="result_box">'+x_result+'</div>';
                    x_result=0;
                k++;
                }
                middle_array += multiple_string;
            i++;
            result_array = middle_array;
            }
        return result_array;
        }
        const number_check =  /^[0-9]*$/;
        switch(e.target.id){
            case "output_button" : 
            if(number_check.test(number_input1) && number_check.test(number_input2) && number_check.test(number_input3) && number_check.test(number_input4)){
                first_mini.plain_input("box_one");
                $("#print_area1").css("width", (50*number_input2)+"px");
                $("#print_area1").html(first_mini.print_area);
                second_mini.plain_input("box_two");
                $("#print_area2").css("width", (50*number_input4)+"px");
                $("#print_area2").html(second_mini.print_area);    
            }else{
                do_caution("숫자만 입력가능합니다.");
                $("#print_area1, #print_area2, #print_area3").empty();
                $("#number_input1, #number_input2, #number_input3, #number_input4").val("");
            }    
            break;

            case "random_button" :
            first_mini.random_input("box_one");
            $("#print_area1").css("width", (50*number_input2)+"px");
            $("#print_area1").html(first_mini.print_area);
            second_mini.random_input("box_two");
            $("#print_area2").css("width", (50*number_input4)+"px");
            $("#print_area2").html(second_mini.print_area);
            break;
            
            case "reset_button" :
            $("#print_area1, #print_area2, #print_area3").empty();
            $("#number_input1, #number_input2, #number_input3, #number_input4").val("");
            break;

            case "plus_button" :                
                if(number_input1==number_input3 && number_input2==number_input4){
                first_mini.plus_array();
                $("#print_area3").css("width", (50*number_input4)+"px");
                $("#print_area3").html(first_mini.calculate_area);
                }else{
                    do_caution("모든 행렬의 숫자가 동일해야 합니다.");
                    $("#print_area1, #print_area2, #print_area3").empty();
                    $("#number_input1, #number_input2, #number_input3, #number_input4").val("");
                }
            break;
                
            case "minus_button" :
                if(number_input1==number_input3 && number_input2==number_input4){
                first_mini.minus_array();
                $("#print_area3").css("width", (50*number_input4)+"px");
                $("#print_area3").html(first_mini.calculate_area)
                }else{
                    do_caution("모든 행렬의 숫자가 동일해야 합니다.");
                    $("#print_area1, #print_area2, #print_area3").empty();
                    $("#number_input1, #number_input2, #number_input3, #number_input4").val("");
                };
            break;
            
            case "times_button" :
                if(number_input2==number_input3){
                    $("#print_area3").css("width", (50*number_input4)+"px");
                    $("#print_area3").html(multiple_array());
                }else{
                    do_caution("첫 번째의 열과 두 번째의 행이 동일해야 합니다");
                    $("#print_area1, #print_area2, #print_area3").empty();
                    $("#number_input1, #number_input2, #number_input3, #number_input4").val("");

                }
            break;
        };
    });

