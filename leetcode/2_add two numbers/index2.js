var addTwoNumbers = function(l1, l2) {

const generateIntegerNo = (inp) => {
	return inp.reduce((acc, cur) => {
  	return acc = (acc * 10) + cur;
  }, 0)
}
    const n1 = generateIntegerNo(l1);
    const n2 = generateIntegerNo(l2);
    console.log(n1, n2);
    
    let sumOfNos = n1 + n2;
    return String(sumOfNos).split("").map(Number);
};

addTwoNumbers([2,4,3], [5,6,4]);