abstract class Laptop{
    
    public abstract mainBoard():string;

    public keyboard(){
        console.log('keyboard');
    }
}

class LaptopDell extends Laptop{
    public mainBoard(){
        return 'Dell';
    }
}

let objLaptop = new LaptopDell();
objLaptop.keyboard();
let ltBoard = objLaptop.mainBoard();
console.log(ltBoard);