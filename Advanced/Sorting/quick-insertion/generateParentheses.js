function generateParenthesis(A) {
    const result = [];

    const generate = (myStr, open, close) => {
        if (myStr.length === 2 * A) {
            result.push(myStr);
            return;
        }

        if (open < A) {
            generate(myStr + "(", open + 1, close);
        }

        if (close < open) {
            generate(myStr + ")", open, close + 1);
        }

    };

    generate("", 0, 0)

    return result;
}



console.log(generateParenthesis(3));// 239
