(() => {
	// Initialization of variables
	const addBlockButton = document.getElementById("addBlock");
	const nameInput = document.getElementById("nameInput");
	const amountInput = document.getElementById("amountInput");
	const mainDataWrapper = document.getElementById("mainDataWrapper");
	const arrayOfBlocks = [];
	
	// Checking local data saves
	const savedData = localStorage.getItem("save");
	if(savedData) {
		mainDataWrapper.innerHTML = savedData;
	}
	
	// Helpers
	const createBlockUsingTemplate = (name, value) => {
		return `
		<div class="col-lg-3 col-md-6 col-sm-6">
			<div class="card card-stats">
				<div class="card-body ">
					<div class="row">
						<div class="col-12 col-md-12">
							<div class="numbers">
								<p class="card-title text-center">${name}<p>
							</div>
						</div>
					</div>
				</div>
				<div class="card-footer ">
					<hr>
					<div class="row">
						<div class="col-7">
							<div class="stats">
								<i class="nc-icon nc-calendar-60"></i>
								18.09.2000
							</div>
						</div>
						<div class="col-5">
							<div>${value}</div>
						</div>
					</div>
				</div>
			</div>
		</div>`
	};
	const clearInput = (input) => {
		input.value = null;
	}
	
	// Main document interaction
	
	const submitAddBlock = () => {
		const nameFromInput = nameInput.value;
		const amountFromInput = amountInput.value;
		
		arrayOfBlocks.push({
			name: nameFromInput,
			value: amountFromInput
		})
		
		clearInput(nameInput);
		clearInput(amountInput);
		
		const finalizedTemplate = arrayOfBlocks.map(({name, value}) => createBlockUsingTemplate(name, value));
		finalizedTemplate.join(`
		`);
		mainDataWrapper.innerHTML = finalizedTemplate;

		localStorage.removeItem("save");
		localStorage.setItem("save", finalizedTemplate)
	}

	// Listeners
	addBlockButton.addEventListener("click", submitAddBlock)
})()