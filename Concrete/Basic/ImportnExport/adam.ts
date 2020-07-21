export const age = 30;

export class AdamClass{
    
    static myName = 'Adam';

    static methodInsideAdamClass(){
        console.log(`Name is inside class - ${this.myName}`);
    }
}

export function adamFunction(){
    console.log('I am Adam');
}