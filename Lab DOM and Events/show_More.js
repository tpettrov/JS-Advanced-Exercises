Welcome to the "Show More Text Example".
<a href="#" id="more" onclick= "showText()">Read more …</a>
<span id="text" style= "display:none">Welcome to JavaScript and DOM.</span>
<script>
function showText() {
    document.getElementById('text').style.display = 'inline';
    document.getElementById('more').style.display = 'none';
}
</script>
