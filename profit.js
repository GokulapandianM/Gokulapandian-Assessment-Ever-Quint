function maxProfit(n) {
    const buildings = [
        { name: 'T', time: 5, earnings: 1500 },
        { name: 'P', time: 4, earnings: 1000 },
        { name: 'C', time: 10, earnings: 2000 }
    ];

    let dp = new Array(n + 1).fill(0);
    let counts = new Array(n + 1).fill(null).map(() => ({ T: 0, P: 0, C: 0 }));

    for (let i = 1; i <= n; i++) {
        for (let b of buildings) {
            if (i >= b.time) {
                let currentBuildProfit = (n - i) * b.earnings;
                let totalProfit = dp[i - b.time] + currentBuildProfit;

                if (totalProfit > dp[i]) {
                    dp[i] = totalProfit;
                    counts[i] = { ...counts[i - b.time] };
                    counts[i][b.name]++;
                }
            }
        }
    }

    let maxVal = Math.max(...dp);
    let bestTime = dp.lastIndexOf(maxVal);
    let res = counts[bestTime];

    console.log(`Time Unit: ${n}`);
    console.log(`Earnings: $${maxVal}`);
    console.log(`Output: T: ${res.T} P: ${res.P} C: ${res.C}`);
    console.log('---');
}

maxProfit(7);
maxProfit(8);
maxProfit(13);