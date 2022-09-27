export default function renderTaskList(){

    const container = document.querySelector('#section-center');
        const div = document.createElement('div');
            div.classList.add('task-container');
            const title = document.createElement('p');
                title.classList.add('current-workflow');
                    title.textContent = `Workflow:`
            const ul = document.createElement('ul');
                ul.classList.add('task-list');
            // adding li's.....\

            div.appendChild(title);
            div.appendChild(ul);
        container.appendChild(div);
}