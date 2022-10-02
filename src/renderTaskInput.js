export default function renderTaskInput() {
    const container = document.querySelector('#section-center');

    const div = document.createElement('div');
        div.classList.add('input-form');
            const firstRow = document.createElement('div');
                firstRow.classList.add('form-row');

        const input = document.createElement('input');
            input.setAttribute('type', 'text');
            input.setAttribute('placeholder', 'Enter task title');
            input.setAttribute('id', 'task-input');
            input.setAttribute('name', 'task-input');
            input.classList.add('task-input');
        const button = document.createElement('button');
            button.classList.add('add-task-button');
            button.textContent = 'Add task';
        const dateInput = document.createElement('input');
            dateInput.classList.add('expDate');
            dateInput.setAttribute('name', 'date-input');
            dateInput.setAttribute('id', 'date-input');
            dateInput.setAttribute('type', 'datetime-local');
        const priorityInput = document.createElement('select');
            priorityInput.classList.add('priority-input');
            priorityInput.setAttribute('id', 'priority-input');
                const initial = document.createElement('option');
                    initial.setAttribute('value', '');
                    initial.textContent = 'Priority';
                priorityInput.appendChild(initial);
                for(let i = 1; i < 11; i++){
                    const option = document.createElement('option');
                        option.setAttribute('value', `${i}`);
                        option.textContent = i;
                    priorityInput.appendChild(option);   
                }
             firstRow.appendChild(input);
             firstRow.appendChild(dateInput);
             firstRow.appendChild(priorityInput);
             firstRow.appendChild(button);
        const secondRow = document.createElement('div');
                secondRow.classList.add('form-row');
        const textArea = document.createElement('textarea');
                textArea.classList.add('description');
                textArea.setAttribute('placeholder','Describe task details here...')
                textArea.setAttribute('id', 'description');
                textArea.setAttribute('rows', '4');
                textArea.setAttribute('maxlength', '50');
            secondRow.appendChild(textArea);
        div.appendChild(firstRow);
        div.appendChild(secondRow);
        container.appendChild(div);
}