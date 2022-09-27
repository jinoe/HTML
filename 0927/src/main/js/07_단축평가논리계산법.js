// falsy : 무조건 거짓이 되는 값 => undefined, null, 0,'' ,'NaN'

//		&& 논리계산에서 앞에조건이 true면 '&&' 뒤에 내용이 출력된다.
//		&& 논리계산에서 앞에조건이 false면 false가 출력된다.
		
console.log(true && 'hello');
console.log(false && 'hello');

const dog = {
	name:"멍멍이"
};

function getName(animal){
	console.log(animal);
	
	return animal&&animal.name; // animal이 true면 animal.name이 리턴된다. => 단축평가 논리 계산법
	
}

const name = getName(dog);
console.log(name);