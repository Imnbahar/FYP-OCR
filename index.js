'use strict';

function openCamera() {
	document.getElementById('fileInput').click();
}

function submitFiles() {
	const selectedOption = document.getElementById('fileLabel').value;
	const fileInput = document.getElementById('fileInput');
	const uploadedFilesContainer = document.getElementById('uploadedFiles');

	if (selectedOption === '') {
		uploadedFilesContainer.innerHTML = 'Please select a category.';
	} else if (selectedOption === 'Picture') {
		const files = fileInput.files;
		if (files.length > 0) {
			uploadedFilesContainer.innerHTML = '<b>Uploaded files:</b><br>';
			for (let i = 0; i < files.length; i++) {
				uploadedFilesContainer.innerHTML += `${files[i].name}<br>`;
			}
		} else {
			uploadedFilesContainer.innerHTML = 'No files uploaded for Item Image.';
		}
	} else if (selectedOption === 'QR') {
		const files = fileInput.files;
		if (files.length > 0) {
			uploadedFilesContainer.innerHTML = '<b>Uploaded files:</b><br>';
			for (let i = 0; i < files.length; i++) {
				uploadedFilesContainer.innerHTML += `${files[i].name}<br>`;
			}
		} else {
			uploadedFilesContainer.innerHTML = 'No files uploaded for QR Image.';
		}
	}
}
