class Room {

    constructor(name, capacity) {
        this.name = name;
        this.capacity = capacity;
        this.bookedTime = [];
    }

    isAvailable(startTime, endTime) {
        
        for(let time of this.bookedTime) {
            if(time[0] <= startTime && time[1] > startTime) {
                return false;
            }

            if(time[0] < endTime && time[1] > endTime) {
                return false;
            }

            if(time[0] >= startTime && time[1] <= endTime) {
                return false;
            }
        }

        return true;
    }

    setAvailability(startTime, endTime, peopleCount) {

        if(this.isAvailable(startTime, endTime)) {
            if(peopleCount <= this.getCapacity())  {
                this.bookedTime.push([startTime, endTime]);
                return true;
            }
        }

        return false;

    }

    getName() {
        return this.name;
    }

    getCapacity() {
        return this.capacity;
    }
}

module.exports = Room;