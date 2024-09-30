const safeNumber = require('js-safe-number').default;


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
