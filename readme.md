# steps for adding react to a webpage
1. create a empty element with a id, this element will be use to place your react component
```html
<div id="root">
</div>
```
2. import *react* scripts and your script by `<script>` tag, right before the closing `</body>` tag
```html
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/jsx"></script>
```
3. write codes in the your script