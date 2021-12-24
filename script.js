let inputKeyword = document.querySelector('.input-keyword');
const tombol = document.querySelector('.tombol');



tombol.addEventListener('click',function () {
	
		if (inputKeyword.value === "") {
			alert('kamu harus mengetikan sesuatu');
			return false;
		}else{
			toDolist()
		}
	inputKeyword.value = '';
});






function toDolist() {
	const ul = document.querySelector('.container ul');

			// span dan isi
			const span = document.createElement('span');
			const i = document.createElement('i');
			i.setAttribute('class','far fa-times-circle')
			span.appendChild(i);
			// akhir span dan isi

			// isi LI
			const libaru = document.createElement('li');
			const textLi = document.createTextNode(inputKeyword.value);
			libaru.appendChild(textLi);
			libaru.appendChild(span);
			ul.insertBefore(libaru );
			// akhir isi LI

			// Delete Li
			span.addEventListener('click',function () {
				span.parentElement.style.display = 'none';
			});
			// Delete Li
}