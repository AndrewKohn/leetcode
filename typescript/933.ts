// 933. Number of Recent Calls

// INFO:
// Submitted: 08/03/24
// Runtime: 177ms, beats 91.55%
// Memory: 61.07, beats 94.43%

/* FUNCTION */

class RecentCounter {
    calls: number[];

    constructor() {
        this.calls = [];
    }

    ping(t: number): number {
        this.calls.push(t);

        while (this.calls[0] < t - 3000) this.calls.shift();

        return this.calls.length;
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

export { }; // HACK : removes error diag about redeclaring block-scope vars
