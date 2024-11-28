const num = [1, 2, 3, 4, 5, 1, 6, 2, 7, 1, 3];
const arr = [];
num.filter((n) => {
    if(!arr.includes(n)) {
        arr.push(n);
    }
});
console.log(arr);
// [1, 2, 3, 4, 5, 6, 7]