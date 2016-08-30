[cassidoo.co](http://cassidoo.co)
==============

My personal website, version 5! Build from scratch using the awesome power of
pure HTML, CSS, and JS, baby.

## How it's built

### The Fetch API
I really liked using the Fetch API to populate the content of the site in
version 4.  So, I did it again!

I made a couple easily editable JSON files to make maintaining information about
me and what I'm doing super simple.  You can check those out for yourself in the
`contents` folder.  To get them into the HTML, I pulled the information from
them with `fetch`.  Fun fact, Safari and `fetch` don't get along. So, I used
GitHub's handy [fetch polyfill](https://github.com/github/fetch) project to fix
the holes in that.  There was so much debugging, it was like the aftermath of
a real safari with no bug spray.

### Expanding content
I originally had all of the content of the site exposed immediately, and changed
that for 2 reasons:

1) The loading message was kind of ugly and gross to have showing first thing
2) That's a lot of scrolling for small screens

So, it had to be expanded. This part was actually pretty simple. The `classList`
DOM property already has a built-in function called `toggle`, so I just toggled
a CSS class to make the content display.

### Less
Okay, so I didn't really use pure CSS, technically.  [Less](http://lesscss.org/)
really saved my butt when it came to nesting CSS classes and using mixins to
avoid the rewriting of a lot of properties of repeating sections.  And color
variables are so nice.

## The Design
I really backed off on the crazy designs for this version of the site. I wanted
something simple, techy, and understandable.  And fast-loading, of course.

So, as I was just messing with things in vim, I realized, "Wow, my vim setup is
beautiful" and I copied myself.  Found some cool monospace webfonts, picked some
nice accent colors from my terminal config, and voila.  A terminally-ill site
("ill" meaning "sick" or "totally radical dude" like the kids say).

## Future stuff
Right now I'm happy with the site, but touch events on iPhone (thanks again,
Safari) are weird.  You kind of have to told the toggle a bit.  I want to make
that smoother, and maybe add an Easter egg or two. :)
