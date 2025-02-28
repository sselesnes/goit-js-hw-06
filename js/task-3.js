class StringBuilder {
  #value;
  constructor(initialValue) {
    this.#value = initialValue;
  }
  getValue() {
    return this.#value;
  }
  padStart(string) {
    this.#value = string + this.#value;
  }
  padEnd(string) {
    this.#value = this.#value + string;
  }
  padBoth(string) {
    this.#value = string + this.#value + string;
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."

builder.padStart("^");
console.log(builder.getValue()); // "^."

builder.padEnd("^");
console.log(builder.getValue()); // "^.^"

builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
