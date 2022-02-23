---
description: A Quick Start guide for Random Stuff API
---

# ✏ Quick Start

{% hint style="info" %}
**Good to know:** This guide is just a quick start guide, head over to API Reference for all details.
{% endhint %}

## Get your API keys

Your API requests are authenticated using API keys. Any request that doesn't include an API key will return an error.

You can generate an API key from your Dashboard at any time.

<mark style="color:red;">**You also need your RapidAPI key! Checkout**</mark>** ** [**last guide**](https://app.gitbook.com/s/wAV35y0SE6CIikQl9Bl7/) <mark style="color:red;">**for more information**</mark>

## Install the library

The best way to interact with our API is to use one of **our official libraries**:

{% tabs %}
{% tab title="Python" %}
```
# Install via pip
pip install --upgrade yarsaw
```
{% endtab %}

{% tab title="Java" %}
Kindly head over to [Github Repository](https://github.com/rushaan1/RandomStuff4J)
{% endtab %}

{% tab title="Node" %}
```
# We are working on a package for NodeJS
```
{% endtab %}
{% endtabs %}

{% hint style="info" %}
**Good to know:** You can make a wrapper for our API as well and get it listed here!
{% endhint %}

## Make your first request

To make your first request, send an authenticated request to the ai endpoint. This will return a `json object`, which contains our AI Response.

{% hint style="info" %}
**Good to know:** We are using Python Library (YARSAW) to make the requests.
{% endhint %}

Take a look at how you might call this method using our official libraries, or via `curl`:

{% tabs %}
{% tab title="Python" %}
```python
import yarsaw
import asyncio  # default
client = yarsaw.Client("RSA KEY HERE", "RapidAPI KEY HERE")
async def main():
    keep_talking = True

    while keep_talking:  # Start loop
        cin = input("You:\t")

        if cin == "exit":
            keep_talking = False  # end loop
        else:
            res = await client.get_ai_response(cin, bot_name="yarsaw")
            print("Bot:\t" + res.response)

    await client.disconnect()  # disconnect the client at the end of the loop

asyncio.get_event_loop().run_until_complete(main())
```
{% endtab %}

{% tab title="NodeJS" %}
```javascript
var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://random-stuff-api.p.rapidapi.com/ai',
  params: {
    msg: 'Hi there, how are you?',
    id: '123'
  },
  headers: {
    authorization: 'Api Key received from api.pgamerx.com/register',
    'x-rapidapi-host': 'random-stuff-api.p.rapidapi.com',
    'x-rapidapi-key': 'Your RapidAPI Key'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
```
{% endtab %}
{% endtabs %}
