Website Optimization Project
--------------------------------

What modifications were made to achieve 90+ score for both mobile and Desktop?
I made the below modifications:

1. Optimized the images and JS files (used in the index.html) using grunt. Both the versions, package.json and Gruntfile.js are in the zip.
2. Inlined the CSS.
3. Moved the JS at the end of the html, just before the </body> tag.
4. Added "async" to js files.
5. Further compressed the images using windows tools.
 
How to check the score?
I followed the below steps to check my score on the PageSpeed Insights:

1. Installed python on my system.
2. Installed ngrok on my system.
3. Navigated to my project directory and ran: "python -m SimpleHTTPServer 8080".
4. Navigated to the ngrok.exe directory and ran: "ngrok http 8080"
5. Once my status was online, i copied the secure http forwarding address and opened the site on the browser.
6. The same site was pasted on the PageSpeed Insights for analysis.

What modifications were made to main.js for achieving 60FPS and less then 5ms time for pizza resizing?
Below are the modifications made to main.js:

1. Changed the "querySelectorALl" to getElementById" because the latter is less expensive and can be used for simple js queries.
2. In the function "changePizzaSizes", removed the variables out of the for loop so that the DOM doesnt have to be modified each time the loop runs.
3. Declared a variable for "document.querySelectorAll(".randomPizzaContainer")" to make the DRY policy is followed and to keep the js minified.
4. Changed the i max value from 100 to 20 to keep in mind the number of pizzas that would actually render on screen once the page loads.