function runProgram(input) {
    let newInput = input.split("\n");
    let testCases = Number(newInput[0]);
    let s1 = [];
    let s2 = [];
    let top1 = -1;
    let top2 = -1;
    console.log(testCases);
    for (let i = 1; i <= testCases; i++){
        let arr = newInput[i].split(" ");
        if (arr[0] == 0) {
            s1.push(arr[1]);
            top1++;
            s2 = [];
            top2 = -1;

            for (let j = top1; j > -1; j--){
                s2.push(s1[j]);
                top2++;
            }
        } else if (arr[0] == 1) {
            console.log(s2[top2]);
        } else {
            s2.pop();
            top2--;
            s1 = [];
            top1 = -1;

            for (let j = top2; j > -1; j--){
                s1.push(s2[j]);
                top1++;
            }
        }
       // console.log(s1, s2);
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