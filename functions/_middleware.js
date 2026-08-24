const DV360_HOST = 'yt-dv360.ashsundaram.com';

export async function onRequest(context) {
	const url = new URL(context.request.url);

	if (url.hostname.toLowerCase() !== DV360_HOST) {
		return context.next();
	}

	const assetURL = new URL(context.request.url);
	if (url.pathname === '/' || url.pathname === '/index.html') {
		assetURL.pathname = '/yt-dv360/';
	} else if (url.pathname === '/privacy-policy.html' || url.pathname === '/privacy-policy') {
		assetURL.pathname = '/yt-dv360/privacy-policy/';
	} else if (url.pathname.startsWith('/yt-dv360/')) {
		assetURL.pathname = url.pathname;
	} else {
		assetURL.pathname = `/yt-dv360${url.pathname}`;
	}

	return context.env.ASSETS.fetch(new Request(assetURL, context.request));
}
