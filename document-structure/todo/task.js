const taskInput = document.getElementById('task__input');
const tasksAddButton = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');


tasksAddButton.addEventListener('click', (e) => {
	e.preventDefault();

	taskInput.value = taskInput.value.trim();

	if (taskInput.value !== '') {
		tasksList.insertAdjacentHTML('afterend', `<div class="task"><div class="task__title">${taskInput.value}</div><a href="#" class="task__remove">&times;</a></div>`);
	}

	taskInput.value = '';

	const taskRemoveButton = document.querySelector('.task__remove');
	
	taskRemoveButton.addEventListener('click', (e) => {
		e.preventDefault();

		let taskRemoveButtonParent = taskRemoveButton.parentElement;
		taskRemoveButtonParent.remove();
	})
});