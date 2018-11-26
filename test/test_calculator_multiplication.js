"use strict";

const { assert } = require("chai");
const { multiply } = require("../index");

describe("multiply()", () => {
	it("should multiply positive numbers together", () => {
		assert.equal(multiply(3, 1), 3);
		assert.equal(multiply(5, 100), 500);
	});

	it("should multiply positive and negative numbers together", () => {
		assert.equal(multiply(-3, 1), -3);
		assert.equal(multiply(500, -2), -1000);
	});

	it("should multiply negative numbers together", () => {
		assert.equal(multiply(-3, -1), 3);
		assert.equal(multiply(-500, -2), 1000);
	});
});
