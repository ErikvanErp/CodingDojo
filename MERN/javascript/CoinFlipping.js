function tossCoin() {
    return Math.random() > 0.5 ? 1 : 0;
}

function HeadsSync() {
    let headsCount = 0;
    let attempts = 0;
    while(headsCount < 25) {
        attempts++;
        let result = tossCoin();
        if(result === 1) {
            headsCount++;
        } else {
        headsCount = 0;
        }
    }
    return `It took ${attempts} tries to flip 25 "heads"`;
}
//console.log(HeadsSync());
//console.log( "This is run after the HeadsSync function completes" );

const TwentyFiveHeads = new Promise((resolve, reject) => {
    let headsCount = 0;
    let attempts = 0;
    while(headsCount <25 && attempts < 30000000) {
        attempts++;
        let result = tossCoin();
        if(result === 1) {
            headsCount++;
        } else {
            headsCount = 0;
        }
    }
    if (headsCount == 25) {
        resolve(`It took ${attempts} coin flips to get 25 "heads" in a row`);
    } else {
        reject('After 30 million coin flips, we did not get 25 "heads" in a row')
    }
});

TwentyFiveHeads
.then(res => console.log(res))
.catch(err => console.log(err));
console.log("This console.log prints before the Promise, but still waits until it has completed." );

