
function grade(){
    let text = document.getElementById("input").value;
    if(text > 79){
        text = "Grade: A";
    }else if(text >= 60 && text < 80){
        text = "Grade: B";
    }else if(text <= 59 && text >=49){
        text = "Grade: C";
    }else if(text >=40 && text <=48){
        text = "Grade: D";
    }else{
        text = "Grade: E";
    }

alert(text);
}
grade();







