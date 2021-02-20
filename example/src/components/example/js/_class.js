/**
 * Example - Class
 */

(() => {
    const application = {};
    const value = 'example';

    application.action = () => {
        /* ... */
    };

    class ExampleClass {
        get value() {
            return value;
        }

        doAction(options = {}) {
            if (options.doAction) {
                application.action();
            }
        }
    }

    application.exampleclass = new ExampleClass();
})();
