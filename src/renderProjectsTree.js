import mainDataStorage from './mainDataStorage';



export default function renderProjectTree(){

    let data = mainDataStorage.print;
    const container = document.querySelector('#section-left');

        const categoryList = document.createElement('div');
            categoryList.classList.add('category-list');

            const ul = document.createElement('ul');


        data.forEach(element => {
            const li = document.createElement('li');
                li.classList.add('list-item');
            const button = document.createElement('button');
             button.textContent = element.type;
            li.appendChild(button);
            ul.appendChild(li);
        })

        categoryList.appendChild(ul);
        container.appendChild(categoryList);
}