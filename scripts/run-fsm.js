var runFsm = function (graph, startNodeText) {
	startNodeText = startNodeText || 'start';

	var iStartNode = graph.nodes.map(function (node) {
		return node.text;
	}).indexOf(startNodeText);

	if (iStartNode === -1) {
		alert("No start node chosen. Choose one by selecting one or labeling one \"start\".");
		console.error("Couldn't find node with text", startNodeText);
	} else {
		doTransition(graph, iStartNode);
	}
};

var doTransition = function (graph, iNode) {
	var nodes = graph.nodes;
	var links = graph.links;

	if (!nodes[iNode]) {
		return;
	} else {
		iNode = parseInt(iNode);
		var node = nodes[iNode];
	}

	var currentLinks = links.filter(function (link) {
		return link.i === iNode;
	});

	if (currentLinks.length === 0) {
		currentLinks.push({	text: '(finish)' });
	}

	var c = document.createElement.bind(document);

	// Create dialog
	var dialog = c('dialog');
	dialog.setAttribute('id', 'run-dialog');
	dialog.className = 'fsm';

	// Create close button
	var closeButton = c('button');
	closeButton.textContent = 'X';
	closeButton.className = 'close';
	closeButton.onclick = dialog.remove.bind(dialog);
	dialog.appendChild(closeButton);

	// Create title
	var title = c('h1');
	title.innerHTML = node.text;
	dialog.appendChild(title);

	// Create image
	var img = c('img');
	img.setAttribute('src', node.imgsrc);
	dialog.appendChild(img);
	dialog.appendChild(c('br'));

	// Create buttons
	currentLinks.forEach(function (link) {
		var button = c('button');
		button.innerHTML = link.text || "-----";
		var iNextNode = nodes.indexOf(link.iNext);
		button.onclick = dialog.close.bind(dialog, link.iNext);
		dialog.appendChild(button);
	});

	dialog.addEventListener('close', function () {
		doTransition(graph, dialog.returnValue);
		dialog.remove();
	});

	document.body.appendChild(dialog);
	dialog.show();
};

module.exports = runFsm;