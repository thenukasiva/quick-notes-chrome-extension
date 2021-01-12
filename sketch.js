let drawConfig = {
    color: 'black',
    weight: 4,
};
var s = function(sketch){
    sketch.setup = function(){
        document.body.style['userSelect'] = 'none';
        let h = document.body.clientHeight;
        let c = sketch.createCanvas(sketch.windowWidth,h);
        c.background(0,0);
        c.position(0,0);
        c.style('pointer-events', 'none');
        sketch.clear();
    }
        
    sketch.draw = function(){
        sketch.stroke(drawConfig.color);
        sketch.strokeWeight(drawConfig.weight);
        if(sketch.mouseIsPressed){
            sketch.line(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
        }
    }
}
var myp5 = new p5(s);

