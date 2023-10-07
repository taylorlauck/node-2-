const timeWord = require("./timeWord");

describe("#timeword", () => {
  test("it is a function", () => {
    expect(typeof timeWord).toBe("function");
  });

  test("it returns a string", () => {
    expect(typeof timeWord("00:00")).toBe("string");
  });

  test("it returns midnight for 00:00", () => {
    expect(timeWord("00:00")).toBe("midnight");
  });

  test("it returns noon for 12:00", () => {
    expect(timeWord("12:00")).toBe("noon");
  });

  test("it returns one o'clock am for 01:00", () => {
    expect(timeWord("01:00")).toBe("one o'clock am");
  });

  test("it returns two o'clock am for 02:00", () => {
    expect(timeWord("02:13")).toBe("two thirteen am");
  });

  test("it returns four oh six pm for 16:06", () => {
    expect(timeWord("16:06")).toBe("four oh six pm");
  });

  test("it returns eleven twenty three pm for 23:23", () => {
    expect(timeWord("23:23")).toBe("eleven twenty three pm");
  });
});