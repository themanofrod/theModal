const modalContainer = document.querySelector('.modal-container');
const openModal = document.querySelector('#open-modal');
const closeModal = document.querySelector('#close-modal');

openModal.addEventListener('click', () =>
	modalContainer.classList.toggle('show-modal')
);

closeModal.addEventListener('click', () =>
	modalContainer.classList.toggle('show-modal')
);