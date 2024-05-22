function getArea(arr) {
    // Using Heron's formula
    const s = (arr[0] + arr[1] + arr[2]) / 2; // semi-perimeter
    const a = Math.sqrt(s*(s-arr[0])*(s-arr[1])*(s-arr[2]))
    return a;
}

// Test
const egSides=[10, 20, 15]; // Any side of the triangle must be less than the sum of the other two.
const egArea = getArea(egSides);
console.log(egArea); // Expecting 72.618