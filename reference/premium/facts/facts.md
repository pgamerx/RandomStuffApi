---
description: >-
  This is complete documentation about how to get Facts using Random Stuff API
  (This Endpoint is accessible using Paid plan only)
---

# ℹ /facts

{% hint style="danger" %}
Since this API is only accessible using RapidAPI, you need to change the base URL to [**https://random-stuff-api.p.rapidapi.com**](https://api.pgamerx.com/new)****
{% endhint %}

{% swagger method="get" path="/facts" baseUrl="https://api.pgamerx.com" summary="This endpoint allows you to get facts" %}
{% swagger-description %}

{% endswagger-description %}

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

{% swagger-parameter in="path" name="tye" required="true" %}
What type of fact do you want to know? 
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="You successfully got the details" %}
```javascript
{
"fact":"Dogs can sniff at the same time as breathing"
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

### Facts Available

* all
* emoji
* dog
* cat
* food
* space
* covid
* computer

{% tabs %}
{% tab title="NodeJS" %}
```javascript
var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://random-stuff-api.p.rapidapi.com/facts/dog',
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

url = "https://random-stuff-api.p.rapidapi.com/facts/dog"

headers = {
    'authorization': "Random Stuff API key",
    'x-rapidapi-host': "random-stuff-api.p.rapidapi.com",
    'x-rapidapi-key': "RapidAPI key"
    }

response = requests.request("GET", url, headers=headers)

print(response.text)
```
{% endtab %}
{% endtabs %}

{% hint style="success" %}
For examples in all languages, checkout [RapidAPI Page](https://api.pgamerx.com/new)
{% endhint %}
