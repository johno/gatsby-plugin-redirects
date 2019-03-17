# gatsby-plugin-redirects

Manage redirects from a single file for static hosting.

If you're using a hosting provider that doesn't offer built
in redirect support you can use this plugin to create static
HTML files with the redirect meta tag.

## Installation

```sh
npm install --save gatsby-plugin-redirects
```

## Usage

```js
// gatsby-config.js
module.exports = {
  plugins: [
    'gatsby-plugin-redirects'
  ]
}
```

Then create a `redirects.json` file in the root of your project:

```json
[
  {
    "from": "/old/path",
    "to": "/new/path"
  }
]
```

## Related

- https://github.com/getchalk/gatsby-plugin-meta-redirect

## License

MIT
