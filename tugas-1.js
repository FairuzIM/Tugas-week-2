function nextDays(currentDay){
    const nDays = days[days.indexOf(currentDay) + 1]
if(nDays){
        return nDays
    }else{
        return 'Senin'
    }
}