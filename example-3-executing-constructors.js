console.log('\nExample 3 - executing constructors');
/*
 Implementation that features calling different constructors with shared context
 Totally manual
 Instance of extended "Class" can't be retrieved from child unless it's reference was written somewhere manually
 Can't access parent methods if rewritten (workaround also manual - `this._basicMove = this.move;`)
 Features Multiple inheritance in any form (all properties duplicates will be rewritten by latest member)

 This method despite it's look works best with wrapper function for inheritance. Full implementation of such function will have at least one additional copy for properties, so it's not recommended if your project constructs a lot of objects.
 */

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
