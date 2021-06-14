const resetNumsBoxes = () => {
	totalCount = 0;
	rightCount = 0;
	wrongCount = 0;
	questionNum.innerText = 1;
	totalText.innerText = 0;
	rightText.innerText = 0;
	errorText.innerText = "";
	answerInput.number.value = "";
	percentageText.innerText = "";
	percentageText.style.color = "black";
	ansContainer.style.height = "";
	ansContainer.style.border = "none";
	statsContainer.style.height = "";
	statsContainer.style.border = "none";
	answerInput.classList.remove("hidden");
	title.innerText = "Math Whizard";
};

const removeAllChildNodes = () => {
	while (rightList.firstChild) {
		rightList.removeChild(rightList.firstChild);
	}

	while (wrongList.firstChild) {
		wrongList.removeChild(wrongList.firstChild);
	}
};
