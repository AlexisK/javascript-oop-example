console.log('\nExample 1 - ES6 classes');

{
    class BaseClass {

        constructor() {
            this.position = 0;
        }

        move(distance = 0) {
            console.log('\tMove Action');
            this.position += Math.max(distance, 0);
        }

        state() {
            console.log('\tNew Position is ' + this.position);
        }
    }

    class Bicycle extends BaseClass {
        move(distance = 0) {
            super.move(distance);
            console.log('\tWith Bycicle!');
            this.state();
        }
    }

    class Vehicle extends BaseClass {

        constructor() {
            super();
            console.log('New Vehicle Created!');
        }

        move(distance = 0) {
            super.move(distance);
            console.log('\tWith Vehicle!');
            this.state();
        }
    }

    let bc = new Bicycle();
    let vh = new Vehicle();
    bc.move(5);
    vh.move(20);

}
