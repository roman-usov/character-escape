`textContent` allows us to safely insert data in a page to minimize the risk of XSS. But there is a way to safely display user's input data using `innerHTML` and character escaping.

On the page, we have a feedback form with three fields: `email`, `name` and `comment`.

We need a function that will extract a user's input data on submit, escape the data and replace the original form with the following.

```html
<div>
  <p>Feedback has been sent</p>
  <div>Email: test@email.com</div>
  <div>Name: Matz</div>
  <div>Comment: My Comment</div>
</div>
```

Escaping can be done using the `htmlEscape()` function from the [escape-goat](https://github.com/sindresorhus/escape-goat) library.

Upon submit, the page shows data submitted by the user.
