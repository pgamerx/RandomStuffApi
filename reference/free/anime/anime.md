---
description: >-
  This is complete documentation about how to get anime Images using Random
  Stuff API (This Endpoint is accessible using free plan as well as Paid plan)
---

# ℹ /anime

{% hint style="danger" %}
Since this API is only accessible using RapidAPI, you need to change the base URL to [**https://random-stuff-api.p.rapidapi.com**](https://api.pgamerx.com/new)****
{% endhint %}

{% swagger method="get" path="/anime" baseUrl="https://api.pgamerx.com" summary="This endpoint allows you to get anime images" %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="query" name="query" required="true" %}
The term you want to search for (for anime results)
{% endswagger-parameter %}

{% swagger-parameter in="query" name="channel" required="true" %}
Channel '1', '2', or '3'.
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

{% swagger-response status="200: OK" description="You successfully got the details" %}
```javascript
[
{
"title": "Animal Cat Cats Kitten Hat Flower Cute Pet HD Wallpaper | Background Image",
"thumbnail": "https://images4.alphacoders.com/206/thumb-350-20658.webp",
"image": "https://images4.alphacoders.com/206/20658.jpg"
},
{
"title": "Women Model Models Blonde Cat Cute HD Wallpaper | Background Image",
"thumbnail": "https://images8.alphacoders.com/599/thumb-350-599429.webp",
"image": "https://images8.alphacoders.com/599/599429.jpg"
},
{
"title": "Animal Cat Cats Kitten Cute HD Wallpaper | Background Image",
"thumbnail": "https://images6.alphacoders.com/383/thumb-350-383280.webp",
"image": "https://images6.alphacoders.com/383/383280.jpg"
},
{
"title": "Animal Cat Cats Kitten Cute Guitar HD Wallpaper | Background Image",
"thumbnail": "https://images3.alphacoders.com/916/thumb-350-91659.webp",
"image": "https://images3.alphacoders.com/916/91659.jpg"
},
{
"title": "Animal Cute Dog Puppy HD Wallpaper | Background Image",
"thumbnail": "https://images3.alphacoders.com/277/thumb-350-277727.webp",
"image": "https://images3.alphacoders.com/277/277727.jpg"
},
{
"title": "Animal Rabbit Bunny Cute HD Wallpaper | Background Image",
"thumbnail": "https://images5.alphacoders.com/599/thumb-350-599101.webp",
"image": "https://images5.alphacoders.com/599/599101.jpg"
},
{
"title": "Animal Cute Dog Rabbit Chess HD Wallpaper | Background Image",
"thumbnail": "https://images7.alphacoders.com/530/thumb-350-530001.webp",
"image": "https://images7.alphacoders.com/530/530001.jpg"
},
{
"title": "Animal Cute Cat Puppy Hug HD Wallpaper | Background Image",
"thumbnail": "https://images3.alphacoders.com/236/thumb-350-236577.webp",
"image": "https://images3.alphacoders.com/236/236577.jpg"
},
{
"title": "Animal Cute Dog Rabbit Puppy HD Wallpaper | Background Image",
"thumbnail": "https://images5.alphacoders.com/349/thumb-350-349838.webp",
"image": "https://images5.alphacoders.com/349/349838.jpg"
},
{
"title": "Animal Horse Cat Cute Kitten Pet HD Wallpaper | Background Image",
"thumbnail": "https://images6.alphacoders.com/342/thumb-350-342972.webp",
"image": "https://images6.alphacoders.com/342/342972.jpg"
},
{
"title": "Animal Cat Cats Kitten Cute HD Wallpaper | Background Image",
"thumbnail": "https://images5.alphacoders.com/414/thumb-350-414645.webp",
"image": "https://images5.alphacoders.com/414/414645.jpg"
},
{
"title": "Animal Cute Dog Deer Fawn Love HD Wallpaper | Background Image",
"thumbnail": "https://images2.alphacoders.com/772/thumb-350-772726.webp",
"image": "https://images2.alphacoders.com/772/772726.jpg"
},
{
"title": "Animal Cute Dog Puppy Wagon HD Wallpaper | Background Image",
"thumbnail": "https://images4.alphacoders.com/274/thumb-350-274724.webp",
"image": "https://images4.alphacoders.com/274/274724.jpg"
},
{
"title": "Animal Cute Dog Cat HD Wallpaper | Background Image",
"thumbnail": "https://images6.alphacoders.com/346/thumb-350-346904.webp",
"image": "https://images6.alphacoders.com/346/346904.jpg"
},
{
"title": "Animal Labrador Retriever Dogs Puppy Dog Cute HD Wallpaper | Background Image",
"thumbnail": "https://images7.alphacoders.com/323/thumb-350-323376.webp",
"image": "https://images7.alphacoders.com/323/323376.jpg"
},
{
"title": "Animal Cute HD Wallpaper | Background Image",
"thumbnail": "https://images2.alphacoders.com/814/thumb-350-81472.webp",
"image": "https://images2.alphacoders.com/814/81472.jpg"
},
{
"title": "Animal Cute Dog Cat Love Humor Funny HD Wallpaper | Background Image",
"thumbnail": "https://images7.alphacoders.com/313/thumb-350-313966.webp",
"image": "https://images7.alphacoders.com/313/313966.jpg"
},
{
"title": "Animal Cute HD Wallpaper | Background Image",
"thumbnail": "https://images5.alphacoders.com/420/thumb-350-420979.webp",
"image": "https://images5.alphacoders.com/420/420979.jpg"
},
{
"title": "Animal Cat Cats Kitten Cute HD Wallpaper | Background Image",
"thumbnail": "https://images2.alphacoders.com/805/thumb-350-805719.webp",
"image": "https://images2.alphacoders.com/805/805719.jpg"
},
{
"title": "Humor Cute Bear HD Wallpaper | Background Image",
"thumbnail": "https://images.alphacoders.com/906/thumb-350-90691.webp",
"image": "https://images.alphacoders.com/906/90691.jpg"
},
{
"title": "Animal Cute HD Wallpaper | Background Image",
"thumbnail": "https://images6.alphacoders.com/417/thumb-350-417432.webp",
"image": "https://images6.alphacoders.com/417/417432.jpg"
},
{
"title": "Animal Cute Kitten Bird Hummingbird HD Wallpaper | Background Image",
"thumbnail": "https://images7.alphacoders.com/599/thumb-350-599441.webp",
"image": "https://images7.alphacoders.com/599/599441.jpg"
},
{
"title": "Animal Cat Cats Kitten Basket Cute Baby Animal Stare HD Wallpaper | Background Image",
"thumbnail": "https://images6.alphacoders.com/815/thumb-350-815873.webp",
"image": "https://images6.alphacoders.com/815/815873.jpg"
},
{
"title": "Photography Cute HD Wallpaper | Background Image",
"thumbnail": "https://images3.alphacoders.com/187/thumb-350-187065.webp",
"image": "https://images3.alphacoders.com/187/187065.jpg"
},
{
"title": "Dark Ghost Cute White Black HD Wallpaper | Background Image",
"thumbnail": "https://images8.alphacoders.com/654/thumb-350-654111.webp",
"image": "https://images8.alphacoders.com/654/654111.jpg"
},
{
"title": "Animal Cute Pink Rabbit Bunny Flower HD Wallpaper | Background Image",
"thumbnail": "https://images3.alphacoders.com/274/thumb-350-274727.webp",
"image": "https://images3.alphacoders.com/274/274727.jpg"
},
{
"title": "Animal Puppy Dogs Dog Cute Grass Pet HD Wallpaper | Background Image",
"thumbnail": "https://images6.alphacoders.com/542/thumb-350-542761.webp",
"image": "https://images6.alphacoders.com/542/542761.jpg"
},
{
"title": "Animal Cute HD Wallpaper | Background Image",
"thumbnail": "https://images6.alphacoders.com/420/thumb-350-420981.webp",
"image": "https://images6.alphacoders.com/420/420981.jpg"
},
{
"title": "Animal Cute Puppy Duck HD Wallpaper | Background Image",
"thumbnail": "https://images5.alphacoders.com/471/thumb-350-471205.webp",
"image": "https://images5.alphacoders.com/471/471205.jpg"
},
{
"title": "Animal Cute Pig HD Wallpaper | Background Image",
"thumbnail": "https://images3.alphacoders.com/171/thumb-350-171919.webp",
"image": "https://images3.alphacoders.com/171/171919.jpg"
}
]
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
  url: 'https://random-stuff-api.p.rapidapi.com/anime/',
  params: {channel: "1", query: "cute"},
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

url = "https://random-stuff-api.p.rapidapi.com/anime"

  params: {"channel": "1", "query": "cute"},

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
