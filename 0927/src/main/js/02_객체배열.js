// 객체 배열
const objects = [
	{
		name: '멍멍이'
	},
	{
		name: '야옹이'
	}
]
console.log(objects);
console.log(objects.length);
console.log(objects[0]);
console.log(objects[1]);

// 객체배열 요소 추가
objects.push(
	{ name: '거북이' }
);
console.log(objects);


// Object.values(obj) => value값들 반환
// Object.keys(obj) => key값들 반환
const doggy = {
	name : "멍멍이",
	sound : "멍멍",
	age : 2
}
console.log(doggy);
console.log(Object.values(doggy));
console.log(Object.keys(doggy));

values = Object.values(doggy);
for (let i=0;i<Object.values(doggy).length;i++){
	console.log(Object.values(doggy)[i]);
}

// of 는 배열에 사용 => value 값 반환 (파이썬의 in)
for (i of values){
	console.log("of:"+i);
}

// in 은 배열이 오면 index를 객체가 오면 key값을 반환
for (i in values){
	console.log(i);
}

for (i in doggy){
	console.log(doggy[i]);
}

// Object.entries(): 객체의 key와 value를 한쌍으로 가져온다.
const entries = Object.entries(doggy);
console.log(entries);
for (entry of entries){
	console.log(entry);
}
for (entry in entries){
	console.log(entries[entry]);
}

// 접근방법
console.log(doggy.name);
console.log(doggy['name']);
