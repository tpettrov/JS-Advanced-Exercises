<ul id="items">
    <li>first item</li>
<li>second item</li>
<li>third item</li>
</ul>
<textarea id="result"></textarea>
    <br>
    <button onclick="extractText()">Extract Text</button>
<script>
function extractText() {
    return function () {

        let items = document.querySelectorAll('ul#items li');

        let textarea = document.querySelector('#result');

        for (let item of items) {

            textarea.value += item.textContent + "\n";

        }


    }
}
</script>
