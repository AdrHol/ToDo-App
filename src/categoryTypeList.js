export default function render(){

    const container = document.querySelector('#section-left');

        const list = document.createElement('ul');
            list.classList.add('category-type-list');
            const inputAndButton = document.createElement('li');
                const input = document.createElement('input');
                    input.classList.add('new-category');
                    input.setAttribute('type', 'text');
                    input.setAttribute('placeholder', 'Create new category');
                    input.setAttribute('name', 'cat');
                const button = document.createElement('button');
                    button.classList.add('category-button');
                    button.setAttribute('type', 'button');
                    button.setAttribute('name', 'cat');
                    button.textContent = 'Add';
            inputAndButton.appendChild(input);
            inputAndButton.appendChild(button); 

            const title = document.createElement('li');
                title.textContent = 'Category type:';
        list.appendChild(inputAndButton);
        list.appendChild(title);
    
    const categories = [
        {
            text: 'Normal',
            value: 'normal',
        },
        {
            text: 'Project',
            value: 'project',
        },
        {
            text: 'Custom',
            value: 'custom',
        }
    ]
    categories.forEach(item => {
        const li = document.createElement('li');
            const radio = document.createElement('input');
                radio.setAttribute('type', 'radio');
                radio.setAttribute('name', 'project-type');
                radio.setAttribute('value', `${item.value}`);
            li.appendChild(radio);
            const text = document.createTextNode(`${item.text}`);
            li.appendChild(text);
        list.appendChild(li);
    })

    container.appendChild(list);
}