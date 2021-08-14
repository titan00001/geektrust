var expect = require("chai").expect;
var scheduleValidator = require("../utilities/scheduleValidator");

describe("SheduleValidator", function() {

  describe("validate time", function() {

    it("from 07:15 to 06:30 is not valid", function() {

      expect(scheduleValidator('07:15', '06:30')).to.equal(false);
    });

    it("from 06:00 to 06:10 is not valid", function() {

      expect(scheduleValidator('06:00', '06:10')).to.equal(false);
    });

    it("from 06:am to 06:15 is not valid", function() {

        expect(scheduleValidator('06:am', '06:15')).to.equal(false);
    });

    it("from 06:00 to 06:15 is valid", function() {

      expect(scheduleValidator('06:00', '06:15')).to.equal(true);
    });

    it("from 06:30 to 06:45 is valid", function() {

      expect(scheduleValidator('06:30', '06:45')).to.equal(true);
    });

    it("from 06:301 to 016:45 is not valid", function() {

      expect(scheduleValidator('06:301', '016:45')).to.equal(false);
    });
  });

});