/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * Summary
 *
 * Copyright (c) 2018 Sal Gerace. All rights reserved.
 */

function Summary() {

    // Gather elements
    this.$elem = $('#summary').hide();
    this.$totalTime = $('#total-time');
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Public methods

Summary.prototype.hide = function(options) {
    this.$elem.hide();



};


Summary.prototype.show = function() {
    console.log("show");

    var duration = moment.duration(Date.now() - game.startTime);

    this.$totalTime.text("Total Time: " + 
        _.padStart(duration.minutes(), 2, "0") + ":" + 
        _.padStart(duration.seconds(), 2, "0") + "." + 
        _.padStart(duration.milliseconds(), 2, "0"));

    this.$elem.show();
};
