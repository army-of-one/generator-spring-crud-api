var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    constructor(args, opts) {
        // Calling the super constructor is important so our generator is correctly set up
        super(args, opts);

        // Next, add your custom code
        this.option('postgres'); // Support for postgres flag
    }

    method1() {
        this.log('method 1 just ran');
    }
};