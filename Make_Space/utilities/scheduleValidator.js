const validateSchedule = (startTime, endTime) => {

    if( !(validateTime(startTime) && validateTime(endTime)) ) {
        return false;
    }

    if(startTime > endTime) {
        return false;
    }

    return true;
}

const validateTime = (time) => {

    let re = new RegExp('^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$');

    if(! re.test(time)) {
        return false;
    }

    let [hr, min] = time.split(':');

    if(Number(hr) < 0 && Number(hr) > 23) {
        return false;
    }

    min = Number(min);
    if(min % 15 !== 0 && min < 60) {
        return false;
    }

    return true;
}

module.exports = validateSchedule;