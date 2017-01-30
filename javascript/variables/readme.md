### Notes

### Practice

1. What happens when you print out the value of a variable that you have
declared but you didn't define?

2. Identifiers have some pretty specific rules in JavaScript. Experiment with
declaring variables using various symbols other than letters and numbers and see
when you get a Syntax Error.

3. Declare and define a variable that stores your name. Using that variable,
construct a new variable that represents a greeting by concatentating "Hello" in
front of your name. For example, we'd want to store the value "Hello World" in a
variable, where "World" is stored in another variable.

5. Create a variable that represents a worker's hourly wage. Create another
variable that represents the number of hours a worker has worked. Store values
in both of those variables, and create a variable that stores the total wage
based on the number of hours worked and the hourly wage.

6. We've seen that variables can store strings and numbers. We've also seen that
when we have two strings the `+` operator means _concatenation_, whereas when we
have two number variables it represents _addition_. What happens when we mix and
match number and string variables? Give it a try and do your best to explain
what you see.

7. In the last example, we ended up with a long decimal number. We'd
like to round it off, but we don't know how to do that. The _Mozilla
Developer Network_ has excellent JavaScript documentation, and there
is a special _function_ called `Math.round` that will help us do
that. It would be worthwhile for you to read the documentation on this
function [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round).
If you're feeling very brave, give it a try! You can round dollar amounts to two
decimal places by first multiplying by 100, then rounding the nearest integer,
then dividing by 100. You can divide by using the `/` operator.

8. You may have seen HTML in the past, but in case you haven't, a paragraph tag
in HTML looks like this:

        <p>This is a paragraph!</p>

    The first tag, `<p>` is an opening tag, and the last tag, `</p>` is a closing
tag. Create a variable that stores the value "This is a paragraph!" and then use
it to construct a new value that represents this snippet of HTML by
concatenating an opening `<p>` tag to the front, and a closing `</p>` tag to the
back.

9. Consider the following sequence of variable assignments.

        var tweet = "hello world!";
        var count = 0;

        count = count + 10;
        tweet = tweet + count;

        // what is the value of tweet and count now?

        count = count * 10;
        tweet = count + tweet;

        // what is the value of tweet and count now?

        count = count * 100;
        tweet = tweet + ". this is another sentence.";

        // what is the value of tweet and count now?
