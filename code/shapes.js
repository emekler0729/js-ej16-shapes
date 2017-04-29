/**
 * Created by Eduard on 4/29/2017.
 */

var canvasContextPrototype = Object.getPrototypeOf(document.querySelector('canvas').getContext('2d'));

canvasContextPrototype.strokeIsoscelesTrapezoid = function(x, y, a, b, height) {
    var d = Math.abs((a - b) / 2);

    this.beginPath();
    if(a < b) {
        x = x + d;
    }
    this.moveTo(x, y);
    x = x + a;
    this.lineTo(x, y);
    if(a < b) {
        x = x + d;
    } else {
        x = x - d;
    }
    y = y + height;
    this.lineTo(x, y);
    x = x - b;
    this.lineTo(x, y);
    this.closePath();
    this.stroke();
};

canvasContextPrototype.fillDiamond = function(x, y, width) {
    var a = Math.sqrt(Math.pow(width, 2) / 2);

    this.save();

    this.translate(x, y);
    this.translate(width / 2, 0);
    this.rotate(45 * Math.PI / 180);

    this.beginPath();

    for(var i = 0; i < 4; i++) {
        this.lineTo(a, 0);
        this.translate(a, 0);
        this.rotate(90 * Math.PI / 180);
    }

    this.fill();

    this.restore();
};

canvasContextPrototype.strokeZigZag = function(x, y, width, height, density) {
    density = density || 6;
    var lineHeight = height / (2 * density);

    this.save();

    this.beginPath();
    this.moveTo(x, y);
    this.translate(x, y);
    for(var lineSeg = 0; lineSeg < 2 * density; lineSeg++) {
        this.lineTo(width, lineHeight);
        this.translate(width, lineHeight);
        width = - width;
    }
    this.stroke();

    this.restore();
};

canvasContextPrototype.strokeSpiral = function(x, y, width, density, segments) {
    density = density || 3;
    segments = segments || 100;

    var radius = width / 2;
    var deltaPerRing = Math.floor(segments / density);
    var deltaPerPoint = (2 * Math.PI) / deltaPerRing;
    var rScale = radius / (density * deltaPerRing);

    this.save();
    this.beginPath();
    this.translate(x + radius, y + radius);
    for(var i = 1; i <= segments; i++) {
        this.lineTo((rScale*i)*Math.cos(deltaPerPoint*i),(rScale*i)*Math.sin(deltaPerPoint*i));
    }
    this.stroke();
    this.restore();
};

canvasContextPrototype.fillStar = function(x, y, width, peaks) {
    peaks = peaks || 8;
    var radius = width / 2;

    this.save();
    this.translate(x + radius, y + radius);
    this.beginPath();
    this.moveTo(radius, 0);

    for(var i = 1; i <= peaks; i++) {
        this.quadraticCurveTo(0, 0, radius*Math.cos(i * 2 * Math.PI / peaks), radius*Math.sin(i * 2 * Math.PI / peaks));
    }

    this.fill();
    this.restore();
};
