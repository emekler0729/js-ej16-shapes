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

testStrokeIsoscelesTrapezoid();