function calc(number_1, number_2, operation){
    
    if (typeof number_1 !== "number" || typeof number_2 !== "number" ){
        throw new Error("Invalid input");
    } 


    if (operation == "+"){
        return number_1 + number_2
    }

    else if (operation == "-"){
        return number_1 - number_2
    }
    else if (operation == "/"){
        if (number_2 == 0){
            throw new Error("Division by zero");
        }
        return number_1 / number_2
    }
    else if (operation == "*"){
        return number_1 * number_2
    }

    else{
        throw new Error("Error. Invalid operator");
    }



}

export { calc };
