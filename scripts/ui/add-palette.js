var init = function (ui) {
	ui.sidebar.addPalette('BPMNLibrary', 'BPMN', true, function(content) {

        // content.appendChild(ui.sidebar.createVertexTemplate(null, 120, 60));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=https://googledrive.com/host/0B8WNmkSxRc5EOENlMVY4UWRHc3c/BPMN-Mail-Double-Simpler.svg', 100, 100));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=https://dl.dropboxusercontent.com/u/32326923/pluginImages/bpmn/BPMN-mail-dotted-2-1-01.png', 100, 100));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=https://dl.dropboxusercontent.com/u/32326923/pluginImages/bpmn/BPMN-mail-dotted-2-01.png', 100, 100));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=https://dl.dropboxusercontent.com/u/32326923/pluginImages/bpmn/BPMN-mail-dotted-double-1-01.png', 100, 100));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=https://dl.dropboxusercontent.com/u/32326923/pluginImages/bpmn/BPMN-mail-dotted-double-2-01.png', 100, 100));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=https://dl.dropboxusercontent.com/u/32326923/pluginImages/bpmn/BPMN-mail-dotted-double-4-01.png', 100, 100));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=https://dl.dropboxusercontent.com/u/32326923/pluginImages/bpmn/BPMN-mail-dotted-thick-01.png', 100, 100));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=https://dl.dropboxusercontent.com/u/32326923/pluginImages/bpmn/BPMN-mail-double-01.png', 100, 100));
        content.appendChild(ui.sidebar.createVertexTemplate('image;image=https://dl.dropboxusercontent.com/u/32326923/pluginImages/bpmn/BPMN-mail-single-01.png', 100, 100));
        content.appendChild(ui.sidebar.createVertexTemplate('ellipse', 80, 80));
        content.appendChild(ui.sidebar.createVertexTemplate('shape=hexagon', 120, 80));

        content.appendChild(ui.sidebar.createEdgeTemplate('edgeStyle=none;endArrow=none;', 100, 100));
        content.appendChild(ui.sidebar.createEdgeTemplate('shape=link', 100, 100));
        content.appendChild(ui.sidebar.createEdgeTemplate('arrow', 100, 100));
    });
};

module.exports = init;
