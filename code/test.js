/**
 * Created by Eduard on 4/20/2017.
 */

function testStrokeIsoscelesTrapezoid() {
    var context = document.querySelector('canvas').getContext('2d');
    var bool = false;

    setInterval(function() {
        context.clearRect(0, 0, 500, 500);
        context.strokeRect(20, 10, 1, 1);
        if(bool) {
            context.strokeIsoscelesTrapezoid(20, 10, 50, 70, 35);
        } else {
            context.strokeIsoscelesTrapezoid(20, 10, 70, 50, 35);
        }

        bool = !bool;
    }, 500);
}

function testQuadraticCurve() {
    var context = document.querySelector('canvas').getContext('2d');

    context.clearRect(0, 0, 500, 100);

    context.translate(10, 10);
    context.beginPath();
    context.moveTo(30, 0);
    var x, y;
    x = 30*Math.cos(Math.PI / 4);
    y = 30*Math.sin(Math.PI / 4);
    context.quadraticCurveTo(0, 0, x, y);
    context.stroke();

    context.fillStyle = 'red';
    context.fillRect(0, 0, 1, 1);
    context.fillRect(x, y, 1 ,1);


}

// testStrokeIsoscelesTrapezoid();
testQuadraticCurve();