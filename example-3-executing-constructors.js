console.log('\nExample 3 - executing constructors');

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
        BaseClass.call(this);
        this._basicMove = this.move;

        this.move = function(distance) {
            distance = distance || 0;
            this._basicMove.call(this, distance);
            console.log('\tWith Bycicle!');
            this.state();
        }
    }

    function Vehicle() {
        BaseClass.call(this);
        this._basicMove = this.move;
        console.log('New Vehicle Created!');

        this.move = function(distance) {
            distance = distance || 0;
            this._basicMove.call(this, distance);
            console.log('\tWith Vehicle!');
            this.state();
        }
    }


    var bc = new Bicycle();
    var vh = new Vehicle();
    bc.move(5);
    vh.move(20);
}
