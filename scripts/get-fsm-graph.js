var util = require('./util');

var noTextSubstitute = '---';

var cellToLink = function (cell, nodeCells) {
	return {
		i: nodeCells.indexOf(cell.source),
		iNext: nodeCells.indexOf(cell.target),
		text: (cell.children && cell.children.length > 0) ? cell.children[0].value : noTextSubstitute
	};
};

var cellToNode = function (cell) {
	var node = {
		text: cell.value || noTextSubstitute,
	};

//	ui.editor.graph.getCellStyle(cell);
	var style = ui.editor.graph.getCellStyle(cell);
	if (style.image) {
		node.imgsrc = style.image;
	}

	return node;
};

var getFsmGraph = function (ui) {
	var cellsObj = ui.editor.graph.model.cells;
	var cells = util.getObjectValues(cellsObj);
	var candidates = cells.filter(cell => cell.isConnectable());
	var nodeCells = candidates.filter(cell => cell.isVertex());

	return {
		links: candidates.filter(cell => cell.isEdge()).map(cell => cellToLink(cell, nodeCells)),
		nodes: nodeCells.map(cellToNode)
	};
};

module.exports = getFsmGraph;