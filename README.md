# js-dictionary

[![Build Status](https://travis-ci.com/docomodigital/js-dictionary.svg?branch=master)](https://travis-ci.com/docomodigital/js-dictionary)
[![Coverage Status](https://coveralls.io/repos/github/docomodigital/js-dictionary/badge.svg?branch=master)](https://coveralls.io/github/docomodigital/js-dictionary?branch=master)
[![npm version](https://badge.fury.io/js/%40docomodigital%2Fjs-dictionary.svg)](https://badge.fury.io/js/%40docomodigital%2Fjs-dictionary)
[![Greenkeeper badge](https://badges.greenkeeper.io/docomodigital/js-dictionary.svg)](https://greenkeeper.io/)

Library to get Dictionary values

### Usage
```javascript
import Dictionary from '@docomodigital/js-dictionary';

const dictObject = {
    SEARCH: 'Search!',
    GO_BACK: 'Go Back',
};

Dictionary.init({
    dict: dictObject,
    showKey: 'missing'
});

Dictionary.get('SEARCH'); // 'Search!'
```


## Installation

### NPM
```bash
npm install --save @docomodigital/js-dictionary
```

## Documentation

To read documentation, go to:

[http://docomodigital.github.io/js-dictionary/latest](http://docomodigital.github.io/js-dictionary/latest)

or run the following command inside the js-dictionary folder: 
```bash
npm run doc:open
```