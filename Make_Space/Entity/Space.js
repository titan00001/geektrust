class Space {

    constructor(minCapacity = 2) {
        this.rooms = [];
        this.maxCapacity = 0;
        this.minCapacity = minCapacity;
    }

    addRoom(room) {
        this.rooms.push(room);
        this.maxCapacity = Math.max(room.capacity, this.maxCapacity);
    }

    getAvailability(startTime, endTime) {

        const vacantRoomList = [];
        for(let room of this.rooms) {
            if(room.isAvailable(startTime, endTime)) {
                vacantRoomList.push(room);
            }
        }

        return vacantRoomList;
    }

    bookRoom(startTime, endTime, peopleCount) {

        if(peopleCount < this.minCapacity || peopleCount > this.maxCapacity) {
            return "NO_VACANT_ROOM";
        }

        for(let room of this.rooms) {
            
            const isRoomBooked = room.setAvailability(startTime, endTime, peopleCount);
            if(isRoomBooked) {
                return room.getName();
            }
            
        }

        return "NO_VACANT_ROOM";
    }

}


module.exports = Space;
