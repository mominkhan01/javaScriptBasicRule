function isLeapYear(year){
    var result;
    return (year & 3) == 0 && ((year % 25) != 0 || (year & 15) == 0);
    if(years / 400){
        result = true;
    }
    else if(years / 4){
        result = true;
    }
    else if(years / 100){
        result = false;
    }
    else{
        result = false;
    }
    return isLeapYear;
}
var result = isLeapYear(4000);
console.log(result);