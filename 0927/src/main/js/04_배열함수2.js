/* 
	자바스크립트의 reduce함수는 배열의 각 요소를 순회하며 callback함수의 실행 값을 누적하여 하나의 결과값을 반환 합니다.
	arr.reduce(callback[, initialValue])
	
	 *callback function
	다음 4가지의 인수를 가집니다.
	accumulator - accumulator는 callback함수의 반환값을 누적합니다.
	currentValue - 배열의 현재 요소
	index(Optional) - 배열의 현재 요소의 인덱스
	array(Optional) - 호출한 배열
	
	callback함수의 반환 값은 accumulator에 할당되고 순회중 계속 누적되어 최종적으로 하나의 값을 반환합니다.
	
	initialValue(Optional) => 초깃값
	최초 callback함수 실행 시 accumulator 인수에 제공되는 값, 초기값을 제공하지 않을경우 배열의 첫 번째 요소를 사용하고, 빈 배열에서 초기값이 없을 경우 에러가 발생합니다.
*/

numbers = [1,2,3,4,5]

numbers.reduce(
	function(accumulator, currentObject){
		console.log(accumulator);
		return accumulator+currentObject;
	});
	
const a = numbers.reduce(
	(acc, currentValue,index,arr) => {
		console.log(currentValue);
		console.log(arr[index]);
		return acc+currentValue;
	}
)
console.log("a: "+a);

const b = numbers.reduce((acc,current) => acc+current);
console.log("b: " + b);

numbers2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

let count = 0;

numbers2.forEach(
	(num) => {
		if(num>10){
			count++;
		}
	}
)
console.log(count);

count = 0;
numbers2.reduce(
	(arr,cv) => {
		if(cv>10){
			count++;
		}
	}
)
console.log(count);