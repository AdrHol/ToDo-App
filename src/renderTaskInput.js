export default function renderTaskInput() {
    const container = document.querySelector('#section-center');

    const div = document.createElement('div');
        div.classList.add('input-form');

        const input = document.createElement('input');
            input.setAttribute('type', 'text');
            input.setAttribute('placeholder', 'Enter task title');
            input.setAttribute('id', 'task-input');
            input.setAttribute('name', 'task-input');
            input.classList.add('task-input');
        const button = document.createElement('button');
            button.classList.add('add-task-button');
            button.textContent = 'Add task';
        div.appendChild(input);
        div.appendChild(button);
        container.appendChild(div);
}