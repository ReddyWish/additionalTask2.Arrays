function getMathResult(expression) {
    let sign = expression.find(item => item === '+' ||
        item === '-' ||
        item === '*' ||
        item === '/' ||
        item === '**' ||
        item === '>' ||
        item === '<' ||
        item === '=');
    let expression1
    if (sign) {
        expression1 = expression.filter(item => +item)
        expression1.splice(1, 0, sign)
    } else {
        alert('error')
    }

    if (expression1.length < 3) {
        alert('error')
    } else {

        switch (expression1[1]) {
            case '>':
                console.log(+expression1[0] > +expression1[2]);
                break;
            case '<':
                console.log(+expression1[0] > +expression1[2]);
                break;
            case '=':
                console.log(+expression1[0] === +expression1[2]);
                break;
            case '/':
                console.log(+expression1[0] / +expression1[2]);
                break;
            case '*':
                console.log(+expression1[0] * +expression1[2]);
                break;
            case '+':
                console.log(+expression1[0] + +expression1[2]);
                break;
            case '-':
                console.log(+expression1[0] - +expression1[2]);
                break;
        }
    }

}

getMathResult([100, 'zsddddddd', 'asd', 'dfsdf', '+', '100'])
