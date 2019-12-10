One of the goals of this project is to enforce consistent styles across a project or team,
and the easiest way to accomplish that is by setting up a linter to handle cases that don't match the predefined rules.

The linter checks all of your styles against your predefined config and throws a warning or error
when your styles don't match the configured values. The great thing about this approach is that you
can literally start with one CSS prop and get it unified across your whole project.

## Assumptions

In these guides we assume that you have setup `nodejs` and have a grasp of `yarn`.

## Installation

To get started install the following packages:

```sh
yarn add -D subsetcss stylelint
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

## Config

Now that we have stylelint setup, we can add out `.subsetcss.js` file that we pass to stylelint.

```js
module.exports = {
  'subsets': {
    'font-size': [
      '0.75rem',
      '0.875rem',
      '1rem',
      '1.125rem',
      '1.25rem',
      '1.5rem',
      '1.875rem',
      '2.25rem',
      '3rem',
      '4rem',
    ]
  }
};
```

This gives us a starting point and will limit `font-size` to the above values.

## Run Linter

You can now run stylelint using `yarn` with a command like `yarn stylelint "src/styles/*.css"`.
You might want to add a npm script to your `package.json` to make style linting a repeatable script you run
in your project.
