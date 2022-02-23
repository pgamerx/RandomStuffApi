---
description: >-
  This is complete documentation about how to get AI Response using Random Stuff
  API (This Endpoint is accessible using free plan as well as Paid plan)
---

# ℹ /ai

{% hint style="danger" %}
Since this API is only accessible using RapidAPI, you need to change the base URL to [**https://random-stuff-api.p.rapidapi.com**](https://api.pgamerx.com/new)****
{% endhint %}

{% swagger method="get" path="" baseUrl="https://api.pgamerx.com" summary="This endpoint allows you to get AI Response, whilst offering you proper flexibility." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="query" name="message" required="true" %}
The message you want to get a response for.
{% endswagger-parameter %}

{% swagger-parameter in="query" name="id" %}
The unique ID is used by the AI to identify multiple users.
{% endswagger-parameter %}

{% swagger-parameter in="query" name="bot_name" %}
Name of the bot
{% endswagger-parameter %}

{% swagger-parameter in="query" name="bot_gender" %}
Gender of the bot
{% endswagger-parameter %}

{% swagger-parameter in="query" name="bot_master" %}
Master of the bot
{% endswagger-parameter %}

{% swagger-parameter in="header" name="Authorizaion" required="true" %}
Your Random Stuff API Key
{% endswagger-parameter %}

{% swagger-parameter in="query" name="bot_age" %}
Age of the bot
{% endswagger-parameter %}

{% swagger-parameter in="query" name="bot_company" %}
Company of the bot
{% endswagger-parameter %}

{% swagger-parameter in="header" name="x-rapidapi-key" required="true" %}
Your RapidAPI key
{% endswagger-parameter %}

{% swagger-parameter in="query" name="bot_location" %}
Location of the bot
{% endswagger-parameter %}

{% swagger-parameter in="header" name="x-rapidapi-host" required="true" %}
It should always be set to:&#x20;

**random-stuff-api.p.rapidapi.com**
{% endswagger-parameter %}

{% swagger-parameter in="query" name="bot_email" %}
Email of the bot/developer
{% endswagger-parameter %}

{% swagger-parameter in="query" name="bot_build" %}
Build of the bot
{% endswagger-parameter %}

{% swagger-parameter in="query" name="bot_birth_year" %}
Bot's Birth Year
{% endswagger-parameter %}

{% swagger-parameter in="query" name="bot_birth_date" %}
Bot's Birth Date
{% endswagger-parameter %}

{% swagger-parameter in="query" name="bot_birth_place" %}
Bot's Birth Place
{% endswagger-parameter %}

{% swagger-parameter in="query" name="bot_favorite_color" %}
Bot's favourite Color
{% endswagger-parameter %}

{% swagger-parameter in="query" name="bot_favorite_book" %}
Bot's favourite book
{% endswagger-parameter %}

{% swagger-parameter in="query" name="bot_favorite_band" %}
Bot's favourite band
{% endswagger-parameter %}

{% swagger-parameter in="query" name="bot_favorite_artist" %}
Bot's favourite artist
{% endswagger-parameter %}

{% swagger-parameter in="query" name="bot_favorite_actress" %}
Bot's favourite actress
{% endswagger-parameter %}

{% swagger-parameter in="query" name="bot_favorite_actor" %}
Bot's favourite actor
{% endswagger-parameter %}

{% swagger-response status="200: OK" description="The request went through and you got the response" %}
```javascript
{
"BotDetails":{
"BotName":"Random Stuff Api",
"BotMaster":"PGamerX ",
"BotAge":"19",
"BotLocation":"India",
"BotCompany":"PGamerX Studio",
"BotBirthYear":"2002",
"BotBirthDate":"1st January, 2002",
"BotBirthPlace":"India",
},
"AIResponse":"I'm very well. Thanks! How are you doing? Let me know what I can do for you."
}
```
{% endswagger-response %}

{% swagger-response status="403: Forbidden" description="Your request failed, probably because of invalid key" %}

{% endswagger-response %}
{% endswagger %}

{% tabs %}
{% tab title="NodeJS" %}
```javascript
var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://random-stuff-api.p.rapidapi.com/ai',
  params: {
    msg: 'Hi there, how are you? (REQUIRED)',
    bot_name: 'Random Stuff Api (OPTIONAL)',
    bot_gender: 'male (OPTIONAL)',
    bot_master: 'PGamerX (OPTIONAL)',
    bot_age: '19 (OPTIONAL)',
    bot_company: 'PGamerX Studio (OPTIONAL)',
    bot_location: 'India (OPTIONAL)',
    bot_email: 'admin@pgamerx.com (OPTIONAL)',
    bot_build: 'Public (OPTIONAL)',
    bot_birth_year: '2002 (OPTIONAL)',
    bot_birth_date: '1st January, 2002 (OPTIONAL)',
    bot_birth_place: 'India (OPTIONAL)',
    bot_favorite_color: 'Blue (OPTIONAL)',
    bot_favorite_book: 'Harry Potter (OPTIONAL)',
    bot_favorite_band: 'Imagine Doggos (OPTIONAL)',
    bot_favorite_artist: 'Eminem (OPTIONAL)',
    bot_favorite_actress: 'Emma Watson (OPTIONAL)',
    bot_favorite_actor: 'Jim Carrey (OPTIONAL)',
    id: 'For customised response for each user'
  },
  headers: {
    authorization: 'Random Stuff API key',
    'x-rapidapi-host': 'random-stuff-api.p.rapidapi.com',
    'x-rapidapi-key': 'RapidAPI Key'
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

url = "https://random-stuff-api.p.rapidapi.com/ai"

querystring = {"msg":"Hi there, how are you? (REQUIRED)","bot_name":"Random Stuff Api (OPTIONAL)","bot_gender":"male (OPTIONAL)","bot_master":"PGamerX (OPTIONAL)","bot_age":"19 (OPTIONAL)","bot_company":"PGamerX Studio (OPTIONAL)","bot_location":"India (OPTIONAL)","bot_email":"admin@pgamerx.com (OPTIONAL)","bot_build":"Public (OPTIONAL)","bot_birth_year":"2002 (OPTIONAL)","bot_birth_date":"1st January, 2002 (OPTIONAL)","bot_birth_place":"India (OPTIONAL)","bot_favorite_color":"Blue (OPTIONAL)","bot_favorite_book":"Harry Potter (OPTIONAL)","bot_favorite_band":"Imagine Doggos (OPTIONAL)","bot_favorite_artist":"Eminem (OPTIONAL)","bot_favorite_actress":"Emma Watson (OPTIONAL)","bot_favorite_actor":"Jim Carrey (OPTIONAL)","id":"For customised response for each user"}

headers = {
    'authorization': "Random Stuff API key",
    'x-rapidapi-host': "random-stuff-api.p.rapidapi.com",
    'x-rapidapi-key': "RapidAPI key "
    }

response = requests.request("GET", url, headers=headers, params=querystring)

print(response.text)
```
{% endtab %}
{% endtabs %}

{% hint style="success" %}
For examples in all languages, checkout [RapidAPI Page](https://api.pgamerx.com/new)
{% endhint %}
