<h1 align="center">
  safe-number 🔢
</h1>
<p align="center">
The safeNumber function ensures that any value passed to it is safely converted to a valid, finite number. Whether you’re dealing with strings, objects, arrays, or even Infinity, this utility guarantees that the result is a valid number or 0 in cases where conversion is not possible.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/safe-number">
    <img src="https://img.shields.io/npm/v/safe-number.svg" alt="Version" />
  </a>
  <a href="https://www.npmjs.com/package/safe-number">
    <img src="https://img.shields.io/npm/dw/safe-number.svg" alt="Downloads/week" />
  </a>
  <a href="https://github.com/Sawannrl123/safe-number/blob/main/package.json">
    <img src="https://img.shields.io/npm/l/safe-number.svg" alt="License" />
  </a>
  <a href="https://github.com/Sawannrl123/safe-number/network/members">
    <img src="https://img.shields.io/github/forks/Sawannrl123/safe-number" alt="Forks on GitHub" />
  </a>
  <a href="https://github.com/Sawannrl123/safe-number/stargazers">
    <img src="https://img.shields.io/github/stars/Sawannrl123/safe-number" alt="Forks on GitHub" />
  </a>
  <img src="https://badgen.net/bundlephobia/minzip/safe-number" alt="minified + gzip size" />
</p>

## Why?

- ![Bundle size](https://badgen.net/bundlephobia/minzip/safe-number)
- **No dependencies**
- Light weighted
- Typescript support
- Works on both server and client

## 🚀 Features

- Reliable Conversion: Safely handles values like null, undefined, objects, arrays, and more.
- Finite Number Guarantee: Ensures that values like Infinity and large numbers beyond JavaScript’s safe integer range (2^53) are handled correctly.
- Cross-Platform: Works seamlessly in both browser environments and Node.js.

## ✨ Benefits

#### ✅ Input Validation

Ensures that data is valid for calculations and numeric operations, preventing application crashes or errors when dealing with unpredictable inputs.

**Example**
```ts
const value = safeNumber("123");  // Returns 123
```

#### 🔒 Prevent Crashes

Avoids runtime errors caused by invalid or non-numeric data, ensuring your app doesn’t break due to bad input.

**Example**
```ts
const value = safeNumber(null);  // Returns 0
```

#### 🎯 Finite Value Handling

Protects your app from issues with very large numbers or Infinity, which can disrupt calculations if not handled properly.

**Example**
```ts
const value = safeNumber(Infinity);  // Returns 0
```


## 🔧 Usage

```bash
npm install safe-number # yarn add safe-number
```

Then use in your project:

```ts
const safeNumber = require('safe-number');

const num = safeNumber("123abc");  // Returns 0
const safeNum = safeNumber(Infinity);  // Returns 0
```

```ts
// Test cases
console.log(safeNumber(10)); // 10
console.log(safeNumber("-10")); // -10
console.log(safeNumber(Infinity)); // 0
console.log(safeNumber(() => {})); // 0
console.log(safeNumber([])); // 0
console.log(safeNumber({})); // 0
console.log(safeNumber(null)); // 0
console.log(safeNumber(undefined)); // 0
console.log(safeNumber(true)); // 1
console.log(safeNumber(false)); // 0
console.log(safeNumber(Math.pow(2, 53))); // 0 (because it exceeds MAX_SAFE_INTEGER)
```

### ⚠️ Why You Need safeNumber:

1. **Invalid Input Handling 🤔**:- Without this function, passing invalid or unexpected data types into number-based operations can cause unpredictable behavior (e.g., NaN, errors, or application crashes).
2. **Infinity and Large Numbers 🔢**:- Unbounded numbers like Infinity or values beyond JavaScript’s safe integer range (2^53) can introduce bugs into your calculations if not properly constrained.
3. **Cross-Environment Consistency 🌍**:- Whether in the browser or on the server (Node.js), safeNumber ensures that all numeric operations are predictable and error-free.

#### Links
- [Github Repository](https://github.com/Sawannrl123/safe-number)
- [NPM Page](https://www.npmjs.com/package/safe-number)

#### 📜 License
This module is open-sourced under the MIT License.
