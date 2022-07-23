# URL-DEMON

> A _`small`_, _`0 dependency`_, manipulation kit.

URL-DEMON is a library that provides a simple, low-level library for getting parts of a url

_Works in nodejs and web browsers_

# Installation

## NPM

```bash
npm install url-demon
```

## Yarn

```bash
yarn add url-demon
```

# Usage/API

> You can more examples in the ./index.d.ts file

## class UrlDemon

### constructor(url: string)

Sets the url that will be manipulated

### getSubAndHost(): string

Returns the subdomain(if it exists) and the hostname of the url

```js
let urldemon = new UrlDemon("https://google.com");
urldemon.getSubAndHost() // => "google";
```

### getTLD(): string;

Returns the TLD of a url

```js
let urldemon = new UrlDemon("https://google.com");
urldemon.getTLD() // => ".com";
```

### getProtocol(): string;

Returns the protocol of a url

```js
let urldemon = new UrlDemon("https://google.com");
urldemon.getProtocol() // => "https";
```

### getPaths(): string[];

Returns the paths of a url

```js
let urldemon = new UrlDemon("http://example.com/hello/world");
urldemon.getPaths() // => ["hello", "world"];
```

### getParameters(): string[];

Returns the parameters/query of a url

```js
let urldemon = new UrlDemon("http://example.com/?q=10");
urldemon.getParameters() // => ["q=10"];
```

# Related

[url-parse](https://www.npmjs.com/package/url-parse) - Small footprint URL parser that works seamlessly across Node.js and browser environments
