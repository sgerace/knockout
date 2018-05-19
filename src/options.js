/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * Options
 *
 * Copyright (c) 2018 Sal Gerace. All rights reserved.
 */

function Options(app) {

    // Set application
    this.app = app;

    // Options
    this.numberOfPlayers = 1;

    // Gather elements
    this.$elem = $('#options').hide();
    // this.$totalTime = $('#total-time');

    // var $onePlayerBeginButton = $("#one-player-begin-btn");
    // $onePlayerBeginButton.on('click', function() {
    //     $onePlayerOptionsPage.hide();
    //     game.begin({
    //         "type": "sightwords",
    //         "wordlist": "second-grade"
    //     });
    // });

}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Public methods

Options.prototype.hide = function() {
    this.$elem.hide();



};

Options.prototype.setPlayers = function(count) {
    this.numberOfPlayers = count;
};

Options.prototype.show = function() {
    this.app.title.hide();
    this.app.game.hide();
    this.app.summary.hide();
    this.$elem.show();
};
