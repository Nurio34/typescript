import { createSlice } from "@reduxjs/toolkit";
import { Hangman } from "../../type";
import { words } from "../../Projects/Hangman/words";

//! --- "charsToGuess" initial ---
const random = Math.floor(Math.random() * words.length);
const word = words[random];
export const chars = word.split("").filter((ch) => ch !== " ");

//! --- "parts" to display ---
export const partsToDisplay = [
    "Rope",
    "Head",
    "Body",
    "Right-Arm",
    "Left-Arm",
    "Right-Leg",
    "Left-Leg",
];

//! --- handle initial state ---

const initialState: Hangman = {
    word: word,
    charsToGuess: chars,
    partsDisplaying: [],
    isGameOver: false,
    isWin: false,
};
//! ------------------------------

export const hangman = createSlice({
    name: "hangman",
    initialState,
    reducers: {
        handleWrongGuess: (state, actions) => {
            state.partsDisplaying = partsToDisplay.filter(
                (_, index) => index < actions.payload,
            );
        },
        checkIfGameOver: (state, actions) => {
            state.isGameOver = partsToDisplay.length === actions.payload;
            //** */
        },
        handleCorrectGuess: (state, actions) => {
            state.charsToGuess = state.charsToGuess.filter(
                (char) => char !== actions.payload,
            );
        },
        handleIfWin: (state) => {
            state.isGameOver = true;
            state.isWin = true;
        },
        restartGame: (state) => {
            const random = Math.floor(Math.random() * words.length);
            const word = words[random];

            state.word = word;
            state.charsToGuess = word.split("").filter((ch) => ch !== " ");

            //** */
            (state.partsDisplaying = []),
                (state.isGameOver = false),
                (state.isWin = false);
        },
    },
});

export const {
    handleWrongGuess,
    checkIfGameOver,
    handleCorrectGuess,
    handleIfWin,
    restartGame,
} = hangman.actions;
export default hangman.reducer;
