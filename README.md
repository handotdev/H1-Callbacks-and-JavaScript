# H1-Callbacks-and-JavaScript

Submit, to CMS: A zip file which contains the following:

An HTML file (index.html) with the following

Your name

Your major

Your graduating year

What you’re looking forward to most in this class

A CSS file

Style up your HTML file however you want. Be creative! Be bold!

A JavaScript file with the following function definitions

main

Parameters: None

Should run only when the page has totally loaded all HTML and CSS. Hint: listen for the “DOMContentLoaded” event and run main when that event occurs. Does this sound familiar?

main should run the promptUser function, with a callback function showIceCream as a parameter to promptUser

promptUser

Parameters: A callback function

Prompts the user for a time, in seconds (look into the prompt function, see below)

promptUser should run the function passed to it as a parameter, and pass the time from the prompt to this callback function

showIceCream

Parameters: Time, in seconds

Calls setTimeout in the amount of seconds provided by the user. When that amount of time has passed, add your (the developer’s, the person reading this) favorite flavor of ice cream to the HTML page.

Note: setTimeout expects a time in milliseconds. You should covert the user's time from seconds to milliseconds, instead of prompting the user for a time in milliseconds.
Limitations

No external software libraries

No Bootstrap

No jQuery

Helpful Documentation

https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt

https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
