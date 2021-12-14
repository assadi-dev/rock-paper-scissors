export const basic_choices = ["paper", "rock", "scissors"];

export const random_arrayIndex = (array) => {
    const number = Math.floor(Math.random() * array.length);
    return array[number];
};

export const basic_result = (computer, player) => {
    switch (player) {
        case "scissors":
            if (computer === "scissors") {
                return "draw";
            } else if (computer === "rock") {
                return "lose";
            } else {
                return "win";
            }
        case "paper":
            if (computer === "paper") {
                return "draw";
            } else if (computer === "scissors") {
                return "lose";
            } else {
                return "win";
            }
        case "rock":
            if (computer === "rock") {
                return "draw";
            } else if (computer === "paper") {
                return "lose";
            } else {
                return "win";
            }

        default:
            break;
    }
};