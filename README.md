# trimMiddle

This is a package that shortens strings like Finder on Mac does. Instead of trimming from the start or end it trims the string in the middle and adds a filler char.

For example:

`This is a long string that will be trimmed`

Will become:

`This is …trimmed`

You call the functionality with the `trimMiddle` method, which takes three parameters:

* `str` - the string to split (mandatory).
* `length` - an integer, preset to 16 (optional).
* `replaceString` - string to add in the middle, preset to `…` (optional)

For example:

`trimMiddle('This is a long string that will be trimmed', 8, ↔')`

results in:

`This↔med`

The method splits sentences with emoji, unlike a `substring()` solution would. You can try it using the [demo page](https://codepo8.github.io/trimMiddle/demo.html) or `demo.js` on the commmand line.

Use it via npm:

```
npm -i trimmiddle
```

Or the client-side package via unpkg

```HTML
<script src="https://unpkg.com/trimmiddle@0.1.0/clientside.js"></script>
```
