import { makeNumsDivisible } from "./helpers.js";

const gameSettings = document.querySelector("#game-settings");
const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const sign = document.querySelector("#sign");

const randNum = digits => {
	const scale = Math.pow(10, digits - 1);
	const factor = Math.pow(10, digits) - scale;
	const useNegative = gameSettings.sign.value;

	let randNum = Math.floor(Math.random() * factor) + scale;

	if (useNegative === "true") {
		const randSign = Math.floor(Math.random() * 2); // 0 is negative, 1 is positive
		if (randSign === 0) randNum = -randNum;
	}

	return randNum;
};

export const difficultySetting = () => {
	const difficulty = gameSettings.difficulty.value;

	if (difficulty === "easy") return [randNum(1), randNum(1)]; // two single-digit numbers
	if (difficulty === "normal") return [randNum(2), randNum(1)]; // one two-digit and one single-digit

	return [randNum(2), randNum(2)]; // two two-digit numbers
};

export const filterCheckBox = () => {
	const checkedOperators = [];

	for (let checkBox of checkBoxes) {
		if (checkBox.checked) {
			checkedOperators.push(checkBox.value);
		}
	}

	return checkedOperators;
};

const randOperator = () => {
	const pickedOperators = filterCheckBox();
	const numOperators = pickedOperators.length;
	const randNum = Math.floor(Math.random() * numOperators);

	for (let i = 0; i < numOperators; i++) {
		if (randNum === i) return pickedOperators[i];
	}
};

export const getRandomEquation = () => {
	const operator = randOperator();
	let [firstNum, secondNum] = difficultySetting();

	if (operator === "/" && firstNum % secondNum !== 0) {
		[firstNum, secondNum] = makeNumsDivisible();
	}

	num1.innerText = firstNum;
	num2.innerText = secondNum;

	if (operator === "*") return (sign.innerText = "×"); // for times display purposes
	if (operator === "/") return (sign.innerText = "÷"); // for division display purposes

	sign.innerText = operator; // plus or minus displayed as is
};
