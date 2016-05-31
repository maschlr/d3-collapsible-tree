var Tree = require('../index.js');

var el = document.querySelector('body');

// you can also set a couple of other things like dimensions in this object
var options = {
    element: el,
    showTooltip: true
};

var tree = Tree(options);

// Get some sample data
tree.showTooltip(function(d) {return d.name;});
tree.getData("flare.json");
