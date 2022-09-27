class Food {
	
	constructor(name){
		this.name = name;
		this.brands = [];
	}
	
	addbrands(brand) {
		this.brands.push(brand);
	}
	
	print() {
		console.log(`${this.name}을(를) 파는 사람들 ` + this.brands.join(', '));
	}
}

const pizza = new Food("피자");
pizza.addbrands("피자헛");
pizza.addbrands("미스터피자");
pizza.print();

const chicken = new Food("치킨");
chicken.addbrands("KFC");
chicken.addbrands("교촌치킨");
chicken.addbrands("굽네치킨");
chicken.print();

class Animal{
	constructor(type,name,sound){
		this.name=name;
		this.type=type;
		this.sound=sound;
	}
	say() {
		console.log("부모함수 say(): "+this.sound);
	}
}
const dog = new Animal("개", "멍멍이","멍멍");
const cat = new Animal("고양이", "야옹이","야옹");
dog.say();

// 상속은 java와 같이 extends 예약어를 사용한다.
class Dog extends Animal{
	constructor(name,sound,age){
		// 부모클래스에서 상속받은 멤버 변수를 초기화 하기위해서 부모클래스의 생성자 호출
		super("개",name,sound);
		this.age = age;
	}
}
const dog2 = new Dog("멍멍이","멍멍",2);
dog2.say();