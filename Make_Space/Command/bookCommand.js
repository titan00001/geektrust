const scheduleValidator = require('../utilities/scheduleValidator');

class BookCommand {

    constructor(name, space) {
        this.name = name;
        this.space = space;
    }

    execute([startTime, endTime, peopleCount]) { 

        // console.log(startTime, endTime);

        if(!scheduleValidator(startTime, endTime)) {
            return 'INCORRECT_INPUT';
        }

        const bookedRoom = this.space.bookRoom(startTime, endTime, peopleCount);
        return bookedRoom;
    }
    
    getName() {
        return this.name;
    }
}

module.exports = BookCommand;