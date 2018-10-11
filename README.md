# js-dictionary

Library to get Dictionary values

### Installation
```bash
npm install --save @docomodigital/js-dictionary
```
Or
```bash
yarn add @docomodigital/js-dictionary
```

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

### Api

#### init(options: {dict: any, showKey: string})
Initialize the Dictionary class

Available `showKey` values: 
* 'all' (always show the key) 
* 'missing' (show the key when not found) 
* false | null (never show the key)
```javascript
Dictionary.init({
    dict: dictObject,
    showKey: 'missing'
});
```

## get(key: string)
Search the given key, returns value based on showKey value
```javascript
Dictionary.get('GO_BACK');
```

### list()
Returns the entire dict object