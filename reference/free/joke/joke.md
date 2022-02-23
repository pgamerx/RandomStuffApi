---
description: >-
  This is complete documentation about how to get Jokes using Random Stuff API
  (This Endpoint is accessible using free plan as well as Paid plan)
---

# ℹ /joke

{% hint style="danger" %}
Since this API is only accessible using RapidAPI, you need to change the base URL to [**https://random-stuff-api.p.rapidapi.com**](https://api.pgamerx.com/new)****
{% endhint %}

{% swagger method="get" path="/joke" baseUrl="https://api.pgamerx.com" summary="This endpoint allows you to access thousands of jokes and get what you want!" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="query" name="tag" %}
This is used for filtering jokes according to your needs! (You can filter jokes on basis of tags and only get jokes which are tagged with the tag provided)
{% endswagger-parameter %}

{% swagger-parameter in="query" name="blacklist" %}
This is used for filtering jokes according to your needs! (You can Blacklist certain tags from appearing like racist)
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

{% swagger-response status="200: OK" description="You successfully got the joke" %}
```javascript
{
"joke": "A woman marries a man expecting he will change, but he doesn't. A man marries a woman expecting that she won't change, and she does.",
"tags": ["marriage","men","women"]
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

{% tabs %}
{% tab title="NodeJS" %}
```javascript
var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://random-stuff-api.p.rapidapi.com/joke',
  params: {tag: 'women', blacklist: 'dirty,men'},
  headers: {
    authorization: 'Random Stuff API Key',
    'x-rapidapi-host': 'random-stuff-api.p.rapidapi.com',
    'x-rapidapi-key': 'RapidAPI Key'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error`);
});

/*
{
"joke": "Women should not have children after 35. Really ... 35 children are enough.",
"tags": ["kids","women"]
}
*/
```
{% endtab %}

{% tab title="Python" %}
```python
import requests

url = "https://random-stuff-api.p.rapidapi.com/joke"

querystring = {"tag":"women","blacklist":"men,dirty"}

headers = {
    'authorization': "You Random Stuff API Key",
    'x-rapidapi-host': "random-stuff-api.p.rapidapi.com",
    'x-rapidapi-key': "RapidAPI Key"
    }

response = requests.request("GET", url, headers=headers, params=querystring)

print(response.text)
'''
{
"joke": "Women should not have children after 35. Really ... 35 children are enough.",
"tags": ["kids","women"]
}
'''
```
{% endtab %}
{% endtabs %}

{% hint style="success" %}
For examples in all languages, checkout [RapidAPI Page](https://api.pgamerx.com/new)
{% endhint %}
