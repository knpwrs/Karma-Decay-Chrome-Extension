function search(info, tab) {
	var url = 'http://karmadecay.com/' + encodeURIComponent(info.srcUrl);
	chrome.tabs.create({url: url, selected: true });
}

chrome.contextMenus.create({'title': 'Search for this image on Karma Decay', 'contexts': ['image'], 'onclick': search});