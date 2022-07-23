declare class UrlDemon {
	/**
	 * The url being manipulated.
	 */
	private url: string;

	/**
	 * Loads a url that can be manipulated.
	 *
	 * @param url The url to manipulate.
	 */
	constructor(url: string);

	/**
	 * Returns the the subdomain(if it exists) and the hostname of the url
	 * @returns string The subdomain and hostname of the url.
	 * @example
	 * ```
	 * let urldemon = new UrlDemon("https://google.com");
	 * urldemon.getSubAndHost() // => "google";
	 * ```
	 * @example
	 * ```
	 * let urldemon = new UrlDemon("https://search.gooogle.com");
   * urldemon.getSubAndHost() // => "search.google";
	 * ```
	 */
	getSubAndHost(): string;

	/**
	 * Returns the TLD of a url
	 * @returns string
	 * @example
	 * ```
	 * let urldemon = new UrlDemon("https://google.com");
	 * urldemon.getTLD() // => ".com";
	 * ```
	 */
	getTLD(): string;

	/**
	 * Returns the protocol of a url
	 * @returns string
	 * @example
	 * ```
	 * let urldemon = new UrlDemon("https://google.com");
	 * urldemon.getProtocol() // => "https";
	 * ```
	 */
	getProtocol(): string;

	/**
	 * Returns the paths of a url
	 * @returns string[]
	 * @example
	 * ```
	 * let urldemon = new UrlDemon("http://example.com/hello/world");
	 * urldemon.getPaths() // => ["hello", "world"];
	 * ```
	 * @note This can contain url parameters/queries!
	 */
	getPaths(): string[];

	/**
	 * Returns the parameters/query of a url
	 * @returns string[]
	 * @example
	 * ```
	 * let urldemon = new UrlDemon("http://example.com/?q=10");
	 * urldemon.getParameters() // => ["q=10"];
	 * ```
	 */
	getParameters(): string[];
}

export = UrlDemon
