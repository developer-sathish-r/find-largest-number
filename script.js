
function result() {
    document.getElementById("error").innerHTML = "";
    document.getElementById("large").innerHTML = "";
    let input = document.getElementById("area").value.trim();

    let data = input.replace(/\s+/g, '').split(',');

    const filterdata = data.filter((n) => n);

    let num1 = parseInt(filterdata[0]);
    let num2 = parseInt(filterdata[1]);


    if (input === ""|| filterdata.length==0 ) {
        document.getElementById("large").innerHTML = ""
        document.getElementById("error").innerText = 'Please enter a number';
        return;
    }


    else if (/([?!"'~&%$*@#]+)$/.test(data.toString())) {
        document.getElementById("large").innerHTML = ""
        document.getElementById("error").innerText = 'Special Character(s) not allowed';
        return;

    }
    else if ((/[A-Za-z]+$/.test(input))) {
        document.getElementById("large").innerHTML = ""
        document.getElementById("error").innerText = ' letter(s) not allowed';
        return;
    }


    else if (filterdata.length === 0) {
        document.getElementById("large").innerHTML = ""
        document.getElementById("error").innerText = 'Please enter a number';

    }

    else if (filterdata.length == 1) {
        document.getElementById("large").innerHTML = ""
        document.getElementById("error").innerHTML = "Please enter one more number";

    }

    else if (filterdata.length === 3) {
        document.getElementById("large").innerHTML = ""
        document.getElementById("error").innerHTML = "Please enter exactly two number only";

    }
    else if (num1 === num2) {
            document.getElementById("error").innerText = 'Both numbers are same';
        } else {
    let largest = num1 > num2 ? num1 : num2;
    
        document.getElementById("error").innerHTML = "";
        document.getElementById("large").innerText = `The largest number is: ${largest}`;

        }
}

// Reset Funciton
function __clear() {
    document.getElementById("area").value = " ";
    document.getElementById("error").innerHTML = "";
    document.getElementById("large").innerHTML = "";
}


