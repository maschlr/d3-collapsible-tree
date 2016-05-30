# d3.js collapsible tree layout
This is a small js library for a more convenient use of the d3 tree layout following the excellent tip of structuring d3 code with a object oriented approach by [@elliot_bentley](http://twitter.com/elliot_bentley) (["A better way to structure D3 code"](http://ejb.github.io/2016/05/23/a-better-way-to-structure-d3-code.html), [bl.ocks example](https://bl.ocks.org/ejb/79698ac221dbcff637b1930a387a9416)).

The code generating the tree layout is basically the same as
[Mike Bostock's](https://bl.ocks.org/mbostock/4339083).

## Minimal example
    var el = document.querySelector('#body');

    // you can also set a couple of other things like dimensions in this object
    var options = {element: el};

    var tree = new Tree(options);

    // Get some sample data
    tree.getData("https://bl.ocks.org/mbostock/raw/4063550/flare.json")
