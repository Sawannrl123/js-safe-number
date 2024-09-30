export function safeNumber(value: any) {
    // Convert the value to a number
    let num = Number(value);

    // Handle non-number cases using Number.isNaN and Number.isFinite
    if (Number.isNaN(num)) return 0;

    // Handle infinity and values outside the safe integer range
    if (!Number.isFinite(num) || Math.abs(num) > Number.MAX_SAFE_INTEGER) return 0;

    return num;
}

export default safeNumber;
