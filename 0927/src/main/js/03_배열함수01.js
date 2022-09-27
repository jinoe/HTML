heros = ["아이먼맨", "스파이더맨", "캡틴아메리카"]

// for Each : 함수 인수로 배열값 들을 전달한다.
function print(hero) {
	//console.log(hero);
}

heros.forEach(print);

heros.forEach(function(hero) {
	//console.log(hero);
})

const print2 = (hero) => console.log(hero);

heros.forEach(print2);

heros.forEach((hero) => console.log(hero));



const array = [1, 2, 3, 4, 5, 6, 7, 8];
const array2 = [];

for (i of array) {
	array2.push(i * i);
}
console.log(array2);

const array3 = [];
array.forEach((i) => array3.push(i * i));
console.log(array3);

// map(): forEach에 return 까지 추가됨

const array4 = array.map(
	function(i) {
		return i * i;
	});

console.log(array4);

const array5 = array.map((i) => { return i * i })
console.log("array5 " + array5);

// 배열 내부의 객체에서 key가 text인 value만 가져와 새 배열을 만든다.
const items = [
	{
		id:1,
		text:"hello"
	},
	{
		id:2,
		text:"bye"
	}
]
const values = []
for(i of items){
	values.push(i['text']);
}
console.log(values)

const values2 = []
items.forEach((i)=> values2.push(i.text))
console.log(values2)

values3 = items.map( i => i.text);
console.log(values3);


