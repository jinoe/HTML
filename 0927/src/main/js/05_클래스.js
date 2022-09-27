// 클래스
function Animal(type,name,sound){
	// 멤버 변수
	this.type = type;
	this.name = name;
	this.sound = sound;
	
	// 멤버 함수
	this.say = function(){
		console.log(this.sound);
	}
}

const dog = new Animal();
