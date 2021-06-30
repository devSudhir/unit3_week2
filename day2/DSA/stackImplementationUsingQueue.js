function runProgram(input) {
    let newInput = input.split("\n");
    let loopTimes = Number(newInput[0]);
    let q1 = [];
    let q2 = [];

    for (let i = 1; i <= loopTimes; i++){
        let arr = newInput[i].split(" ");
        if (arr[0] == "0") {
            q1.push(arr[1]);
            for (let j = 0; j < q2.length; j++){
                q1.push(q2[j]);
            }
            q2 = q1.slice();
            q1 = [];
        } else if (arr[0] == "1") {
            console.log(q2[0]);
        } else {
            q2.shift();
        }
    }
}
input = `6
0 1
0 2
0 3
1 
2
1`;
runProgram(input);