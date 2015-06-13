# Note

This is fork from https://github.com/tj/node-blocked with the following changes:
- ability for custom interval
- interval defaults to 1s
- call fn when difference > 0

# blocked

  Check if a node event loop is blocked.

## Installation

```
$ npm install blocked
```

## Example

  The `blocked()` function reports every value over 10ms, do whatever
  you want with that value, graph it, log it, alert, etc.

  The process won't be kept open through this!

```js
var blocked = require('blocked');

setInterval(function(){
  Array(10000000).join('a')
}, 500);

setInterval(function(){
  Array(100000000).join('a')
}, 3000);

blocked(function(ms){
  console.log('BLOCKED FOR %sms', ms | 0);
});
```

# License

  MIT
