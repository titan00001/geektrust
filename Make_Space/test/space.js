var expect = require("chai").expect;
var SpaceClass = require("../Entity/Space");
var Room = require('../Entity/room');

describe("Space", function() {

  describe("check Availabilty when single room is not booked", function() {

    var room = new Room('A', 3);
    var Space = new SpaceClass();
    Space.addRoom(room);

    it("should be available form 00:15 to 06:30", function() {

      expect(Space.getAvailability('00:15', '06:30')).to.be.an('array').to.deep.include.members([room]);
    });

    it("should be available form 06:30 to 9:30", function() {

        expect(Space.getAvailability('06:30', '09:30')).to.be.an('array').to.deep.include.members([room]);
    });

    it("should be available form 05:30 to 9:00", function() {

        expect(Space.getAvailability('05:30', '09:00')).to.be.an('array').to.deep.include.members([room]);
    });
  });


  describe("check Availabilty when 2 rooms are there: A with 3 from 00:15 to 01:45; B with 5 from 01:00 to 02:30", function() {

    var roomA = new Room('A', 3);
    var roomB = new Room('B', 7);
    roomA.setAvailability('00:15', '01:45', 3);
    roomB.setAvailability('01:00', '02:30', 5);
    var Space = new SpaceClass();
    Space.addRoom(roomA);
    Space.addRoom(roomB);

    it("both room should be available form 00:00 to 00:15", function() {

        expect(Space.getAvailability('00:00', '00:15')).to.be.an('array').to.deep.include.members([roomA, roomB]);
    });

    it("room A should be available form 02:00 to 03:00", function() {

        expect(Space.getAvailability('02:00', '02:00')).to.be.an('array').to.deep.include.members([roomA]);
    });

    it("should not be available form 01:30 to 01:45", function() {

        expect(Space.getAvailability('01:30', '01:45')).to.be.an('array').of.length(0);
    });

    it("should not be available form 00:30 to 01:15", function() {

        expect(Space.getAvailability('00:30', '01:15')).to.be.an('array').of.length(0);
    });

    it("room B should be available form 00:30 to 01:00", function() {

        expect(Space.getAvailability('00:30', '01:00')).to.be.an('array').to.deep.include.members([roomB]);
    });
  });

  describe("book when 2 rooms are there: A with 3 from 00:15 to 01:45; B with 5 from 01:00 to 02:30", function() {

    var roomA = new Room('A', 3);
    var roomB = new Room('B', 7);
    roomA.setAvailability('00:15', '01:45', 3);
    roomB.setAvailability('01:00', '02:30', 5);
    var Space = new SpaceClass();
    Space.addRoom(roomA);
    Space.addRoom(roomB);

    it("room A should be available form 00:00 to 00:15 for 2 people", function() {

        expect(Space.bookRoom('00:00', '00:15', 2)).to.be.a('string').to.equal('A');
    });

    it("room B should be available form 00:00 to 00:15 for 4 people", function() {

        expect(Space.bookRoom('00:00', '00:15', 4)).to.be.a('string').to.equal('B');
    });

    it("no should be available form 00:00 to 00:15 for 8 people", function() {

        expect(Space.bookRoom('00:00', '00:15', 8)).to.be.a('string').to.equal('NO_VACANT_ROOM');
    });

    it("no should be available form 00:00 to 00:15 for 1 people", function() {

        expect(Space.bookRoom('00:00', '00:15', 1)).to.be.a('string').to.equal('NO_VACANT_ROOM');
    });

    it("room A should be available form 02:00 to 03:00 for 3 people", function() {

        expect(Space.bookRoom('02:00', '02:00', 3)).to.be.a('string').to.equal('A');
    });

    it("should not be available form 01:30 to 01:45 for 3 people", function() {

        expect(Space.bookRoom('01:30', '01:45', 3)).to.be.a('string').to.equal('NO_VACANT_ROOM');
    });

    it("should not be available form 00:30 to 01:15 for 3 people", function() {

        expect(Space.bookRoom('00:30', '01:15', 3)).to.be.a('string').to.equal('NO_VACANT_ROOM');
    });

    it("room B should be available form 00:30 to 01:00 for 7 people", function() {

        expect(Space.bookRoom('00:30', '01:00', 7)).to.be.a('string').to.equal('B');
    });
  });

});

