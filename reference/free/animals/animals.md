---
description: >-
  This is complete documentation about how to get Animal Images using Random
  Stuff API (This Endpoint is accessible using free plan as well as Paid plan)
---

# ℹ /animals

{% hint style="danger" %}
Since this API is only accessible using RapidAPI, you need to change the base URL to [**https://random-stuff-api.p.rapidapi.com**](https://api.pgamerx.com/new)****
{% endhint %}

{% swagger method="get" path="/animals" baseUrl="https://api.pgamerx.com" summary="This endpoint allows you to get animal images" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="query" name="limit" required="true" %}
How many images do you want
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

{% swagger-parameter in="path" name="animal" required="true" %}
Which animal picture do you want?
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="You successfully got the details" %}
```javascript
{
"0":{
"url":"https://i.ibb.co/z2Vdgww/8O3Kj.jpg"
},
"1":{
"url":"https://i.ibb.co/0hsBPLZ/dog-Wb4db-min.jpg"
}
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

### Animals Available

* Dog
* Cat
* Wolf
* Fox

{% tabs %}
{% tab title="NodeJS" %}
```javascript
var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://random-stuff-api.p.rapidapi.com/animals/dog',
  params: {limit: "1"},
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

url = "https://random-stuff-api.p.rapidapi.com/animals/dog"

querystring = {"limit":""}

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
