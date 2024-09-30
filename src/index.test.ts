import safeNumber from "."

describe(`${__filename}`, () => {
    it("Should pass with a valid positive number", () => {
        const result = safeNumber(10)
        expect(result).toBe(10)
    })
    it("Should pass with a valid negative number", () => {
        const result = safeNumber(-10)
        expect(result).toBe(-10)
    })
    it("Should pass with a valid positive infinity", () => {
        const result = safeNumber(Infinity)
        expect(result).toBe(0)
    })
    it("Should pass with a valid negative infinity", () => {
        const result = safeNumber(-Infinity)
        expect(result).toBe(0)
    })
    it("Should pass with a valid NaN", () => {
        const result = safeNumber(NaN)
        expect(result).toBe(0)
    })
    it("Should pass with a valid undefined", () => {
        const result = safeNumber(undefined)
        expect(result).toBe(0)
    })
    it("Should pass with a valid null", () => {
        const result = safeNumber(null)
        expect(result).toBe(0)
    })
    it("Should pass with a valid boolean true", () => {
        const result = safeNumber(true)
        expect(result).toBe(1)
    })
    it("Should pass with a valid boolean false", () => {
        const result = safeNumber(false)
        expect(result).toBe(0)
    })
    it("Should pass with a valid string", () => {
        const result = safeNumber("123abc")
        expect(result).toBe(0)
    })
    it("Should pass with a valid number string", () => {
        const result = safeNumber("123")
        expect(result).toBe(123)
    })
    it("Should pass with a valid array", () => {
        const result = safeNumber([1, "test"])
        expect(result).toBe(0)
    })
    it("Should pass with a valid object", () => {
        const result = safeNumber({ test: 123 })
        expect(result).toBe(0)
    })
    it("Should pass with a valid function", () => {
        const result = safeNumber(() => { })
        expect(result).toBe(0)
    })
    it("Should pass with a valid large number", () => {
        const result = safeNumber(Math.pow(2, 53))
        expect(result).toBe(0)
    })
    it("Should pass with a valid large negative number", () => {
        const result = safeNumber(-Math.pow(2, 53))
        expect(result).toBe(0)
    })
})