const parseCode = (str) => {
  // your code here
	const data = str.split('000');
	if(data === 3){
		const [firstName, lastName, id] = data;
		return {firstName, lastName, id}
	}

};

// Do not change the code below
// const str = prompt("Enter str: ");
// alert(JSON.stringify(parseCode(str)));
