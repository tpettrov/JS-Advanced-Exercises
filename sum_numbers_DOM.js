<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Sum Numbers</title>

    <input type="text" id="num1"> +
    <input type="text" id="num2"> =
    <input type="text" value="calc" readonly="readonly" id="sum">


    <input type="button" value="calc" onclick="calc()">

    <script>
        function calc() {

            let num1 = document.getElementById('num1').value;
            let num2 = document.getElementById('num2').value;

            let sum = Number(num1)+Number(num2);

            document.getElementById('sum').value = sum;

        }

    </script>




</head>
<body>

</body>
</html>