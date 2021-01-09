var count = 0
$("#love").click(function() {
    count++;
    if(count == 1) {
        $("#love").text("L");
    }
    else if(count == 2){
        $("#love").text("O");
    }
    else if(count == 3){
        $("#love").text("V");
    } 
    else if(count == 4) {
        $("#love").text("E");
    }
    else if(count == 5) {
        $("#love").text("Y");
    }
    else if(count == 6) {
        $("#love").text("O");
    }
    else if(count == 7) {
        $("#love").text("U");
    }
    else if(count == 8) {
        $("#love").text("I LOVE YOU");
    }
})