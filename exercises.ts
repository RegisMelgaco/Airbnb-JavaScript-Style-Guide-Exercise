// https://github.com/armoucar/javascript-style-guide
// 1. Tipos

var original_primitive: number = 20;
var copy_1: number = original_primitive
copy_1 += 10

console.log("copy_1", copy_1, "original_primitive", original_primitive)

var original_complex: number[] = [10, 20]
var copy_2: number[] = original_complex
copy_2[0] += 10

console.log("copy_2", copy_2, "original_complex", original_complex)

var original_complex_obj: { name: string } = { name: "Régis" }
var copy_3: { name: string } = original_complex_obj
copy_3.name = "Jully"

console.log("copy_3", copy_3, "original_complex_obj", original_complex_obj)

// 2. Objetos

// bad
var bad_object = new Object();

// good
var good_object = {};

console.log("bad_object", bad_object, "good_object", good_object)

// bad
var bad_superman = {
    default: { clark: 'kent' },
    private: true
};

// good
var good_superman = {
    defaults: { clark: 'kent' },
    hidden: true
};

console.log("bad_superman", bad_superman, "good_superman", good_superman)