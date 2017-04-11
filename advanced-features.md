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

MathJax
=======

While not enabled by default, the ability to perfectly represent mathematics is crucial for mathematical note takers, so MathJax is supported by way of Markdown Preview's `enable_mathjax` option. No additional styling changes aside from MathJax's defaults are applied, this section is simply provided to demonstrate this is an available option for those that want it.

Here's a brief quick-start guide showing how to use MathJax (examples taken from [Hiltmon's "MathJax in Markdown"](http://hiltmon.com/blog/2017/01/28/mathjax-in-markdown/)):

* Centered formulae, wrap your formula in `\\[` and `\\]`.
* For inline formulae, wrap your formula in `\\(` and `\\)`.

Below is an example of a centered formula, written as `\\( ax^2 + \sqrt{bx} + c = 0 \\)`:

\\[ x = {-b \pm \sqrt{b^2-4ac} \over 2a} \\]

And here's an example of an inline formula \\( ax^2 + \sqrt{bx} + c = 0 \\, written as `\\( ax^2 + \sqrt{bx} + c = 0 \\)`.

*[UML]: Unified Modeling Language