const myObj = {
    fulltName : "Emre Dursun",
    age : 35,
    hair : "Black"
}

const myArr = [24, 2, 345, 24];

// .filter()
    const filterMyArr = myArr.filter(el => el >= 24);
    console.log(filterMyArr);

// .map()
const mapMyArr = myArr.map(el => el + 10).filter(el => el > 12);
console.log(mapMyArr)

// .reduce()
const reduceMyArr = myArr.reduce(
    (acc, val) => 
    {
        return acc + val;
    }, 100); // 100 is initial value
console.log(reduceMyArr);