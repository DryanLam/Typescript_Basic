class BasicClass{
    // Properties
    private _id: number;
    private _name: string;
    private _state: string;

    // Constructor
    constructor(id: number, name: string, state: string){
        this._id = id;
        this._name = name;
        this._state = state;
    }

    // Getter & Setter
    get name(){
        return this._name;
    }

    set name(v:string){
        this._name = v;
    }

    // Functions
    showBasicClassInfo(){
        console.log(`${this._id} - ${this._name} - ${this._state}`);
    }
}

let taskObj = new BasicClass(1, 'Dryan','Vietnam');
taskObj.showBasicClassInfo();

console.log(taskObj.name);
taskObj.name = 'Olla';
console.log(taskObj.name);
