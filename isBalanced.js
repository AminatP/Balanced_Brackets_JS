function isBalanced(str){
    // first check if the str is empty
    if (str.length == 0)
        return false;

    //initialize stack
    let stack = [];

    //loop through each elem of the string
    for (let i=0; i<str.length; i++) {
        let char = str[i];

        //put open parens in stack
        if (char == '(' || char == '{' || char == '[') {
            stack.unshift(char);
        } 
        else 
        {
            // checks if close parens match the first elem and if yes, delete it
           let top = stack[0];
            if((char == ')' &&  top != '(') ||
                (char == '}' &&  top != '{')||
                (char == ']' &&  top != '[')){
                    return false;
                }
            stack.shift();
        }
    }
    // return true if all the pairs matched
    return stack.length === 0;
}
console.log(isBalanced("")) --> false
console.log(isBalanced("({[]})")) --> true
console.log(isBalanced("({]})")) --> false
console.log(isBalanced("[{()}()]")) --> true
console.log(isBalanced("{{()}}[{()()}{}]")) --> true



  