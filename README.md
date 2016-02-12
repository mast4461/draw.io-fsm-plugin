# draw.io-fsm-plugin
A plugin for [draw.io](https://www.draw.io/) for working with finite state machines. Useful for designing and trying UI flows.

### Installation
[This post](https://plus.google.com/+DrawIo1/posts/CXEvmL16mjp) by draw.io has instructions on how to install plugins:

- Go to draw.io online (Confluence plugin is getting this functionality soon)
- Select File->Plugins
- Click add, paste distribution link (see below) into the dialog text field that appears.
- Click OK, apply, OK
- Refresh the page, click OK on the warning dialog (you trust us enough to run draw.io, after all, but take this seriously for plugins from any other source).

### Distribution links
Distribution through [RawGit](https://rawgit.com/).
- [Link for heavy usage of plugin](https://rawgit.com/mast4461/draw.io-fsm-plugin/master/dist/fsm-plugin.js)
- [Link for light usage of plugin](https://rawgit.com/mast4461/draw.io-fsm-plugin/master/dist/fsm-plugin.js)

### Usage
The [examples directory](https://github.com/mast4461/draw.io-fsm-plugin/tree/master/examples) contains examples that can be imported in draw.io to showcase the functionality. The plugin is designed for diagrams with labeled images and connections (only). **It's important that all images in the flow have labels.**

A run of the design can be initiated in two ways: selecting FSM > Run from the menu bar, or clicking the FSM icon in the toolbar. If a node is currently selected, it will be used as the starting point for the run. If no node is selected, the node with the label "start" will be used as the starting point. If no node matches these criteria, the run won't start.
