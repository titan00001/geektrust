const scheduleValidator = require('../utilities/scheduleValidator');

class VacancyCommand {
    constructor(name, space) {
        this.name = name;
        this.space = space;
    }

    execute([startTime, endTime]) {

        // console.log(startTime, endTime);

        if(!scheduleValidator(startTime, endTime)) {
            return 'INCORRECT_INPUT';
        }

        const vacantRoomList = this.space.getAvailability(startTime, endTime).map(room => room.getName());
        const vacantRooms = vacantRoomList.reduce((name, roomName) => {
            return name + " " + roomName;
        }, '')
        return vacantRooms.substring(1) || 'NO_VACANT_ROOM';
    }

    getName() {
        return this.name;
    }
}

module.exports = VacancyCommand;