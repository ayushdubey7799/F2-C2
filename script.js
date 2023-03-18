

function OpeningCeremony() {
    setTimeout(() => {
        const score = {
            red: 0,
            blue: 0,
            green: 0,
            yellow: 0
        }
        console.log("Let the games begin");
        setTimeout(() => {
            let raceWinner = Race100M(score);
            console.log(`Winner of 100M race is ${raceWinner}`);
            console.log("Updated Score", score);
            setTimeout(() => {
                let LJumpWinner = LongJump(score);
                console.log(`Winner of LongJump is ${LJumpWinner}`);
                console.log("Updated Score", score);

                let HJumpWinner = HighJump(score);
                if (HJumpWinner != "") {
                    console.log(`Winner of HighJump is ${HJumpWinner}`);
                }
                console.log("Updated Score", score);
                setTimeout(() => {
                    AwardCeremony(score);
                })
            }, 2000)
        }, 3000)
    }, 1000)
}

function Race100M(score) {
    const p1 = {
        color: "r",
        time: random()
    }
    const p2 = {
        color: "b",
        time: random()
    }
    const p3 = {
        color: "g",
        time: random()
    }
    const p4 = {
        color: "y",
        time: random()
    }

    const arr = [p1, p2, p3, p4];
    arr.sort((a, b) => {
        return a.time - b.time;
    });

    if (arr[1].color === "r") score.red += 25;
    if (arr[1].color === "b") score.blue += 25;
    if (arr[1].color === "g") score.green += 25;
    if (arr[1].color === "y") score.yellow += 25;

    if (arr[0].color === "r") {
        score.red += 50;
        return "red";
    }
    if (arr[0].color === "b") {
        score.blue += 50;
        return "blue";
    }
    if (arr[0].color === "g") {
        score.green += 50;
        return "green";
    }
    if (arr[0].color === "y") {
        score.yellow += 50;
        return "yellow";
    }
}


function random() {
    return Math.floor(Math.random() * 5) + 11;
}

function LongJump(score) {
    let x = Math.floor(Math.random() * 4);
    if (x == 0) {
        score.red += 150;
        return "red";
    }
    else if (x == 1) {
        score.blue += 150;;
        return "blue";
    }
    else if (x == 2) {
        score.green += 150;
        return "green";
    }
    else {
        score.yellow += 150;
        return "yellow";
    }
}

function HighJump(score) {
    let person = prompt("Please enter winner", "color");
    if (person === "red") {
        score.red += 100;
        return "red";
    }
    else if (person === "blue") {
        score.blue += 100;
        return "blue";
    }
    else if (person === "green") {
        score.green += 100;
        return "green";
    }
    else if (person === "yellow") {
        score.yellow += 100;
        return "yellow";
    }
    else {
        console.log("Event was cancelled");
    }
}

function AwardCeremony(score) {
    const p1 = {
        color: "red",
        points: score.red
    }
    const p2 = {
        color: "blue",
        points: score.blue
    }
    const p3 = {
        color: "green",
        points: score.green
    }
    const p4 = {
        color: "yellow",
        points: score.yellow
    }

    const arr = [p1, p2, p3, p4];
    arr.sort((a, b) => {
        return b.points - a.points;
    });

    console.log(
        `${arr[0].color} came first with ${arr[0].points} points. 
        ${arr[1].color} came second with ${arr[1].points} points. 
        ${arr[2].color} came third with ${arr[2].points} points. 
        ${arr[3].color} came fourth with ${arr[3].points} points. 
        `);
}


OpeningCeremony();