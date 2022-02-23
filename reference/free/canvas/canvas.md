---
description: >-
  This is complete documentation about how to edit Images using Random Stuff API
  (This Endpoint is accessible using free plan as well as Paid plan)
---

# ℹ /canvas

{% hint style="danger" %}
Since this API is only accessible using RapidAPI, you need to change the base URL to [**https://random-stuff-api.p.rapidapi.com**](https://api.pgamerx.com/new)****
{% endhint %}

{% swagger method="get" path="/reddit" baseUrl="https://api.pgamerx.com" summary="This endpoint allows you to manipulate images" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="query" name="img1" required="false" %}
First Image URL (If Needed)
{% endswagger-parameter %}

{% swagger-parameter in="query" name="img2" %}
Second Image URL (If Needed)
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

{% swagger-parameter in="query" name="img3" %}
Third Image URL (If Needed)
{% endswagger-parameter %}

{% swagger-parameter in="path" name="method" required="true" %}
What type of edit do you want to perform
{% endswagger-parameter %}

{% swagger-parameter in="query" name="txt" %}
Text string (If Needed)
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="You successfully got the details" %}
```javascript
{
  "base64": "BASE_64_HERE"
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

*   **METHOD(S) IN WHICH ONLY 1 IMAGE IS REQUIRED:**

    \
    `affect`, `beautiful`, `wanted`, `delete`, `trigger`, `facepalm`, `blur`, `hitler`, `kiss`, `jail`, `invert`, `jokeOverHead`
*   **METHOD(S) IN WHICH 2 IMAGES ARE REQUIRED:**

    \
    `bed`, `fuse`, `kiss`, `slap`, `spank`
*   **METHOD(S) IN WHICH 3 IMAGES ARE REQUIRED:**

    \
    `distracted`
*   **METHOD(S) IN WHICH ONLY TEXT IS REQUIRED:**

    \
    `changemymind`

{% tabs %}
{% tab title="NodeJS" %}
```javascript
var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://random-stuff-api.p.rapidapi.com/canvas/wanted',
  params: {img1: '',img2:'',img3:'',txt:''},
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

url = "https://random-stuff-api.p.rapidapi.com/canvas/wanted"

querystring = {"img1": "","img2":"","img3":"","txt":""}

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
