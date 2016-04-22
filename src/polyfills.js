// Polyfills
// (these modules are what are in 'angular2/bundles/angular2-polyfills' so don't use that here)
// import 'ie-shim'; // Internet Explorer
// import 'es6-shim';
// import 'es6-promise';
// import 'es7-reflect-metadata';
// Prefer CoreJS over the polyfills above
require('core-js');
// import 'zone.js/lib/browser/browser'; //  beta.10 and beta.11 problem
// see workaround below
if ('production' === ENV) {
}
else {
    // Development
    Error.stackTraceLimit = Infinity;
}
// ZONE.js workaround
/* tslint:disable */
require('zone.js/lib/zone');
var event_target_1 = require('zone.js/lib/browser/event-target');
var define_property_1 = require('zone.js/lib/browser/define-property');
var register_element_1 = require('zone.js/lib/browser/register-element');
var property_descriptor_1 = require('zone.js/lib/browser/property-descriptor');
var utils_1 = require("zone.js/lib/browser/utils");
var set = 'set';
var clear = 'clear';
var blockingMethods = ['alert', 'prompt', 'confirm'];
patchTimer(global, set, clear, 'Timeout');
patchTimer(global, set, clear, 'Interval');
patchTimer(global, set, clear, 'Immediate');
patchTimer(global, 'request', 'cancelMacroTask', 'AnimationFrame');
patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
for (var i = 0; i < blockingMethods.length; i++) {
    var name = blockingMethods[i];
    utils_1.patchMethod(global, name, function (delegate, symbol, name) {
        return function (s, args) {
            return Zone.current.run(delegate, global, args, name);
        };
    });
}
event_target_1.eventTargetPatch(global);
property_descriptor_1.propertyDescriptorPatch(global);
utils_1.patchClass('MutationObserver');
utils_1.patchClass('WebKitMutationObserver');
utils_1.patchClass('FileReader');
define_property_1.propertyPatch();
register_element_1.registerElementPatch(global);
/// GEO_LOCATION
if (global['navigator'] && global['navigator'].geolocation) {
    utils_1.patchPrototype(global['navigator'].geolocation, [
        'getCurrentPosition',
        'watchPosition'
    ]);
}
function patchTimer(window, setName, cancelName, nameSuffix) {
    setName += nameSuffix;
    cancelName += nameSuffix;
    function scheduleTask(task) {
        var data = task.data;
        data.args[0] = task.invoke;
        data.handleId = setNative.apply(window, data.args);
        return task;
    }
    function clearTask(task) {
        return clearNative(task.data.handleId);
    }
    var setNative = utils_1.patchMethod(window, setName, function (delegate) { return function (self, args) {
        if (typeof args[0] === 'function') {
            var zone = Zone.current;
            var options = {
                handleId: null,
                isPeriodic: nameSuffix == 'Interval',
                delay: (nameSuffix == 'Timeout' || nameSuffix == 'Interval') ? args[1] || 0 : null,
                args: args
            };
            return zone.scheduleMacroTask(setName, args[0], options, scheduleTask, clearTask);
        }
        else {
            // cause an error by calling it directly.
            return delegate.apply(window, args);
        }
    }; });
    var clearNative = utils_1.patchMethod(window, cancelName, function (delegate) { return function (self, args) {
        var task = args[0];
        if (task && typeof task.type == 'string') {
            task.zone.cancelTask(task);
        }
        else {
            // cause an error by calling it directly.
            delegate.apply(window, args);
        }
    }; });
}
require('zone.js/dist/long-stack-trace-zone');
/* tslint:enable */
//# sourceMappingURL=polyfills.js.map