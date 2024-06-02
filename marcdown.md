# <small>A Markdown theme for humans</small>Marcdown

I write everything in [Markdown](https://daringfireball.net/projects/markdown), but I've never been particularly satisfied with the available themes. Sure, [Github Flavored Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) is a fine default, but its overemphasis on dividing lines adds too much visual noise for my tastes. I have similar issues with other popular themes; while they each have their own strengths, they all fall short of meeting my two primary requirements:

1. Tasteful typography
2. Appearance & accent color controls

Given the nature of such specific requirements, I had no choice but to create my own Markdown theme. That theme is Marcdown&mdash;a Markdown theme designed to be just as beautiful for late night journal entries as it is functional for intense computer science notes. Give it a try, I think you're going to love it.

<ul class="toc">
<li><a href="#design">Design</a><ul>
<li><a href="#appearance-controls">Appearance Controls</a></li>
<li><a href="#typeface">Typeface</a></li>
<li><a href="#headers">Headers</a></li>
<li><a href="#links">Links</a></li>
<li><a href="#lists">Lists</a></li>
<li><a href="#strikethroughs">Strikethroughs</a></li>
<li><a href="#footnotes">Footnotes</a></li>
<li><a href="#block-quotes">Block Quotes</a></li>
<li><a href="#images">Images</a></li>
<li><a href="#code">Code</a></li>
<li><a href="#tables">Tables</a></li>
<li><a href="#admonitions">Admonitions</a></li>
<li><a href="#highlighting">Highlighting</a></li>
<li><a href="#definitions">Definitions</a></li>
<li><a href="#abbreviations">Abbreviations</a></li>
<li><a href="#keyboard-descriptions">Keyboard Descriptions</a></li>
</ul>
</li>
<li><a href="#installation">Installation</a></li>
<li><a href="#about-the-author">About the Author</a></li>
</ul>

--------------

## Design

### Appearance Controls

A lovely settings button hovers at the very top-right of the page, and disappears on scroll to not distract when reading. Clicking it reveals a suite of appearance controls, allowing you to adjust the theme to be permanently dark, permanently light, or to auto-match your system's reported theme.

Additionally, here you can change the accent color to further customize to your taste.

### Typeface

Marcdown was crafted for Apple's [San Francisco](https://developer.apple.com/fonts/) typeface, one of the [finest sans serif typefaces in recent years](https://medium.com/@mach/the-secret-of-san-francisco-fonts-4b5295d9a745#.34yepmqos). However, due to [the restrictive license](https://stackoverflow.com/a/32178596), San Francisco can't be legally bundled with Marcdown.

To account for this, it instead leverages [Craig Hockenberry's CSS](https://furbo.org/2018/03/28/system-fonts-in-css/) to use the default system font. This has a number of benefits, both in terms of load speed (no fonts to download, if viewing over the web) and in terms of platform consistency (it'll better "fit in" to your platform of choice, and if you're on an Apple platfrom, San Francisco will be used).

### Headers

All six headers adhere to a [1.2 minor third scale](http://type-scale.com) with subtle font weighting changes every level to establish and maintain its hierarchy, all without distracting underlines.

# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

### Links

As you've already seen, [this is what links look like](#links). They're rendered without an underline, and on hover yield a soft background glow with rounded corners.

### Lists

For unordered lists...

* Unordered lists look like this
* The root level uses filled in circles
	- Sub level uses dashes
	- And then...
		* The last available level uses empty circles

For ordered lists...

1. Ordered lists look like this
2. The root level uses numbers
	1. Sub levels use Latin alphabet characters
	2. And then...
		1. The last available level uses Roman numerals

### Strikethroughs

~~A good chunk of the writing process is drafting~~ Drafting is a crucial phase of the writing process. Sentences can go through countless revisions before they begin to take proper shape, and strikethroughs are perfect for maintaining a nondestructive backlog of your previous approaches for context and future reference.

Since strikethroughs are naturally text to deemphasize, strikethroughs are one of the few textual elements rendered with a lighter foreground color than the surrounding text to help guide your eyes *over* the strikethrough towards its replacement.

### Footnotes

Footnotes look like this[^example-footnote], rendered with an Instapaper-inspired popup using [bigfoot.js](http://www.bigfootjs.com). The footnotes are also still appended at the end of the document, as usual.

### Block Quotes

Marcdown renders block quotes with a slightly deemphasized foreground color, a bold left border, and italics to better distinguish quotes from surrounding prose.

> Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.
>
> —Rob Siltanen

### Images

Images span the full prose width with a pleasing border radius & drop shadow.

![Photo of an empty common area inside the Comcast Technology Center in Philadelphia](img/example-photo.webp)

### Code

Markdown's inline code snippets allow you to jot down variable names or short lines of code without breaking your train of thought. These are rendered in Marcdown with a soft background & border color with rounded corners, like so: `exampleMethod()`.

When writing code blocks without a specified syntax, the same style used for inline code is applied as a block:

	Pre-formatted text
	A format best suited for
	Writing lots of code

Finally, [when a syntax *is* specified](https://help.github.com/articles/creating-and-highlighting-code-blocks/#syntax-highlighting), a custom theme is applied inspired by Marcdown's available [accent colors](#appearance-controls).

*:warning: Technically non-standard. While most Markdown parsers support [syntax highlighting](https://www.markdownguide.org/extended-syntax/#syntax-highlighting), not all do.*

```java
public class Example {
	public static void main(String[] args) {
		System.out.println("Hello, world!");
	}
}
```

### Tables

Tables are lightly decorated with a "washboard" effect on the table body, background & border colors similar to those used in code blocks, and lovely rounded corners.

| Band Name      | Favorite Record                       |
|:---------------|:--------------------------------------|
| The Beach Boys | Pet Sounds & SMiLE                    |
| Fleet Foxes    | Helplessness Blues                    |
| Joanna Newsom  | Divers                                |
| The Beatles    | Sgt. Pepper's Lonely Hearts Club Band |

### Admonitions

*:warning: Non-standard, requires the [Admonition extension](https://python-markdown.github.io/extensions/admonition/).*

In rare cases, you may want to preface a document or section with a prominent announcement. Perhaps this is an "update" of some kind that provides some additional context to the prose. Or maybe this is a "warning" block of some kind to forewarn that what follows may require caution. Whatever the need, there's an admonition flavor for it in Marcdown.

Here's the general syntax for Markdown admonitions:

```
* !!! Type "Title"
	Description
```

For admonitions intended for light asides (which do *not* come with a left border & logo), use the `aside` type.

!!! aside "Aside Admonition"
	This is an example of the `aside` type.

Otherwise, for any other general-purpose admonition, use the `generic` type:

!!! generic "Generic Admonition"
	This is an example of the `generic` type.

From there, we get "specialty" admonitions, starting with `blue` type; this comes with a pleasing blue color to attract more attention than the general-purpose admonition types above and sport the standard `i` "information" logo.

In addition to the `blue` type, can use any of the following types, instead (they're interchangeable and treated equivalently):

* `example`
* `hint`
* `info`
* `note`
* `tip`

!!! blue "Info Admonition"
	This is an example of the `blue` type.

As a minor alternative to the `blue` type, you can instead use `question` to have Marcdown use a `?` logo, instead.

!!! question "Question Admonition"
	This is an example of the `question` type. Note that it's similar in all ways to the above `info` type, only this time sporting a `?` logo.

There's also the `green` admonition type, which acts the same as `info` above but utilizes a soothing green color.

!!! green "Green Admonition"
	This is an example of the `green` type.

As a minor alternative to the `green` type, you can instead use `success` to have Marcdown use a `✓` logo, instead.

!!! success "Success Admonition"
	This is an example of the `success` type. Note that it's similar in all ways to the above `green` type, only this time sporting a `✓` logo.

Next, there's the `yellow` admonition type, which naturally comes with an attention-grabbing yellow color and again sports the standard `i` information logo. You can also use `update` for this type as well, as they're treated equivalently and are interchangeable.

!!! yellow "Yellow Admonition"
	This is an example of the `yellow` type.

As a minor alternative to the `yellow` type, you can instead use `star` to have Marcdown use a `★` logo, instead.

!!! star "Star Admonition"
	This is an example of the `star` type. Note that it's similar in all ways to the above `yellow` type, only this time sporting a `★` logo.

Finally, there's the `red` type, which sports a concerning red color and the standard `i` logo.

!!! red "Red Admonition"
	This is an example of the `red` type.

As a minor alternative to the `red` type, you can instead use any of the follow types below to have Marcdown use a `!` logo, instead.

* `danger`
* `error`
* `warning`

!!! error "Danger Admonition"
	This is an example of the `danger`/`error`/`warning` types.

### Highlighting

*:warning: Non-standard, not all Markdown parsers support the `==` ["highlight" syntax](https://www.markdownguide.org/extended-syntax/#highlight).*

While organizing reference materials or studying, there are times we *really* want to emphasis a word or snippet, so much so that even __bolding__ the text won't suffice. For situations like this, <mark>highlighting is fully supported</mark> using the `==text to highlight==` syntax. For the highlight-lovers out there, multiple flavors like <mark class="red">Red</mark>, <mark class="orange">Orange</mark>, <mark class="yellow">Yellow</mark>, <mark class="blue">Blue</mark>, <mark class="green">Green</mark>, <mark class="purple">Purple</mark>, and <mark class="gray">Gray</mark> are supported.

Additionally, if you want your highlights to function instead as tags, just provide the additional `tag` class:

<mark class="tag red">Red</mark> <mark class="tag orange">Orange</mark> <mark class="tag yellow">Yellow</mark> <mark class="tag blue">Blue</mark> <mark class="tag green">Green</mark> <mark class="tag purple">Purple</mark> <mark class="tag gray">Gray</mark>

### Definitions

*:warning: Non-standard, not all Markdown parsers support the `:` ["definition list" syntax](https://www.markdownguide.org/extended-syntax/#definition-lists).*

If you're writing a technical document or studying, having a nice definitions section is crucial to ensuring you and any other readers can follow along. Definition lists in Marcdown feature bolded keys and indented values, like so:

Extensible Markup Language (XML)

:   A markup language with a strict set of rules to encode information so that it can be read by both computers and people. It can be used to markup documents as well as represent data structures.

Hypertext Markup Language (HTML)

:   A markup language for creating web pages and web applications semantically. This makes it great for delivering complicated web applications, but makes reading and writing it more difficult. While it may appear to be XML, standard HTML is not XML compliant.

Markdown

:   A lightweight markup language created by [John Gruber](http://daringfireball.net) with the intention of being "as easy-to-read and easy-to-write as is feasible".

### Abbreviations

*:warning: Non-standard, not all Markdown parsers support abbreviations.*

Marcdown abbreviations are styled in native small caps (assuming support from the user's platform of choice). Readers with pointing devices can hover over them to read the expanded abbreviation with their browser's standard tooltip. Give it a try with "HTML"!

### Keyboard Descriptions

Representing keyboard keys for things like keyboard shortcuts can be difficult with plain text. Sure, you could write ctrl+alt+del or even `ctrl+alt+del`, but that reads poorly in context. Thankfully, HTML has the `<kbd>` element for exactly this purpose, so you can have <kbd>ctrl</kbd>+<kbd>alt</kbd>+<kbd>del</kbd> instead. Your keyboard shortcuts never looked this good.

## Installation

Marcdown requires using its own HTML template (to expose the handy appearance settings button in rendered documents, among other customization), so installation is more involved than simply importing the stylesheet.

If you happen to already do your writing in [Sublime Text](http://www.sublimetext.com) like I do, you can follow the steps below to get it set up:

1. Clone or download the Marcdown project and place at `/usr/local` on your file system. You can technically place it wherever you want, but do note that if you do you then you must update all paths in the `local-template.html` file to reflect.
2. Install the [Markdown Preview](https://github.com/revolunet/sublimetext-markdown-preview) plugin.
3. Open the Markdown Preview user settings and edit to match [this one](https://github.com/barrowclift/marcdown/blob/master/markdown-preview/MarkdownPreview-2.x.sublime-settings), as desired. Do note that removing or adding new plugins may negatively impair Marcdown rendering.

## About the Author

![Picture of myself with my husband posing behind our gingerbread houses at Christmas](img/portrait.webp)

Hey there :wave:, my name is Marc Barrowclift (pictured on the right with my husband, Kai) and I'm a full-stack engineer who loves making nice things. You can follow my writings over at [barrowclift.me](http://barrowclift.me) or check out my other projects [here](https://barrowclift.me/projects).

[^example-footnote]: This is an example footnote. You can insert asides, references, inside jokes, and all other sorts of things with footnotes.

*[CSS]: Cascading Style Sheets
*[HTML]: Hyper Text Markup Language
*[XML]: Extensible Markup Language