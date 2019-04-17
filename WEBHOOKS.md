# BitIndex Webhooks Guide
> https://www.bitindex.network

### Webhooks API

##### PUT /api/v2/webhook_endpoints?api_key=YOUR_API_KEY
Enable webhooks and specify the URL to receive callbacks at

Request body (`application/json`)
```
{
    "url": "http://yourappdomain.com/path/callback",
    "secret": "secret123key",
    "enabled": true
}
```

##### GET /api/v2/webhook_endpoints?api_key=YOUR_API_KEY
Get webhook settings.

Response body (`application/json`)
```
{
    data: {
        "id": "9561c720-10bc-11e9-bb8c-9932d7d4e1a6",
        "url": "http://yourappdomain.com/path/callback",
        "secret": "secret123key",
        "enabled": true
    }
}
```
localhost:3000/api/v2/monitored?api_key=key1
##### PUT /api/v2/monitored?api_key=YOUR_API_KEY
Add addresses and xpubs for monitoring to receive webhooks when payments are made.

Request body (`application/json`)
```
[
  {
    "addr": "xpub6CYu4dQVx3Ki3ooYqVdDH1md7hGJZSxCSRFEfKAmoowPRPcwmXRGqdrMcJh7jhTY2a2BT2nSX8AESPgQfhgnfUdcn8N9EwJkWEKBHHJV7fJ"
  },
  {
    "addr": "1M6N389jhRi5DQgoQcNir2e2REpYeAYavD"
  }
]
```

##### GET /api/v2/monitored?api_key=YOUR_API_KEY
Get all addresses and xpubs monitored.

Response body (`application/json`)
```
{
    "data": [
        {
            "addr": "xpub6CYu4dQVx3Ki3ooYqVdDH1md7hGJZSxCSRFEfKAmoowPRPcwmXRGqdrMcJh7jhTY2a2BT2nSX8AESPgQfhgnfUdcn8N9EwJkWEKBHHJV7fJ"
        },
        {
            "addr": "1M6N389jhRi5DQgoQcNir2e2REpYeAYavD"
        }
    ]
]
```


##### POST /webhook/callback (to your server)
Callbacks for addresses are received at your configured URL.

Note: You can receive up to multiple callbacks in any order. Make sure to check the 'confirmations' parameter and always use the highest 'confirmations' your application has seen before.

It is possible that old webhooks are in transit with a lower 'confirmations' than what you have received before.

Note: You should be able to rely on payments of 3 confirmations. Always check with the > and < operators since it cannot be guaranteed that you will receive a webhook with exactly _3 confirmations_ (it could be 4, 5 or more).

Request body (`application/json`)
```
{
    txid: 'e9865ab744ef236f0f436455a439263a53d9708f5eca66625dccb85cf1ff5947',
    address: '1M6N389jhRi5DQgoQcNir2e2REpYeAYavD',
    xpub: 'xpub6CYu...',    // Xpub will be present if address is associated with an xpub
    path: '1/0',            // Path is set if xpub is present
    satoshis: 1273,
    confirmations: 3,
    vout: 0,
    secret: "secret123key", // Set this secret key above and then compare in your code
}
```