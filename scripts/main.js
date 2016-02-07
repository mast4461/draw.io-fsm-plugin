var util = require('./util');
var runFsm = require('./run-fsm');
var getFsmGraph = require('./get-fsm-graph');
require('./dialog-style');

Draw.loadPlugin(function(ui) {
    window.ui = ui;

    // Adds resource for action
    mxResources.parse('runFsmAction=Run FSM plugin');

    // Adds action
    ui.actions.addAction('runFsmAction', function () {
        var selectionCell = ui.editor.graph.getSelectionCell();
        runFsm(getFsmGraph(ui), selectionCell ? selectionCell.value : 'start');
    });

    ui.actions.addAction("setAsDefaultStyle", function() {
        d.isEnabled() && !d.isSelectionEmpty() && c.setDefaultStyle(d.getSelectionCell())
    }, null , null , "Ctrl+Shift+D");

    // Adds menu
    ui.menubar.addMenu('FSM', function(menu, parent) {
        ui.menus.addMenuItem(menu, 'runFsmAction');
    });

    // Adds toolbar button
    ui.toolbar.addSeparator();
    var elt = ui.toolbar.addItem('', 'runFsmAction');

    // Reorders menubar
    ui.menubar.container.insertBefore(ui.menubar.container.lastChild,
    ui.menubar.container.lastChild.previousSibling.previousSibling);

    // Set icon for menubar item (cannot use built-in sprites)
    // elt.firstChild.style.backgroundImage = 'url(https://www.draw.io/images/logo-small.gif)';
    elt.firstChild.style.backgroundImage = 'url(' + require('../resources/icon.json').dataUrl + ')';

    // Displays status message
    ui.editor.setStatus('FSM plugin loaded.');
});

// if (require.main === module) {
//     main();
// }