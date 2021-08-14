const Room = require('./Entity/Room');
const space = require('./Entity/Space');
const manager = require('./Entity/Manager');
const VacancyCommand = require('./Command/vacancyCommand');
const BookCommand = require('./Command/bookCommand');

const config = () => {

    // Create room
    const CCave = new Room('C-Cave', 3);
    const DTower = new Room('D-Tower', 7);
    const GMansion = new Room('G-Mansion', 20);

    // Create space of rooms and manager to manage space
    const Manager = new manager();
    const Space = new space();

    // book all rooms in space for cleaning
    CCave.setAvailability('09:00','09:15', 2);
    CCave.setAvailability('13:15','13:45', 2);
    CCave.setAvailability('18:45', '19:00', 2);

    DTower.setAvailability('09:00','09:15', 2);
    DTower.setAvailability('13:15','13:45', 2);
    DTower.setAvailability('18:45', '19:00', 2);

    GMansion.setAvailability('09:00','09:15', 2);
    GMansion.setAvailability('13:15','13:45', 2);
    GMansion.setAvailability('18:45', '19:00', 2);

    // Add rooms in space for booking
    Space.addRoom(CCave);
    Space.addRoom(DTower);
    Space.addRoom(GMansion);

    // console.log(GMansion);

    // Create command for space of rooms
    const vacancyCommand = new VacancyCommand('VACANCY', Space);
    const bookCommand = new BookCommand('BOOK', Space);

    // Add command to manage a space of rooms
    Manager.addCommand('VACANCY', vacancyCommand);
    Manager.addCommand('BOOK', bookCommand);

    return Manager;
}

module.exports = config();