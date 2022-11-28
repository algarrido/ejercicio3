---
title: Regularización de remanente v1.0
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2
---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="regularizaci-n-de-remanente">Regularización de remanente v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

Pemite consultar y modificar el remanente de un terminal para un centro de venta dado.

Base URLs:

- <a href="http://localhost:8000/remanente/">http://localhost:8000/remanente/</a>

# Authentication

<h1 id="regularizaci-n-de-remanente-remanente-controller">remanente-controller</h1>

## get\__obtenerLista_{empresaV}\_{centroV}

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:8000/remanente/obtenerLista/{empresaV}/{centroV}

```

```http
GET http://localhost:8000/remanente/obtenerLista/{empresaV}/{centroV} HTTP/1.1
Host: localhost:8000

```

```javascript
fetch("http://localhost:8000/remanente/obtenerLista/{empresaV}/{centroV}", {
  method: "GET",
})
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

result = RestClient.get 'http://localhost:8000/remanente/obtenerLista/{empresaV}/{centroV}',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.get('http://localhost:8000/remanente/obtenerLista/{empresaV}/{centroV}')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost:8000/remanente/obtenerLista/{empresaV}/{centroV}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:8000/remanente/obtenerLista/{empresaV}/{centroV}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:8000/remanente/obtenerLista/{empresaV}/{centroV}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /obtenerLista/{empresaV}/{centroV}`

<h3 id="get__obtenerlista_{empresav}_{centrov}-parameters">Parameters</h3>

| Name     | In   | Type      | Required | Description |
| -------- | ---- | --------- | -------- | ----------- |
| empresaV | path | undefined | true     | empresaV    |
| centro   | path | undefined | true     | centro      |

<h3 id="get__obtenerlista_{empresav}_{centrov}-responses">Responses</h3>

| Status | Meaning | Description | Schema |
| ------ | ------- | ----------- | ------ |

<aside class="success">
This operation does not require authentication
</aside>

## put\__elimina_{empresaV}_{centroV}_{terminal}

> Code samples

```shell
# You can also use wget
curl -X PUT http://localhost:8000/remanente/elimina/{empresaV}/{centroV}/{terminal}

```

```http
PUT http://localhost:8000/remanente/elimina/{empresaV}/{centroV}/{terminal} HTTP/1.1
Host: localhost:8000

```

```javascript
fetch(
  "http://localhost:8000/remanente/elimina/{empresaV}/{centroV}/{terminal}",
  {
    method: "PUT",
  }
)
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

result = RestClient.put 'http://localhost:8000/remanente/elimina/{empresaV}/{centroV}/{terminal}',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.put('http://localhost:8000/remanente/elimina/{empresaV}/{centroV}/{terminal}')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','http://localhost:8000/remanente/elimina/{empresaV}/{centroV}/{terminal}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:8000/remanente/elimina/{empresaV}/{centroV}/{terminal}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "http://localhost:8000/remanente/elimina/{empresaV}/{centroV}/{terminal}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /elimina/{empresaV}/{centroV}/{terminal}`

<h3 id="put__elimina_{empresav}_{centrov}_{terminal}-parameters">Parameters</h3>

| Name     | In   | Type      | Required | Description |
| -------- | ---- | --------- | -------- | ----------- |
| empresaV | path | undefined | true     | empresaV    |
| centro   | path | undefined | true     | centro      |
| terminal | path | undefined | true     | terminal    |

<h3 id="put__elimina_{empresav}_{centrov}_{terminal}-responses">Responses</h3>

| Status | Meaning | Description | Schema |
| ------ | ------- | ----------- | ------ |

<aside class="success">
This operation does not require authentication
</aside>

## get\__obtenerTerminal_{empresaV}_{centro}_{terminal}

> Code samples

```shell
# You can also use wget
curl -X GET http://localhost:8000/remanente/obtenerTerminal/{empresaV}/{centro}/{terminal}

```

```http
GET http://localhost:8000/remanente/obtenerTerminal/{empresaV}/{centro}/{terminal} HTTP/1.1
Host: localhost:8000

```

```javascript
fetch(
  "http://localhost:8000/remanente/obtenerTerminal/{empresaV}/{centro}/{terminal}",
  {
    method: "GET",
  }
)
  .then(function (res) {
    return res.json();
  })
  .then(function (body) {
    console.log(body);
  });
```

```ruby
require 'rest-client'
require 'json'

result = RestClient.get 'http://localhost:8000/remanente/obtenerTerminal/{empresaV}/{centro}/{terminal}',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.get('http://localhost:8000/remanente/obtenerTerminal/{empresaV}/{centro}/{terminal}')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','http://localhost:8000/remanente/obtenerTerminal/{empresaV}/{centro}/{terminal}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("http://localhost:8000/remanente/obtenerTerminal/{empresaV}/{centro}/{terminal}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "http://localhost:8000/remanente/obtenerTerminal/{empresaV}/{centro}/{terminal}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /obtenerTerminal/{empresaV}/{centro}/{terminal}`

<h3 id="get__obtenerterminal_{empresav}_{centro}_{terminal}-parameters">Parameters</h3>

| Name     | In   | Type      | Required | Description |
| -------- | ---- | --------- | -------- | ----------- |
| empresaV | path | undefined | true     | empresaV    |
| centro   | path | undefined | true     | centro      |
| terminal | path | undefined | true     | terminal    |

<h3 id="get__obtenerterminal_{empresav}_{centro}_{terminal}-responses">Responses</h3>

| Status | Meaning | Description | Schema |
| ------ | ------- | ----------- | ------ |

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_ResponseDTO">ResponseDTO</h2>
<!-- backwards compatibility -->
<a id="schemaresponsedto"></a>
<a id="schema_ResponseDTO"></a>
<a id="tocSresponsedto"></a>
<a id="tocsresponsedto"></a>

```json
{}
```

### Properties

_None_

<h2 id="tocS_ModificaRemanenteDTO">ModificaRemanenteDTO</h2>
<!-- backwards compatibility -->
<a id="schemamodificaremanentedto"></a>
<a id="schema_ModificaRemanenteDTO"></a>
<a id="tocSmodificaremanentedto"></a>
<a id="tocsmodificaremanentedto"></a>

```json
{}
```

### Properties

_None_

<h2 id="tocS_TerminalDTO">TerminalDTO</h2>
<!-- backwards compatibility -->
<a id="schematerminaldto"></a>
<a id="schema_TerminalDTO"></a>
<a id="tocSterminaldto"></a>
<a id="tocsterminaldto"></a>

```json
{}
```

### Properties

_None_
