# djs-paginate
Simpler discord.js v13 embed pagination tool inspired by [discordjs-button-pagination](https://github.com/ryzyx/discordjs-button-pagination).

## Usage
```js
// Import the module
const paginate = require('@eugabrielsilva/djs-paginate');

// Create your embed pages
const { MessageEmbed } = require('discord.js');
let page1 = new MessageEmbed().setDescription('Page 1');
let page2 = new MessageEmbed().setDescription('Page 2');

// Create an array with your pages
let pages = [page1, page2];

// Call the paginate() method passing the message object and the pages array
paginate(message, pages);
```

## Parameters
|Parameter|Description|Type|Optional|Default|
|---|---|---|---|---|
|message|The message object received from the client `messageCreate` event.|`Message`|**No**|
|pages|An array of `MessageEmbed` pages.|`MessageEmbed[]`|**No**|
|timeout|Time (in seconds) to disable the paginator collector after no interactions are received.|`int`|Yes|`60`
|prevText|Text to show in the previous button.|`string`|Yes|`"⏪ Anterior"`
|nextText|Text to show in the next button.|`string`|Yes|`"Próxima ⏩"`
|pageText|Text to show before the page counter.|`string`|Yes|`"📄 Página"`