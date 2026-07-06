document.addEventListener('DOMContentLoaded', function () {
	const lamp = document.getElementById('lampada');
	const ligarBtn = document.getElementById('ligarBtn');
	const desligarBtn = document.getElementById('desligarBtn');
	const controls = document.querySelector('.controls');
	let isBroken = false;

	function ligar() {
		if (isBroken) return;
		lamp.src = 'assets/img/Ligada.png';
		lamp.alt = 'Lâmpada ligada';
	}

	function desligar() {
		if (isBroken) return;
		lamp.src = 'assets/img/Desligada.png';
		lamp.alt = 'Lâmpada desligada';
	}

	function quebrar() {
		if (isBroken) return;
		isBroken = true;
		lamp.src = 'assets/img/Quebrada.png';
		lamp.alt = 'Lâmpada quebrada';
		controls.innerHTML = '<p class="broken">A Lâmpada quebrou !</p>';
	}

	ligarBtn.addEventListener('click', ligar);
	desligarBtn.addEventListener('click', desligar);
	lamp.addEventListener('dblclick', quebrar);
});
