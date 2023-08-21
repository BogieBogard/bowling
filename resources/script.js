document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById("submitButton");
    const calculatedOutput = document.getElementById("calculatedOutput");

    submitButton.addEventListener("click", function() {
        const textInput = document.getElementById("textInput").value;
        const rolls = textInput.trim().split(" ");
        const convertedRolls = rolls.map(roll => {
            if (roll === "X" || roll === "x" || roll === "/") {
                return roll;
            } else {
                return parseInt(roll);
            }
        });
        
        const calculatedScores = bowlingScoreHandler(convertedRolls);
        
        const formattedScores = calculatedScores.map(score => (score === null) ? "null" : score);
        
        calculatedOutput.textContent = "Calculated output: " + formattedScores.join(", ");
    });
});
