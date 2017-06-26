console.log('\nExample 2 - Using Prototypes');

{
    function BaseClass() {
        this.position = 0;

        this.move = function (distance) {
            distance = distance || 0;
            console.log('\tMove Action');
            this.position += Math.max(distance, 0);
        };

        this.state = function () {
            console.log('\tNew Position is ' + this.position);
        };
    }

    function Bicycle() {
        this.__proto__ = new BaseClass();

        this.move = function(distance) {
            distance = distance || 0;
            this.__proto__.move(distance);
            console.log('\tWith Bycicle!');
            this.state();
        }
    }

    function Vehicle() {
        this.__proto__ = new BaseClass();
        console.log('New Vehicle Created!');

        this.move = function(distance) {
            distance = distance || 0;
            this.__proto__.move(distance);
            console.log('\tWith Vehicle!');
            this.state();
        }
    }


    var bc = new Bicycle();
    var vh = new Vehicle();
    bc.move(5);
    vh.move(20);
}
