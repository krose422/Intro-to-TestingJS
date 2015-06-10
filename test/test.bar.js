
(function () {
  'use strict';

  describe("Bar", function() {
  var bar;

  beforeEach(function() {
    bar = new Bar();
  });

    describe('squared', function () {
      it('should return the square of a number', function () {
        expect( bar.squared(2) ).to.equal(4);
      });
    });

    describe('cubed', function () {
      it('should return the cube of a number', function () {
        expect( bar.cubed(2) ).to.equal(8);
      });
    });

    // KELLEY NEED TO FIX THIS ONE
    describe('exponentOf', function () {
      it('should return the exponent of a number', function () {
        expect( bar.exponentOf(2) ).to.equal();
      });
    });

    describe('reverseString', function () {
      it('should return the reverse of a string', function () {
        expect( bar.reverseString("kelley") ).to.equal("yellek");
      });
    });

    describe('cipher', function () {
      it('should turn a string into code', function () {
        expect( bar.cipher("kelley") ).to.equal("ÏÉÐÐÉÝ");
      });
    });

    describe('decipher', function () {
      it('should turn code from cipher back into original string', function () {
        expect( bar.decipher("ÏÉÐÐÉÝ") ).to.equal("kelley");
      });
    });

    describe('rot13', function () {
      it('should change sentence into rot13 code', function () {
        expect( bar.rot13("i like cheese") ).to.equal("v yvxr purrfr");
      });
    });



  })


})();
