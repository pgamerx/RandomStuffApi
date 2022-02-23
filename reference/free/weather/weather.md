---
description: >-
  This is complete documentation about how to get Weather using Random Stuff API
  (This Endpoint is accessible using free plan as well as Paid plan)
---

# ℹ /weather

{% hint style="danger" %}
Since this API is only accessible using RapidAPI, you need to change the base URL to [**https://random-stuff-api.p.rapidapi.com**](https://api.pgamerx.com/new)****
{% endhint %}

{% swagger method="get" path="/weather" baseUrl="https://api.pgamerx.com" summary="This endpoint allows you to access weather details of any city." %}
{% swagger-description %}

{% endswagger-description %}

{% swagger-parameter in="query" name="city" required="true" %}
The city you want weather details about.
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
    "current": {
      "day": "Wednesday",
      "date": "2022-01-12",
      "skycode": "31",
      "skytext": "Mostly Clear",
      "humidity": "100",
      "imageUrl": "http://blob.weather.microsoft.com/static/weather4/en-us/law/31.gif",
      "shortday": "Wed",
      "feelslike": "10",
      "windspeed": "0 km/h",
      "temperature": "9",
      "winddisplay": "0 km/h",
      "observationtime": "18:30:00",
      "observationpoint": "Amritsar, India"
    },
    "forecast": [
      {
        "day": "Tuesday",
        "low": "4",
        "date": "2022-01-11",
        "high": "17",
        "precip": "",
        "shortday": "Tue",
        "skycodeday": "31",
        "skytextday": "Clear"
      },
      {
        "day": "Wednesday",
        "low": "5",
        "date": "2022-01-12",
        "high": "15",
        "precip": "0",
        "shortday": "Wed",
        "skycodeday": "32",
        "skytextday": "Sunny"
      },
      {
        "day": "Thursday",
        "low": "5",
        "date": "2022-01-13",
        "high": "17",
        "precip": "0",
        "shortday": "Thu",
        "skycodeday": "32",
        "skytextday": "Sunny"
      },
      {
        "day": "Friday",
        "low": "4",
        "date": "2022-01-14",
        "high": "17",
        "precip": "0",
        "shortday": "Fri",
        "skycodeday": "28",
        "skytextday": "Mostly Cloudy"
      },
      {
        "day": "Saturday",
        "low": "7",
        "date": "2022-01-15",
        "high": "17",
        "precip": "0",
        "shortday": "Sat",
        "skycodeday": "30",
        "skytextday": "Partly Sunny"
      }
    ],
    "location": {
      "lat": "31.638",
      "long": "74.868",
      "name": "Amritsar, India",
      "alert": "",
      "timezone": "5.5",
      "degreetype": "C",
      "imagerelativeurl": "http://blob.weather.microsoft.com/static/weather4/en-us/"
    }
  },
  {
    "current": {
      "day": "Wednesday",
      "date": "2022-01-12",
      "skycode": "31",
      "skytext": "Mostly Clear",
      "humidity": "100",
      "imageUrl": "http://blob.weather.microsoft.com/static/weather4/en-us/law/31.gif",
      "shortday": "Wed",
      "feelslike": "10",
      "windspeed": "0 km/h",
      "temperature": "10",
      "winddisplay": "0 km/h",
      "observationtime": "18:30:00",
      "observationpoint": "Amritsar district, India"
    },
    "forecast": [
      {
        "day": "Tuesday",
        "low": "5",
        "date": "2022-01-11",
        "high": "17",
        "precip": "",
        "shortday": "Tue",
        "skycodeday": "31",
        "skytextday": "Clear"
      },
      {
        "day": "Wednesday",
        "low": "5",
        "date": "2022-01-12",
        "high": "17",
        "precip": "0",
        "shortday": "Wed",
        "skycodeday": "32",
        "skytextday": "Sunny"
      },
      {
        "day": "Thursday",
        "low": "5",
        "date": "2022-01-13",
        "high": "17",
        "precip": "0",
        "shortday": "Thu",
        "skycodeday": "32",
        "skytextday": "Sunny"
      },
      {
        "day": "Friday",
        "low": "4",
        "date": "2022-01-14",
        "high": "17",
        "precip": "0",
        "shortday": "Fri",
        "skycodeday": "28",
        "skytextday": "Mostly Cloudy"
      },
      {
        "day": "Saturday",
        "low": "7",
        "date": "2022-01-15",
        "high": "17",
        "precip": "0",
        "shortday": "Sat",
        "skycodeday": "30",
        "skytextday": "Partly Sunny"
      }
    ],
    "location": {
      "lat": "31.583",
      "long": "74.983",
      "name": "Amritsar district, India",
      "alert": "",
      "timezone": "5.5",
      "degreetype": "C",
      "imagerelativeurl": "http://blob.weather.microsoft.com/static/weather4/en-us/"
    }
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
  url: 'https://random-stuff-api.p.rapidapi.com/weather',
  params: {city: 'The city you want weather details for'},
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
*/
```
{% endtab %}

{% tab title="Python" %}
```python
import requests

url = "https://random-stuff-api.p.rapidapi.com/weather"

params = {city: 'The city you want weather details for'}

headers = {
    'authorization': "You Random Stuff API Key",
    'x-rapidapi-host': "random-stuff-api.p.rapidapi.com",
    'x-rapidapi-key': "RapidAPI Key"
    }

response = requests.request("GET", url, headers=headers, params=params)

print(response.text)
```
{% endtab %}
{% endtabs %}

{% hint style="success" %}
For examples in all languages, checkout [RapidAPI Page](https://api.pgamerx.com/new)
{% endhint %}
