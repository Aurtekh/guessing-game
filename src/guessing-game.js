class GuessingGame {
    constructor() {
        this.left = 0;
        this.right = 0;
        this.mid = 0;
    }

    setRange(min, max) {
    return this.right = max, this.left = min;
    }

    guess() {
        this.mid = Math.round((this.right - this.left)/2 + this.left)
        return this.mid
    }

    lower() {
        return this.right = this.mid; 
    }

    greater() {
        return this.left = this.mid;
    }
}

module.exports = GuessingGame;
