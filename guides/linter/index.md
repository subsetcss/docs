One of the goals of this project is to enforce consistent styles across a project or team,
and the easiest way to accomplish that is by setting up a linter to handle cases that don't match the predefined rules.

The linter checks all of your styles against your predefined config and throws a warning or error
when your styles don't match the configured values. The great thing about this approach is that you
can literally start with one CSS prop and get it unified across your whole project.

## Assumptions

In these guides we assume that you have setup `nodejs` and have a grasp of `npm`.

## Installation

To get started install the following packages:

```sh
npm install --save-dev subsetcss stylelint
```

> Note: I'm using stylelint as the base system to get CSS linting working. Building on the shoulders of giants and such 😁

## Setup

Before we can start linting, we'll need to setup
Stylelint. For a full guide on doing that, have a look at the official docs 
at https://stylelint.io/#getting-started 

No matter which approach you take to setup Stylelint,
I recommend using the `stylelint.config.js` config
file, because it gives SubsetCSS ultimate flexibility
by allowing us to require our config directly.

Create a stylelint config file `stylelint.config.js` in the top directory of your project with the following content:

```js
let config = require('./.subsetcss');

module.exports = {
  plugins: ['subsetcss'],
  rules: {
    'subsetcss/config': [true, config],
  }
};
```
