function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply (a, b ) {
    return a * b;
}

function divide(a, b) {
    if (b === 0 ) throw new Error("Division by zero");
    return a / b;
}

/*
    Summary of Git Bisect Workflow
    Step	               Command	                    Description
    Start bisect	       git bisect start	            Begin binary search
    Mark bad commit	       git bisect bad	            Usually current HEAD
    Mark good commit	   git bisect good <commit>	    Old commit without bug
    Test each commit	    git bisect good/bad	        Repeat until first bad commit is found
    Finish	               git bisect reset	            Exit bisect mode

After this workflow, you know exactly which commit broke your code. 
*/