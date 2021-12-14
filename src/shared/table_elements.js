import paper from "../assets/images/icon-paper.svg";
import rock from "../assets/images/icon-rock.svg";
import scissors from "../assets/images/icon-scissors.svg";
export const elements = [{
        value: "paper",
        icon: paper,
        color: "var(--paper-single)",
    },
    {
        value: "rock",
        icon: rock,
        color: "var(--rock-single)",
    },
    {
        value: "scissors",
        icon: scissors,
        color: "var(--scissors-single)",
    },
];

export function getInfoChoice(player) {
    let index = elements.findIndex((v) => v.value === player);
    return elements[index];
}