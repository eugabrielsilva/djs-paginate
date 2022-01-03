# djs-paginate
Simpler discord.js v13 embed pagination tool inspired by [discordjs-button-pagination](https://github.com/ryzyx/discordjs-button-pagination).

### Installation
```
npm install @eugabrielsilva/djs-paginate
```

### Usage
```js
// Import the module
const paginate = require('@eugabrielsilva/djs-paginate');

// Create your embed pages
const { MessageEmbed } = require('discord.js');

let page1 = new MessageEmbed({
    title: 'Page 1',
    description: 'This is the first page'
});

let page2 = new MessageEmbed({
    title: 'Page 2',
    description: 'This is the second page'
});

// Create an array with your pages
let pages = [page1, page2];

// Call the paginate() method passing the message object (from client messageCreate event) and the pages array
paginate(message, pages);
```

### Options
The third argument to the `paginate()` function is an object with one or more of the following parameters:

|Parameter|Description|Type|Default|
|---|---|---|---|
|timeout|Time (in seconds) to disable the paginator collector after no interactions are received.|`int`|`60`
|prevText|Text to show in the previous button.|`string`|`"⏪ Anterior"`
|nextText|Text to show in the next button.|`string`|`"Próxima ⏩"`
|pageText|Text to show before the page counter.|`string`|`"📄 Página"`
|pageSeparator|Text to show between the page counter.|`string`|`"/"`

_Example:_
```js
paginate(message, pages, {
    timeout: 120,
    prevText: 'Previous',
    nextText: 'Next',
    pageText: 'Page',
    separatorText: 'from'
});
```

### Credits
Library developed and currently maintained by [Gabriel Silva](https://github.com/eugabrielsilva).\
Special thanks to [ryzyx](https://github.com/ryzyx) for the original idea.