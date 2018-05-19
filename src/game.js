/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * Game
 *
 * Copyright (c) 2018 Sal Gerace. All rights reserved.
 */

function Game() {
    this.options = null;

    // Gather elements
    this.$elem = $('#game').hide();
    this.$a = $('#a');


    this.running = false;
    this.startTime = null;

    // Enumerated lists
    this.a = null;
    this.aIndex = 0;
    this.b = null;


    var self = this;
    $(window).on('click', function() {
        if (self.running) {
            console.log("window click");
            self.next();
        }
    });

    $(window).on('keydown', function(ev) {
        console.log("keypress");
    });
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Public methods

Game.prototype.begin = function(options) {
    this.options = options;
    if (this.options.type === 'sightwords') {
        if (this.options.wordlist === 'second-grade') {
            var words = wordlists[this.options.wordlist];
            this.a = _.sampleSize(words, words.length);
            this.aIndex = 0;
            console.log(this.a);


        }
    }



    // this.next();

    this.$elem.show();


    this.running = true;

    this.startTime = Date.now();

};

Game.prototype.hide = function() {
    this.$elem.hide();
};

Game.prototype.next = function() {
    console.log("game.next");
    if (this.aIndex >= this.a.length) {
        this.running = true;
        this.$page.hide();
        summary.show();
    }
    this.$a.text(this.a[this.aIndex++]);
};

Game.prototype.reset = function(options) {

};

Game.prototype.rollDice = function() {

};
