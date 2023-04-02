let str_sng = "This is a text with single quotation marks";
let str_dbl = "This is a text with double quotation marks";

console.log(str_sng); // EO: This is a text with single quotation marks
console.log(str_dbl); // EO: This is a text with double double quotation marks

// Quotations marks: single or double quotes
let strng_quotes = 'Yesterday they literally say "go outside to take some air"';
let strng_single_quotes =
  'Yesterday they literally say "go outside to take some air"';
let strng_double_quotes =
  "Yesterday they literally say 'go outside to take some air'";

console.log(strng_quotes); // EO: Yesterday they literally say "go outside to take some air"
console.log(strng_single_quotes); // EO: Yesterday they literally say "go outside to take some air" -> Single quotes as a string, double to quote a piece of text
console.log(strng_double_quotes); // EO: Yesterday they literally say 'go outside to take some air' -> Double quotes as a string, single to quote a piece of text

// Backticks: template literals
let str_backticks = `Hey! This is a string with backticks`;
console.log(str_backticks); // EO: Hey! This is a string with backticks

let name = "Víctor";
let greeting = `Hey, ${name}! How's everything?`;
console.log(greeting); // EO: Hey, Víctor! How's everything?

// Backticks: using it as a HTML templates
let htmlTemplae = `
<html>
    <h1>Web page by ${name}</h1>
    <p>This is a paragraph</p>
</html>
`;

console.log(htmlTemplae);
