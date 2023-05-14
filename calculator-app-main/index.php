<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <!-- displays site properly based on user's device -->
        <link rel="stylesheet" href="style.css" />
        <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="./images/favicon-32x32.png"
        />

        <title>Frontend Mentor | Calculator app</title>
    </head>
    <body>
        <div class="wrapper">
            <div class="content">
                <div class="top">
                    <div class="left">calc</div>
                    <div class="right"></div>
                </div>
                <div class="result">
                    <div id="number" class="resultenummber">0</div>
                </div>
                <div class="calculatorContainer">
                    <div class="calculator">
                        <div id="7" onclick="clicked(this)" class="number">
                            7
                        </div>
                        <div id="8" onclick="clicked(this)" class="number">
                            8
                        </div>
                        <div id="9" onclick="clicked(this)" class="number">
                            9
                        </div>
                        <div id="del" onclick="clicked(this)" class="number">
                            del
                        </div>
                        <div id="4" onclick="clicked(this)" class="number">
                            4
                        </div>
                        <div id="5" onclick="clicked(this)" class="number">
                            5
                        </div>
                        <div id="6" onclick="clicked(this)" class="number">
                            6
                        </div>
                        <div id="+" onclick="clicked(this)" class="number">
                            +
                        </div>
                        <div id="1" onclick="clicked(this)" class="number">
                            1
                        </div>
                        <div id="2" onclick="clicked(this)" class="number">
                            2
                        </div>
                        <div id="3" onclick="clicked(this)" class="number">
                            3
                        </div>
                        <div id="-" onclick="clicked(this)" class="number">
                            -
                        </div>
                        <div id="dot" onclick="clicked(this)" class="number">
                            .
                        </div>
                        <div id="0" onclick="clicked(this)" class="number">
                            0
                        </div>
                        <div id="/" onclick="clicked(this)" class="number">
                            /
                        </div>
                        <div id="*" onclick="clicked(this)" class="number">
                            *
                        </div>
                    </div>
                    <div class="bottom">
                        <div id="clear" onclick="clicked(this)" class="clear">
                            clear
                        </div>
                        <div id="equal" onclick="clicked(this)" class="equal">
                            =
                        </div>
                    </div>
                </div>
                <script>
                    var current = 1;
                    var number1 = "";
                    var number2 = "";
                    var operator = "";
                    var result = "";
                    function clicked(e) {
                        value = e.id;
                        if (value == "clear") {
                            document.getElementById("number").innerHTML = "";
                            number1 = "";
                            number2 = "";
                            operator = "";
                            result = "";
                            current = 1;
                            return;
                        } else if (value == "del") {
                            if (current == 1) {
                                number1 = number1.slice(0, -1);
                                document.getElementById("number").innerHTML =
                                    number1;
                                return;
                            } else {
                                number2 = number2.slice(0, -1);
                                document.getElementById("number").innerHTML =
                                    number2;
                                return;
                            }
                        } else if (
                            value == "+" ||
                            value == "-" ||
                            value == "*" ||
                            value == "/"
                        ) {
                            operator = value;
                            current = 2;
                            document.getElementById("number").innerHTML = value;
                            return;
                        } else if (value == "dot") {
                            if (current == 1) {
                                number1 += ".";
                                document.getElementById("number").innerHTML =
                                    number1;
                                return;
                            } else {
                                number2 += ".";
                                document.getElementById("number").innerHTML =
                                    number2;
                                return;
                            }
                        } else if (value == "equal") {
                            number2 =
                                document.getElementById("number").innerHTML;
                            if (operator == "+") {
                                result = parseInt(number1) + parseInt(number2);
                                number1 =  result;
                                current = 1;
                                document.getElementById("number").innerHTML =
                                    result;
                                return;
                            } else if (operator == "-") {
                                result = parseInt(number1) - parseInt(number2);
                                number1 =  result;
                                current = 1;
                                document.getElementById("number").innerHTML =
                                    result;
                                return;
                            } else if (operator == "*") {
                                result = parseInt(number1) * parseInt(number2);
                                number1 =  result;
                                current = 1;
                                document.getElementById("number").innerHTML =
                                    result;
                                return;
                            } else if (operator == "/") {
                                result = parseInt(number1) / parseInt(number2);
                                number1 =  result;
                                current = 1;
                                document.getElementById("number").innerHTML =
                                    result;
                                return;
                            }
                        }
                        // if parsed var value is 0-9
                        else if (parseInt(value) >= 0 && parseInt(value) <= 9) {
                            if (current == 1) {
                                number1 += parseInt(value);
                                document.getElementById("number").innerHTML =
                                    number1;
                                return;
                            } else {
                                number2 += parseInt(value);
                                document.getElementById("number").innerHTML =
                                    number2;
                                return;
                            }
                        }
                    }
                </script>
            </div>
        </div>
    </body>
</html>
