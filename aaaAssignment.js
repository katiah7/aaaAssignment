// 1. Greeting fallback
function greet(name) {
  return name || "Guest";
}
test("returns Guest when name is empty", () => {
  // Arrange
  const name = "";
  // Act
  const result = greet(name);
  // Assert
  expect(result).toBe("Guest");
});

// 2. Boolean toggle
function toggle(value) {
  return !value;
}
test("toggles boolean value", () => {
  // Arrange
  const input = true;
  // Act
  const result = toggle(value);
  // Assert
  expect(result).toBe(false);
});

// 3. Add item to array
function addItem(arr, item) {
  arr.push(item);
  return arr;
}
test("adds item to array", () => {
  // Arrange
  const arr = ["peach", "plum", "cherry"];
  const item = "kiwi";
  // Act
  const result = addItem(arr, item);
  // Assert
  expect(result).toEqual(["peach", "plum", "cherry", "kiwi"]);
});

// 4. Remove item from array
function removeItem(arr, item) {
  return arr.filter((i) => i !== item);
}
test("removes item from array", () => {
  // Arrange
  const arr = ["strawberry", "vanilla", "chocolate", "salted caramel"];
  const item = "strawberry";
  // Act
  const result = removeItem(arr, item);
  // Assert
  expect(result).toEqual(["vanilla", "chocolate", "salted caramel"]);
});

// 5. Check password length
function isValidPassword(password) {
  return password.length >= 6;
}
test("returns true for valid password length", () => {
  // Arrange
  const password = "password";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toBe(true);
});

// Stage 2. Creating my own test cases
// Checking password validity
function isValidPassword(password) {
  return password.length >= 6;
}

// Test1(negative)
test("returns false for invalid password length", () => {
  // Arrange
  const password = "pass";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toBe(false);
});

// Test2
test("returns true for a password exactly 6 characters long", () => {
  // Arrange
  const password = "passwo";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toBe(true);
});

// Test3
test("returns false for a password exactly one character less than the minimum password length(5 characters)", () => {
  // Arrange
  const password = "passw";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toBe(pass);
});

// Test4
test("returns false for an empty password field", () => {
  // Arrange
  const password = "";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toBe(false);
});

// Test5
test("returns true for a password exactly one character over the minimum lenth(7 characters)", () => {
  // Arrange
  const password = "passwor";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toBe(true);
});

// Checking for a word in a sentence
function containsWord(sentence, word) {
  return sentence.includes(word);
}

// Test1(positive)
test("returns true for a sentece containing the word we're checking for", () => {
  // Arrange
  const sentence = "Katia is awesome";
  const word = "Katia";
  // Act
  const result = containsWord(sentence, word);
  // Assert
  expect(result).toBe(true);
});

// Test2(negative)
test("returns false for a sentence not containing the word we're checking for", () => {
  // Arrange
  const sentence = "Katia is awesome";
  const word = "princess";
  // Act
  const result = containsWord(sentence, word);
  // Assert
  expect(result).toBe(false);
});

// Test3
test("returns true for word at the end of a sentece", () => {
  // Arrange
  const sentence = "Katia is awesome";
  const word = "awesome";
  // Act
  const result = containsWord(sentence, word);
  // Assert
  expect(result).toBe(true);
});

// Test4
test("returns true for word in the middle of a sentece", () => {
  // Arrange
  const sentence = "A hooligans game played by gentlemen";
  const word = "game";
  // Act
  const result = containsWord(sentence, word);
  // Assert
  expect(result).toBe(true);
});

// Test5
test("returns true for a word in caps ", () => {
  // Arrange
  const sentence = "TISINI is a pioneer";
  const word = "tisini";
  // Act
  const result = containsWord(sentence, word);
  // Assert
  expect(result).toBe(true);
});

// Adding items to an array
function addItem(arr, item) {
  arr.push(item);
  return arr;
}
// Test1
test("adds an item to an empty array", () => {
  // Arrange
  const arr = [];
  const item = "cheddar";
  // Act
  const result = addItem(arr, item);
  // Assert
  expect(result).toBe(["cheddar"]);
});

// Test2
test("adds an empty string to an array", () => {
  // Arrange
  const arr = ["cheddar", "mozarella", "gouda"];
  const item = "";
  // Act
  const result = addItem(arr, item);
  // Assert
  expect(result).toBe(["cheddar", "mozarella", "gouda", ""]);
});

// Test3
test("adds a duplicate item to an array", () => {
  // Arrange
  const arr = ["cheddar", "mozarella", "gouda"];
  const item = "cheddar";
  // Act
  const result = addItem(arr, item);
  // Assert
  expect(result).toBe(["cheddar", "mozarella", "gouda", "cheddar"]);
});

// Test4
test("adds an item of a different data type to an array", () => {
  // Arrange
  const arr = ["cheddar", "mozarella", "gouda"];
  const item = 4;
  // Act
  const result = addItem(arr, item);
  // Assert
  expect(result).toBe(["cheddar", "mozarella", "gouda", 4]);
});

// Test5
test("adds an undefined item to an array", () => {
  // Arrange
  const arr = ["Aryna", "Coco", "Elena"];
  const item = undefined;
  // Act
  const result = addItem(arr, item);
  // Assert
  expect(result).toBe(["Aryna", "Coco", "Elena", undefined]);
});
