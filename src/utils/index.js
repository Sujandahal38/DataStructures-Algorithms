//Stack
// Functions : Push,Pop,Peek,Length
exports.palindrome = (words) => {
    const stack = [];
    let reverseWord = '';

    for (char of words) {
        stack.push(char);
    }
    for (char of words) {
        reverseWord += stack.pop();
    }
    if ( reverseWord === words) {
        return  {
            message: `${words} is a palindrome. 🎉`,
            isPalindrome: true,
        }
    }
    if ( reverseWord !== words ) {
        return  {
            message: `${words} is not a palindrome. 😢`,
            isPalindrome: false
    }
    }
}