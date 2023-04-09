import Stack from "/stack.js";
export default class DecimalToBinary {
    constructor(){
        this.stack= new Stack()
    }
    printStack(number){
        let res = number%2
        if(number/2>=0){
            this.stack.push(res)
        }
        console.log(this.stack.isEmpty())
        
        console.log(number%2)
    }
}