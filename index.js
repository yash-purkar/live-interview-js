const arr = [
  { name: "arnav", roll: 5 },
  { name: "laksh", roll: 2 },
  { name: "yuvraj", roll: 3 },
  { name: "sarthak", roll: 4 },
  { name: "vishal", roll: 1 },
];

const sortedArr = [...arr].sort((a,b) => a?.roll - b?.roll);
// console.log(sortedArr)

sortedArr[0].name = "Yash";
console.log(arr);
console.log(sortedArr)

//
// less than2 roll

const getFilteredArr = (arr,cb) => {
  const newArr = [];
  for(let i=0;i<arr.length;i++){
      if(cb(arr[i])) {
        newArr.push(arr[i])
      }
  }
  return newArr;
}

const isLessThanEqualTo2 = (data) => data?.roll <= 2;
const filteredArr = getFilteredArr(sortedArr,isLessThanEqualTo2);
// console.log(filteredArr)