/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * Title
 *
 * Copyright (c) 2018 Sal Gerace. All rights reserved.
 */

function Title(app) {
    var self = this;

    // Set application
    this.app = app;

    // Gather elements
    this.$elem = $('#title').hide();

    // Gather buttons
    this.$onePlayerButton = $('#title-one-player').on('click', function() {
        self.app.options.setPlayers(1);
        self.app.options.show();
    });
    this.$twoPlayerButton = $('#title-two-player').on('click', function() {
        self.app.options.setPlayers(1);
        self.app.options.show();
    });
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Public methods

Title.prototype.hide = function() {
    this.$elem.hide();
};

Title.prototype.show = function() {
    this.app.options.hide();
    this.app.game.hide();
    this.app.summary.hide();
    this.$elem.show();
};
