import test from 'ava';
import UrlDemon from "./index.js"

test("It gets the url and subdomain", t => {
	let urldemon = new UrlDemon("https://google.com");
	t.is(urldemon.getSubAndHost(), "google");
	urldemon = new UrlDemon("https://search.google.com");
	t.is(urldemon.getSubAndHost(), "search.google");
});

test("It gets the TLD", t => {
	let urldemon = new UrlDemon("https://google.com");
	t.is(urldemon.getTLD(), ".com");
});

test("It gets the protocol", t => {
	let urldemon = new UrlDemon("https://google.com");
	t.is(urldemon.getProtocol(), "https");
});

test("It gets the paths", t => {
	let urldemon = new UrlDemon("https://google.com/search?q=javascript");
	t.deepEqual(urldemon.getPaths(), ["search", "q=javascript"]);
});
