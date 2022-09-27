
const bull = {
	_name : "황소",

	get name() {
		console.log(this._name);
		return this._name;
	},
	
	set name(name){
		this._name = name;
	}
};

bull.name;
bull.name = "화앙소";
bull.name;

const number2 = {
	_a : 1,
	_b : 2,
	_sum : 3,
	
	get a(){
		return this._a;
	},
	get b(){
		return this.b;
	},
	set a(a){
		this._a = a;
	},
	set b(b){
		this._b = b;
	}
}
console.log(number2.a);
number2._a = 3;
number2.a = 4;
console.log(number2.a);
