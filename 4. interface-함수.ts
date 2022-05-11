interface Add {
    (num1:number, num2:number): number
}

const add: Add = function(x, y){
    return x + y;
}

add(10, 20); // 30

interface isAdult{
    (age:number): boolean;
}

const a: isAdult = (age) => {
    return age > 19;
}

a(33) //true