const information = document.getElementById('info');

// eslint-disable-next-line no-undef
information.innerText = `This app is using Chrome (v${versions.chrome()})`;

const func = async () => {
	const response = await window.versions.ping();
	console.log(response);
};

func();