const Datesfunc = (date) => {

    var months = ["Januari" , "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November" , "December"]
    var arr = date.split("-")

    if (arr[1][0] == 0){
        arr[1] = arr[1].charAt(1);      
    }

    var monthN =  months[arr[1] - 1];
    return arr[2] + " " + monthN + " " + [arr[0]]
}

export default Datesfunc