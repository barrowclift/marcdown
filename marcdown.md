<time>A Markdown theme for humans</time>Marcdown
================================================

I write everything in [Markdown](https://daringfireball.net/projects/markdown), but I've never been particularly satisfied with the available styles. Sure, [Github Flavored Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) is a fine default, but its overemphasis on borders and thick lines adds too much visual noise for my tastes. I found similar issues with other popular styles; while they each had their own strengths, they always fell short by failing to meet at least one of my three requirements:

1. Tasteful typography
2. Complete support for most "unofficial" Markdown features (such as syntax highlighting, tables, etc.)
3. Wide selection of image formatting options

Even when I became discouraged in my search and resigned myself to compromise on a couple I found acceptable (one "light" theme and one "dark" theme), I found having to choose between the light and dark theme at build time on a document-by-document basis to be a hassle. I wanted dark mode to be an accessibility option at *any* time, not just statically baked in. Thus began my mission to create a style to finally meet and exceed these requirements.

That style is Marcdown&#8212;a Markdown theme designed to be just as beautiful for late night journal entries as it is functional for intense computer science notes. Give it a try, I think you're going to love it.

* [Design](#design)
	- [Typeface](#typeface)
	- [Headers](#headers)
	- [Links](#links)
	- [Lists](#lists)
	- [Strikethroughs](#strikethroughs)
	- [Footnotes](#footnotes)
	- [Block Quotes](#block-quotes)
	- [Images](#images)
	- [Code](#code)
	- [Tables](#tables)
	- [Admonitions](#admonitions)
	- [Highlighting](#highlighting)
	- [Definitions](#definitions)
	- [Abbreviations](#abbreviations)
	- [Keyboard Keys](#keyboard-keys)
	- [Advanced Features](#advanced-features)
* [Installation](#installation)
* [About the Author](#about-the-author)

--------------

Design
------

### Typeface

Marcdown was crafted from day one for Apple's [San Francisco](https://developer.apple.com/fonts/) typeface, in my opinion one of the [finest sans serif typefaces in recent years](https://medium.com/@mach/the-secret-of-san-francisco-fonts-4b5295d9a745#.34yepmqos).

### Headers

All six headers adhere to a [1.2 minor third scale](http://type-scale.com) with subtle font weighting every two levels to establish and maintain contextual hierarchy, all [without the need for noisy underlines](http://practicaltypography.com/headings.html). You can see all headers stacked together [here](/marcdown/headers.html).

### Links

As you've already seen, [this is what links look like](#links). Color indicates actionable items, and hovering the link adds the traditional link underline that people have grown to expect.

For times button-style links are desired, you can use `[Button Text](https://google.com){: .link-button }` to create buttons like this:

[Go To barrowclift.design](http://barrowclift.design){: .link-button }

### Lists

* Unordered lists look like this
* The root level uses filled in circles
	- Sub level uses empty circles
	- And then...
		* The last available level uses dashes

1. Ordered lists look like this
2. The root level uses numbers
	1. Sub levels use Latin alphabet characters
	2. And then...
		1. The last available level uses Roman numerals

And of course, checklists are also styled appropriately as well.

* [ ] Thing to do
* [ ] Another thing to do
* [X] Something I've actually done

### Strikethroughs

~~A good chunk of the writing process is drafting~~ Drafting is a crucial phase of the writing process. Sentences can go through countless revisions before they begin to take proper shape, and strikethroughs are perfect for maintaining a nondestructive backlog of your previous approaches for context and future reference.

Due to the nature of strikethroughs being text you want to deemphasis, strikethroughs are one of the few textual elements that have a lighter color than the surrounding text to help guide your eyes over the strikethrough toward its replacement.

### Footnotes

Footnotes look like this[^example-footnote] and are displayed Instapaper-style using [bigfoot.js](http://www.bigfootjs.com). They are also embedded inline at the end of the document.

### Block Quotes

Instead of smothering block quotes in a thick left border [like other themes do](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#blockquotes), Marcdown lets the typography itself communicate block quotes with subtle spacing and italics.

> Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.
>
> &#8213;Rob Siltanen

### Images

By default, images are inline and always span the full width of the text.

![Rocky Mountains National Park - Photo in a misty forest, with light breaking through the tree lines](img/rocky-mountains.jpg)

This isn't nearly enough, though, which is why Marcdown shamelessly breaks Markdown's rules to allow for a light array of image options, assuming the following structure:

```html
<figure markdown="1">
![Alt text](image.jpg){: .primary-class .optional-secondary-class }
</figure>
```

With this syntax, you can provide the following primary and optional secondary classes:

* `.edge-to-edge` - The image will fill the page's complete width. These additional decorators are supported:
	- `.small` - The image will only fill the page's width on mobile devices. For any larger sizes, it will switch to be inline with the text.
	- `.medium` - Like `.small`, but will continue to "spill" a bit beyond the bounding text's width for medium and larger devices.
	- `.large` - Like `.medium`, but the amount of "spillage" is much greater. Effectively edge-to-edge for all but the largest devices.
* `.inline` - Exactly the same as the standard markdown image syntax `![alt tag](path/to/image)`, where the image will be inline for all three device sizes.
* `.half-inline` - Helpful for very tall images, acts the same as regular `.inline` images but at half the text's width.

Here's an example `.edge-to-edge` image, no additional decorators. This is perfect for very long panoramas:

<figure markdown="1">
![Zion National Park - Panorama atop Angels Landing](img/zion.jpg){: .edge-to-edge }
</figure>

Compare that to another panorama, this time with `.edge-to-edge .large`. This stops the image from expanding beyond 1600px. You won't notice the difference unless you're viewing on a very large device.

<figure markdown="1">
![Smoky Mountains National Park - Mountaintop panorama](img/smoky-mountains.jpg){: .edge-to-edge .large }
</figure>

For images with a little more height to them, such as desktop screenshots, `.edge-to-edge .medium` is preferred:

<figure markdown="1">
![Smoky Mountains National Park - Photo of a sunset during one of our hikes](img/smoky-mountains-sunset-2.jpg){: .edge-to-edge .medium }
</figure>

The final edge-to-edge option is `.edge-to-edge .small`, which is *only* edge-to-edge on mobile devices, and inline for every other device class. This is good for ~4:3 images that look very uncomfortable spilling past text width on medium+ devices, but can do so naturally on small devices.

<figure markdown="1">
![Smoky Mountains National Park - Photo of a stream in the forest](img/smoky-mountains-2.jpg){: .edge-to-edge .small }
</figure>

Finally, for very tall or very small images we have the `.half-inline` class, which displays images at half the text's width.

<figure markdown="1">
![Happy iMac logo - Square version](img/logo.jpg){: .half-inline }
</figure>

---------

That doesn't quite cover it, though. There are times I want to make an inline collection of images, such as iOS screenshots. You can either make a composite image in a separate application and use that, *or* you can let CSS do the heavy lifting for you!

<div markdown="1" class="edge-to-edge large"><figure markdown="1">![Overcast iOS Screenshot - home screen](img/ios-1.jpg){: .ios-three-screens .shadow }</figure><figure markdown="1">![Overcast iOS Screenshot 2 - playlist view](img/ios-2.jpg){: .ios-three-screens .shadow }</figure><figure markdown="1">![Overcast iOS Screenshot 3 - player view](img/ios-3.jpg){: .ios-three-screens .shadow }</figure></div>

As you'd expect for something more complicated like this, the markup for this element is almost entirely HTML, as Markdown wasn't intended for such things[^intended]. Below, we're providing the class `.ios-three-screens`, but you can also use this layout for `.ios-two-screens` if you have just two screenshots, and it will size them accordingly.

```html
<div markdown="1" class="edge-to-edge large">
<figure markdown="1">![Alt tag 1](ios-1.jpg){: .ios-three-screens .shadow }</figure>
<figure markdown="1">![Alt tag 2](ios-2.jpg){: .ios-three-screens .shadow }</figure>
<figure markdown="1">![Alt tag 3](ios-3.jpg){: .ios-three-screens .shadow }</figure>
</div>
```

You can also add comments to any of the image classes above. Below is an example applied to an `.edge-to-edge.small` image.

<figure markdown="1">
![My siblings and I at Smoky Mountains National Park on our third annual "Sibs Trip", taken on June 26, 2016.](img/sibs.jpg){: .edge-to-edge .small }
<figcaption>My siblings and I at Smoky Mountains National Park on our third annual "Sibs Trip", taken on June 26, 2016.</figcaption>
</figure>

As with the image collection above, image comments is not supported by Markdown or any known plugins, so manual use of the `<figure>` and `<figcaption>` elements is required. First, decide what kind of image size you want (`.edge-to-edge`? Or maybe `.edge-to-edge.medium `? Or maybe it's a smaller image, so `.inline` will suffice). Whatever image size you choose, the structure remains practically the same.

```html
<!-- If you end up choosing an image size that's big (anything larger than
	 .edge-to-edge.medium) then you'll want to consider add a bit more
	 breathing room around the image & caption to make it fit better in the
	 document, you can achieve this by adding the ".breathing-room" class to
	 the figure element. This additional padding is already added automatically
	 for images without captions. -->
<figure markdown="1"><!--class="breathing-room"-->
![Alt tag](some-image.jpg){: .primary-class .optional-secondary-class }
<figcaption>Your photo caption goes here.</figcaption>
</figure>
```

### Code

Standard, inline code snippets like `exampleMethod()` allow you to jot down variable names or short lines of code without breaking your train of thought.

For larger chunks of code, you can use standard Markdown code blocks. If you provide a language (or if the language could be derived), the code block will be syntax highlighted with a [Sublime Text](http://www.sublimetext.com) flavored Monokai theme.

```java
public class Test {
  public static void main(String[] args) {
	System.out.println("Hello, world!");
  }
}
```

However, sometimes we just want *preformatted* blocks, not necessarily code blocks. In cases like these, you must manually wrap your text with the HTML `<pre>` and `<code>` elements. While not ideal, Markdown by design only allows one particular style to be set to any given element[^one-style-only], so in an effort to address not *always* wanting the Monokai theme to be applied to performed blocks, plain old `<pre><code>Your text</code></pre>` is assumed to be plain text and the Monokai theme will not be applied.

<pre>
<code>I'm performed text,
but not code.
 (please
   respect
	my
	 spacing!)</code>
</pre>

For the ASCII artists out there, you can also easily tighten the font's line height by providing the `.ascii-art` class to the `<pre>` element (example below created by [grp](http://www.ascii-code.com/ascii-art/computers/apple.php)).

<pre class="ascii-art">
<code>                     __________________________
			 __..--/".'                        '.
	 __..--""      | |                          |
	/              | |                          |
   /               | |    ___________________   |
  ;                | |   :__________________/:  |
  |                | |   |                 '.|  |
  |                | |   |                  ||  |
  |                | |   |                  ||  |
  |                | |   |                  ||  |
  |                | |   |                  ||  |
  |                | |   |                  ||  |
  |                | |   |                  ||  |
  |                | |   |                  ||  |
  |                | |   |______......-----"\|  |
  |                | |   |_______......-----"   |
  |                | |                          |
  |                | |                          |
  |                | |                  ____----|
  |                | |_____.....----|#######|---|
  |                | |______.....----""""       |
  |                | |                          |
  |. ..            | |   ,                      |
  |... ....        | |  (c ----- """           .'
  |..... ......  |\|_|    ____......------"""|"
  |. .... .......| |""""""                   |
  '... ..... ....| |                         |
	"-._ .....  .| |                         |
		"-._.....| |             ___...---"""'
			"-._.| | ___...---"""
				"""""             grp</code>
</pre>

### Tables

By default, tables use spacing and font weights to establish structure.

| Band Name      | Favorite Record                       |
|:---------------|:--------------------------------------|
| The Beach Boys | Pet Sounds & SMiLE                    |
| Fleet Foxes    | Helplessness Blues                    |
| Joanna Newsom  | Divers                                |
| The Beatles    | Sgt. Pepper's Lonely Hearts Club Band |

For more complicated data, a more strictly defined, decorated table is desired. That option can be enabled by providing the `.fancy` class to the table element. Regrettably, this means the table must then be defined in HTML instead of Markdown:

<table class="fancy">
<thead>
<tr>
<th align="left">Band Name</th>
<th align="left">Favorite Record</th>
</tr>
</thead>
<tbody>
<tr>
<td align="left">The Beach Boys</td>
<td align="left">Pet Sounds &amp; SMiLE</td>
</tr>
<tr>
<td align="left">Fleet Foxes</td>
<td align="left">Helplessness Blues</td>
</tr>
<tr>
<td align="left">Joanna Newsom</td>
<td align="left">Divers</td>
</tr>
<tr>
<td align="left">The Beatles</td>
<td align="left">Sgt. Pepper&rsquo;s Lonely Hearts Club Band</td>
</tr>
</tbody>
</table>

### Admonitions

In rare cases, you may want to preface a document or section with a prominent announcement communicating some kind of information to the reader. Perhaps this is an "Update" block that adds some new information to the writing below, while still preserving the original writing. Or maybe this is a "Warning" block of some kind to forewarn that what follows may trigger those with PTSD or other mental trauma. Whatever the reason, there's an admonition flavor for it.

While standard Markdown has no support for admonitions, the [admonition](https://pythonhosted.org/Markdown/extensions/admonition.html) Markdown plugin does. Here's some examples with the various supported flavors:

!!! Update "Update: March 17, 2017"
	This process has changed as of iOS 10. While the steps below still apply for those on older versions, those running iOS 10+ must follow follow [these steps](#admonitions) instead.

!!! Warning "Trigger Warning"
	What follows are recounts of graphically violent stories that may not be suitable for those dealing with trauma such as PTSD. Reader discretion is advised.

!!! Success "All Tests Passed"
	All tests passed full regression testing.

!!! Unknown "Title"
	Generic admonition block.

### Highlighting

While organizing study or reference materials, there are times we *really* want to emphasis a word or snippet, so much so that even __bolding__ the text won't suffice. For situations like this, <mark>highlighting is fully supported</mark>. If your Markdown parser of choice supports the highlighting syntax, you can use `==section to highlight==` to highlight text, otherwise you'll have to manually wrap any highlights in `<mark>` elements yourself. For the highlight-lovers out there, multiple flavors are supported:

* <mark class="red">Red</mark>
* <mark class="orange">Orange</mark>
* <mark class="yellow">Yellow</mark>
* <mark class="blue">Blue</mark>
* <mark class="green">Green</mark>
* <mark class="purple">Purple</mark>
* <mark class="gray">Gray</mark>
* <mark class="light-gray">Light Gray</mark>

Additionally, if you want your highlights to function instead as tags <mark class="light-gray tag">like this</mark>, just provide the additional `.tag` class.

### Definitions

If you're in class or writing a technical document, having a nice definitions section is crucial to ensuring you and any other readers can follow along. Definition lists look like this:

Extensible Markup Language (XML)

:   A markup language with a strict set of rules to encode information so that it can be read by both computers and people. It can be used to markup documents as well as represent data structures.

Hypertext Markup Language (HTML)

:   A markup language for creating web pages and web applications semantically. This makes it great for delivering complicated web applications, but makes reading and writing it more difficult. While it may appear to be XML, standard HTML is not XML compliant.

Markdown

:   A lightweight markup language created by [John Gruber](http://daringfireball.net) with the intention of being "as easy-to-read and easy-to-write as is feasible".

### Abbreviations

Marcdown abbreviations are styled in native small caps. Readers with pointing devices can hover over them to read the expanded abbreviation with their browser's standard tooltip. Give it a try with "HTML"!

### Keyboard Keys

Representing keyboard keys for things like keyboard shortcuts can be difficult with plain text. Sure, I could write ctrl+alt+del or even `ctrl+alt+del`, but that doesn't look very nice at all. Thankfully, HTML has the `<kbd>` element for exactly this purpose, so you can have <kbd>ctrl</kbd>+<kbd>alt</kbd>+<kbd>del</kbd> instead. Your keyboard shortcuts never looked this good.

### Advanced Features

While not enabled by default, Marcdown is fully capable of rendering complex UML diagrams with [flowchart.js](http://flowchart.js.org) and [sequence-diagram.js](https://bramp.github.io/js-sequence-diagrams/), as well as rendering mathematical equations with [MathJax](https://www.mathjax.org).

[Click here to see these features in action](/marcdown/advanced-features.html)

Installation
------------

Due to Marcdown relying on Markdown extensions for things like syntax highlighting and the necessary scripting required for enabling/disabling dark mode, some installation is required for Marcdown to operate at its fullest potential. Thankfully, if you already do your writing in [Sublime Text](http://www.sublimetext.com) like I do, the installation is very straightforward:

1. Clone or download the Marcdown project and place at `/usr/local` on your file system. You can place it wherever you want on your system, but do note then you must update the paths in the `local-template.html` file accordingly.
2. Install the [Markdown Preview](https://github.com/revolunet/sublimetext-markdown-preview) plugin.
3. Open the Markdown Preview user settings and edit to match [this one](https://github.com/barrowclift/marcdown/blob/master/markdown-preview/MarkdownPreview.sublime-settings), as desired. At a bare minimum, however, you must have `"skip_default_stylesheet": true` and `"html_template": "/usr/local/marcdown/local-template.html"` (or the path you installed Marcdown to if you chose somewhere else).
	* Remember, if you want any [advanced features](/marcdown/advanced-features.html) like UML or MathJax, you'll have to ensure they're enabled and their required extensions added to the list, since they're disabled by default in the provided `MarkdownPreview.sublime-settings` file.

Regrettably, there's no detailed guides currently available for setting up Marcdown with other popular Markdown build systems (yet), so your only option at the moment is to use Sublime Text with Markdown Preview or to work it out yourself with your preferred system. More setup instructions for other environments are planned to be added over time, so stay tuned!

About the Author
----------------

<figure markdown="1">
![Picture of myself on a hike at Smoky Mountains National Park](img/marc.jpg){: .inline }
</figure>

Hey there :wave:, my name is Marc Barrowclift and I'm a designer and developer who loves making nice things. You can follow my ramblings over at [barrowclift.design](http://barrowclift.design) or check out my other code-related projects on [Github](https://github.com/barrowclift).

[^example-footnote]: This is an example footnote. You can insert asides, references, inside jokes, and all other sorts of things with footnotes.
[^intended]: As if that would stop me. :wink:
[^one-style-only]: Yes, [classes can be added to simple elements](https://michelf.ca/projects/php-markdown/extra/#spe-attr) like links and standard images, but unfortunately this does not extend to more complicated elements like lists or code blocks.

*[ASCII]: American Standard Code for Information Interchange
*[CSS]: Cascading Style Sheets
*[HTML]: Hyper Text Markup Language
*[UML]: Unified Modeling Language
*[XML]: Extensible Markup Language