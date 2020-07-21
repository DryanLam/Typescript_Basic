/*
fucntion showNumberInfo(x: number): number{
	return x;
}

fucntion showStringInfo(x: string): string{
	return x;
}

Use generic like showInfo as below
*/

function showInfo<T>(x: T):T {return x;};

console.log(showInfo<number>(123));
console.log(showInfo<string>("abc"));



//--- Class generic
class StudyGeneric{
	static printArray<T>(params: T[]): void{
		console.log(params);
	}
}
StudyGeneric.printArray<any>([1,2,3]);
StudyGeneric.printArray<any>(["abc", true]);
StudyGeneric.printArray<any>(["abc", true, 100, [1,2,3]]);


//--- Shortcut generic
// ID NAME PRICE	string, string, number
// ID NAME PRICE	number, string, string
// ID NAME PRICE	string, number, boolean
class Product <A, B, C> {
	id: A;
	name: B;
	price: C;
	
	constructor(id: A, name: B, price: C){
		this.id = id;
		this.name = name;
		this.price = price;
	}
	
	showProductInfo(){
		console.log(`${this.id} - ${this.name} - ${this.price}`)
	}
}

let product1 = new Product<string,string,number>("001","Mouse",5.00);
let product2 = new Product<number,string,string>(1,"Mouse","5.00");
let product3 = new Product<string,number,boolean>("001",123,true);
product1.showProductInfo();
product2.showProductInfo();
product3.showProductInfo();



