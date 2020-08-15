/**
 * Create an object that exposes some methods/properties
 */

const revealObj = (function(){
    let _data = [];

    let _render = function() {
        _data.push('R');
        return _data;
    }

    return {
        render: _render
    }
})();

console.log(revealObj.render());
