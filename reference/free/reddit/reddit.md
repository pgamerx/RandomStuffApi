---
description: >-
  This is complete documentation about how to get Reddit Images using Random
  Stuff API (This Endpoint is accessible using free plan as well as Paid plan)
---

# ℹ /reddit

{% hint style="danger" %}
Since this API is only accessible using RapidAPI, you need to change the base URL to [**https://random-stuff-api.p.rapidapi.com**](https://api.pgamerx.com/new)****
{% endhint %}

{% swagger method="get" path="/reddit" baseUrl="https://api.pgamerx.com" summary="This endpoint allows you to access reddit images/posts from any sub-reddit." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="query" name="searchType" required="true" %}
What type of post do you want to search- hot, top, new, or rising
{% endswagger-parameter %}

{% swagger-parameter in="header" name="x-rapidapi-host" required="true" %}
It should always be:&#x20;

"**random-stuff-api.p.rapidapi.com**"
{% endswagger-parameter %}

{% swagger-parameter in="header" name="Authorizaion" required="true" %}
The API key you received from 

[our side](https://app.gitbook.com/s/wAV35y0SE6CIikQl9Bl7/)

.
{% endswagger-parameter %}

{% swagger-parameter in="header" name="x-rapidapi-key" required="true" %}
The API key you received from 

[RapidApi](https://docs.rapidapi.com/docs/keys)


{% endswagger-parameter %}

{% swagger-parameter in="path" name="method" required="true" %}
What type of function do you want to perform?
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="You successfully got the details" %}
```javascript
{
  "id": "rnqun9",
  "type": "rising",
  "title": "Visiting rural Europe as a foreigner starterpack",
  "author": "Desertedfoxx",
  "postLink": "https://redd.it/rnqun9",
  "image": "https://i.imgur.com/moDA6p7.png",
  "gallery": false,
  "text": "",
  "thumbnail": "https://b.thumbs.redditmedia.com/y4pktIWFITDS3xUiIzD4ciDFIu3cQKvrfvfsEyI4vvU.jpg",
  "subreddit": "starterpacks",
  "NSFW": false,
  "spoiler": false,
  "createdUtc": 1640367106,
  "upvotes": 246,
  "downvotes": 0,
  "upvoteRatio": 0.96
}
```
{% endswagger-response %}

{% swagger-response status="401: Unauthorized" description="You did not Authorise correctly" %}
```javascript
"Invalid API key"
// or 
"Forbidden, Not Subscribed to this plan"
```
{% endswagger-response %}
{% endswagger %}

#### Available Methods:&#x20;

1. `FetchSubredditPost`

&#x20; 2\. `FetchPost`

{% hint style="info" %}
The above **2 methods** require another query parameter: **`subreddit`**
{% endhint %}

&#x20; 3\. `fetchPostById`

{% hint style="info" %}
This method require another query parameter: **`id`**
{% endhint %}

&#x20; 4\. `RandomMeme`

&#x20; 5\. `FetchRandomPost`

{% tabs %}
{% tab title="NodeJS" %}
```javascript
var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://random-stuff-api.p.rapidapi.com/reddit/RandomMeme',
  params: {searchType: 'rising'},
  headers: {
    authorization: 'Random Stuff API',
    'x-rapidapi-host': 'random-stuff-api.p.rapidapi.com',
    'x-rapidapi-key': 'RapidAPI key'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
```
{% endtab %}

{% tab title="Python" %}
```python
import requests

url = "https://random-stuff-api.p.rapidapi.com/reddit/RandomMeme"

querystring = {"searchType":"rising"}

headers = {
    'authorization': "Random Stuff API key",
    'x-rapidapi-host': "random-stuff-api.p.rapidapi.com",
    'x-rapidapi-key': "RapidAPI key"
    }

response = requests.request("GET", url, headers=headers, params=querystring)

print(response.text)
```
{% endtab %}
{% endtabs %}

{% hint style="success" %}
For examples in all languages, checkout [RapidAPI Page](https://api.pgamerx.com/new)
{% endhint %}
