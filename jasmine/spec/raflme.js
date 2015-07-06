/*
 * This is the master Spec file used by Jasmine for tests
 * of the rafl-me UI.
 *
 * All tests will go in the $() function, to ensure DOM 
 * elements are available.
 */

$(function() {
	// First Suite
	describe('placeholder suite', function() {
		it("is a sample spec", function() {
			expect(true).toBe(true);
		});
	});
}());