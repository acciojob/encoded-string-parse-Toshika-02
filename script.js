const parseCode = (str) => {
  // your code here
	const zero1 = str.indexOf("0");
  const zero2 = str.indexOf("0", zero1 + 1);

  const firstName = str.substring(0, zero1);
  const lastName = str.substring(zero1 + 1, zero2);
  const id = str.substring(zero2 + 1);

  return { firstName, lastName, id };
	
};

// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
