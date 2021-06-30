function runProgram(input) {
    let newInput = input.split("\n");
    let loopTimes = Number(newInput[0]);

    let q1 = [];
    let q2 = [];
    let q3 = [];
    let q4 = [];
    let master = [];

    for (let i = 1; i <= loopTimes; i++){
        let operations = newInput[i].split(" ");
        if (operations[0] == "E") {
            switch (operations[1]) {
                case "1": q1.push(operations[2]);
                    if (master.indexOf(operations[1]) == -1) {
                        master.push(operations[1]);
                    }
                    break;
                case "2": q2.push(operations[2]);
                    if (master.indexOf(operations[1]) == -1) {
                        master.push(operations[1]);
                    }
                    break;
                case "3": q3.push(operations[2]);
                    if (master.indexOf(operations[1]) == -1) {
                        master.push(operations[1]);
                    }
                    break;
                case "4": q4.push(operations[2]);
                    if (master.indexOf(operations[1]) == -1) {
                        master.push(operations[1]);
                    }
                    break;
            }
        } else {
            switch (master[0]) {
                case "1": console.log(master[0], q1.shift());
                    if (q1.length == 0) {
                        master.shift();
                    }
                    break;
                case "2": console.log(master[0], q2.shift());
                    if (q2.length == 0) {
                        master.shift();
                    }
                    break;
                case "3": console.log(master[0], q3.shift());
                    if (q3.length == 0) {
                        master.shift();
                    }
                    break;
                case "4": console.log(master[0], q4.shift());
                    if (q4.length == 0) {
                        master.shift();
                    }
                    break;
            }
        }
        
    }
}
let input = `5
E 1 1
E 2 1
E 1 2
D
D`;
runProgram(input);