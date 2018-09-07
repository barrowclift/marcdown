UML
===

Rarely, I'll find myself needing some way to render a flow chart or sequence diagram. For those times, UML with [flowchart.js](http://flowchart.js.org) and [sequence-diagram.js](https://bramp.github.io/js-sequence-diagrams/) is fully supported (though the `enable_uml` option and `superfences` extension will need to be enabled in Markdown Preview's settings). This includes full support for Marcdown's dark mode, too!

Below is a flow chart example (example obtained from [typora.io](http://support.typora.io/Draw-Diagrams-With-Markdown/#flowchart)):

```flow
st=>start: Start
op=>operation: Your Operation
cond=>condition: Yes or No?
e=>end

st->op->cond
cond(yes)->e
cond(no)->op
```

Here is a sequence diagram example (again, example obtained from [typora.io](http://support.typora.io/Draw-Diagrams-With-Markdown/#sequence)):

```sequence
Alice->Bob: Hello Bob, how are you?
Note right of Bob: Bob thinks
Bob-->Alice: I am good thanks!
```
