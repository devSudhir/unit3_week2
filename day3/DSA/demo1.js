class Queue {
    constructor()
    {
        this.S1 = [];
        this.S2 = [];
        this.top1 = -1;
      	this.top2 = -1;
    }
    push(value) {
    	//write your code here..
      		this.S1.push(value);
            this.top1++;
            this.S2 = [];
            this.top2 = -1;

            for (let j = this.top1; j > -1; j--){
                this.S2.push(this.S1[j]);
                this.top2++;
            }
    }
    pop() {
     	//write your code here..
      		this.S2.pop();
            this.top2--;
            this.S1 = [];
            this.top1 = -1;

            for (let j = this.top2; j > -1; j--){
                this.S1.push(this.S2[j]);
                this.top1++;
            }
    }
    front() {
    	//write your code here..
      	return (this.S2[this.top2]);
    }
    isEmpty() {
    	//write your code here..
    }
}
function runProgram(input) {
    let newInput = input.split("\n");
    let testCases = Number(newInput[0]);
  	let q = new Queue();
    for (let i = 1; i <= testCases; i++){
        let arr = newInput[i].split(" ");
  		if (arr[0] == 0) {
            q.push(arr[1]);
        } else if (arr[0] == 1) {
            console.log(q.front());
        } else {
            q.pop()
        }
	}
}
let input = `6
0 1
0 2
0 3
1 
2
1`;
runProgram(input);