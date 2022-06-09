
//based on the record data
//have the denver broncos won the superbowl

//look through the data
    //function called superbowlWin 
        //w a .find() method attatched to something 
        // something about boolean if "w"


function superbowlWin(array) {
    let win = array.find((item) => item.result === "W")
    if (win) {
        return win.year
    }else {
        return "undefined"
    }
}

superbowlWin(record)
