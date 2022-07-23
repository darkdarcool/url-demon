class UrlDemon {
	/**
	 * Loads a url that can be manipulated
	 * @param {String} url
	 */
	constructor(url) {
		this.url = url;
	}

	getSubAndHost() {
		// url = https://google.com
		let url = this._removedProtocol(this.url);
		url = this._removedTLD(url);
		return url;
	}

	/**
	 * Removed https or http from the url if it contains it
	 * @returns string
	 */
	_removedProtocol(url) {
		if (url.includes("https://") || url.includes("http://")) {
			return url.split("//")[1];
		}
		// return url;
	}

	_removedTLD(url) {
		let tldIndex = url.lastIndexOf(".");
		return url.substring(0, tldIndex);
	}

	/**
	 *	Returns the TLD of a url
	 *
	 * @returns string
	 */
	getTLD() {
		let url = this.url;
		let tldIndex = url.lastIndexOf(".");
		let tld = url.substring(tldIndex);
		return tld;
	}

	/**
	 * Returns the protocol of a url
	 *
	 * @returns string
	 */
	getProtocol() {
		return this.url.split(":")[0];
	}

	/**
	 * Returns the paths of a url
	 *
	 * @returns array
	 */

	getPaths() {
		let url = this.url;
		let path = url.split("/");
		path.splice(0, 3);
		return path;
	}

	/**
	 * Returns the parameters/query of a url
	 *
	 * @returns string[]
	 */

	getParameters() {
		let url = this.url;
		let parameters = url.split("?");
		parameters = parameters[1];
		parameters = parameters.split("&");
		return parameters;
	}
}

export default UrlDemon;
