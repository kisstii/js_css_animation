function pageLoad() {

	const root = document.getElementById("root");

	let myObjects = [
		{
			tag: "h1",
			content: "Kiss Tamás"
		},
		{
			tag: "p",
			content: "Frontend developer"
		}
	];
	
	/*
		for (let i = 0; i < MyObjects.length; i++) {
					
		}
	*/

	/*
	for (myObject of myObjects) {
		console.log(myObject);
	};
	*/

	for (myObject of myObjects) {
		root.insertAdjacentHTML("beforeend", `
		<${myObject.tag}>${myObject.content}</${myObject.tag}>
		`);
	};



	root.addEventListener("click", function() {
		root.classList.toggle("clicked");
	});

}
window.addEventListener("load", pageLoad);