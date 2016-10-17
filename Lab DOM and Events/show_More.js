Welcome to the "Show More Text Example".
<a href="#" id="more" onclick= "showText()">Read more …</a>
<span id="text" style= "display:none">Welcome to JavaScript and DOM.</span>
<script>
function showText() {

return function (){


        let num1 = document.getElementById('num1').value;
        let num2 = document.getElementById('num2').value;

        let sum = Number(num1)+Number(num2);

        document.getElementById('sum').value = sum;


}



}
</script>
