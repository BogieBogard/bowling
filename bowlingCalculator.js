// When a player gets a strike the next two rolls count towards the strike frame's score.
const handleStrike = (rolls, rollIndex) => {
    // Check if there are at least two more rolls after the strike to calculate the frame's score.
    if (rollIndex + 2 < rolls.length) {
        // Calculate the score for the strike. The score for a strike is 10 plus the score of the next two rolls.
        const firstBonusRollScore = rolls[rollIndex + 1] === "X" ? 10 : rolls[rollIndex + 1];

        let secondBonusRollScore = rolls[rollIndex + 2] === "X" ? 10 : rolls[rollIndex + 2];
        if (secondBonusRollScore === "/") {
            secondBonusRollScore = 10 - firstBonusRollScore;
        }

        return {
            score: 10 + firstBonusRollScore + secondBonusRollScore,
            nextRoll: rollIndex + 1
        };
    }
    // If there are not enough rolls left to calculate the score for the strike, return a score of null.
    return { score: null, nextRoll: rollIndex + 1 };
}

// When a player gets a spare the next roll counts towards the spare frame's score.
const handleSpare = (rolls, rollIndex) => {
    if (rollIndex + 2 < rolls.length) {
        const bonusRollScore = rolls[rollIndex + 2] === "X" ? 10 : rolls[rollIndex + 2];
        return {
            score: 10 + bonusRollScore,
            nextRoll: rollIndex + 2
        };
    }
    return { score: null, nextRoll: rollIndex + 2 };
}


const handleRegularFrame = (rolls, rollIndex) => {
    if (rollIndex + 1 < rolls.length) {
        return {
            score: rolls[rollIndex] + rolls[rollIndex + 1],
            nextRoll: rollIndex + 2
        };
    }
    return { score: null, nextRoll: rollIndex + 2 };
}

// Main handler function for calculating a player's bowling score. 
const bowlingScoreHandler = (rolls) => {
    let rollIndex = 0;
    let calculatedScores = [];

    while (rollIndex < rolls.length) {
        let result;
        if (rolls[rollIndex] === "X") {
            result = handleStrike(rolls, rollIndex);
        } else if (rolls[rollIndex + 1] === "/") {
            result = handleSpare(rolls, rollIndex);
        } else {
            result = handleRegularFrame(rolls, rollIndex);
        }

        calculatedScores.push(result.score);
        rollIndex = result.nextRoll;

        if (calculatedScores.length === 10) break;
    }

    return calculatedScores;
}

module.exports = bowlingScoreHandler;
