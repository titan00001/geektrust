var expect = require("chai").expect;
var Room = require("../Entity/Room");

describe("Room", function() {

  describe("is not booked", function() {

    var room = new Room('Any', 6);

    it("should be available form 00:15 to 06:30", function() {

      expect(room.isAvailable('00:15', '06:30')).to.equal(true);
    });

    it("should be available form 06:30 to 9:30", function() {

      expect(room.isAvailable('06:30', '09:30')).to.equal(true);
    });

    it("should be available form 05:30 to 9:00", function() {

      expect(room.isAvailable('05:30', '09:00')).to.equal(true);
    });
  });


  describe("when booked from 00:15 to 01:45", function() {

    var room = new Room('Any', 6);
    room.setAvailability('00:15', '01:45', 3);

    it("should be available form 00:00 to 00:15", function() {

      expect(room.isAvailable('00:00', '00:15')).to.equal(true);
    });

    it("should not be available form 00:00 to 00:30", function() {

      expect(room.isAvailable('00:00', '00:30')).to.equal(false);
    });

    it("should not be available form 01:30 to 01:45", function() {

      expect(room.isAvailable('01:30', '01:45')).to.equal(false);
    });

    it("should not be available form 00:30 to 01:15", function() {

      expect(room.isAvailable('01:30', '01:45')).to.equal(false);
    });

    it("should not be available form 00:00 to 02:15", function() {

      expect(room.isAvailable('00:00', '02:15')).to.equal(false);
    });
  });

  describe("when booked from 00:15 to 01:45 and 02:30 to 03:30", function() {

    var room = new Room('Any', 6);
    room.setAvailability('00:15', '01:45', 3);
    room.setAvailability('02:30', '03:30', 3);

    it("should be available form 02:00 to 02:15", function() {

      expect(room.isAvailable('02:00', '02:15')).to.equal(true);
    });

    it("should not be available form 01:30 to 02:45", function() {

      expect(room.isAvailable('01:30', '02:45')).to.equal(false);
    });

    it("should not be available form 01:30 to 01:45", function() {

      expect(room.isAvailable('01:30', '01:45')).to.equal(false);
    });

    it("should not be available form 00:00 to 04:15", function() {

      expect(room.isAvailable('00:00', '04:15')).to.equal(false);
    });

    it("should not be available form 00:15 to 01:45", function() {

      expect(room.isAvailable('00:15', '01:45')).to.equal(false);
    });
  });

});

