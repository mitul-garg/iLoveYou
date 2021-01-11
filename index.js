var count = 0
$("#heart").click(function() {
    count++;
    if(count == 1) {
        $("#love").text("L");
    }
    else if(count == 2){
        $("#love").text("LO");
    }
    else if(count == 3){
        $("#love").text("LOV");
    } 
    else if(count == 4) {
        $("#love").text("LOVE");
    }
    else if(count == 5) {
        $("#love").text("Y");
    }
    else if(count == 6) {
        $("#love").text("YO");
    }
    else if(count == 7) {
        $("#love").text("YOU");
    }
    else if(count == 8) {
        $("#love").text("I LOVE YOU");
        $("#click").text("");
    }
})