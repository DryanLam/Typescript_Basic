interface IChienbinh{
    id?: number;
    name?: string;
    sleep(): void;
    eat(): void;
}

interface IActions{
    fly(): void;
}

class Tools{
    sword(){
        console.log('sword');
    }
}

class Superman extends Tools implements IActions, IChienbinh{
    private _id: number;
    private _name: string;

    constructor(id: number, name: string){
        super(); // Must have 'super'
        this._id = id;
        this._name = name;
    }

    sleep(){
        console.log('sleep');
    };
    
    eat(){
        console.log('sleep');
    }

    fly(){
        console.log('fly');
    }
}


let john = new Superman(1, 'John');
john.eat();
john.fly();
john.sleep();
john.sword();
