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
    <script src="counter.js"></script>
```
3. write codes in the your script
4. install the babel package to transpile the jsx to plain javascript
```bash
    npm init -y
    npm install babel-cli@6 babel-preset-react-app@3
```
5. move the counter.js to src/counter.js
6. run the command: `npx babel --watch src --out-dir . --presets react-app/prod`
7. minify javascript files
    - change react scripts to production version
    ```html
    <script src="https://unpkg.com/react@18/umd/react.production.min.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js" crossorigin></script>
```
    - install terser to minify your script
    ```bash
        npm install terser
        npx terser -c -m -o counter.min.js -- counter.js
    ```
    - import your minified script