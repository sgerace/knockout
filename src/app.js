/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * Application
 *
 * Copyright (c) 2018 Sal Gerace. All rights reserved.
 */

function App() {
    var self = this;

}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Private methods



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Public methods

App.prototype.initialize = function() {
    this.title = new Title(this);
    this.options = new Options(this);
    this.game = new Game(this);
    this.summary = new Summary(this);

    // Show title
    this.title.show();
};

App.prototype.render = function() {

};

App.prototype.resetGame = function() {

};


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Initialization

var app = new App();

$(document).ready(function() {
    $('select').formSelect();
    app.initialize();
});
