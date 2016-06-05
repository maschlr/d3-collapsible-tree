var Tree = require('../d3-collapsible-tree.js');

var el = document.querySelector('body');

// you can also set a couple of other things like dimensions in this object
var options = {
    element: el
};

var tree = new Tree(options);

// Get some sample data
tree.getData("data/flare.json");
