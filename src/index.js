import './style.css';
import render from './mainPage';
import renderCat from './categoryTypeList';
import renderProjectTree from './renderProjectsTree';
import renderTaskInput from './renderTaskInput';
import renderTaskList from './renderTaskList';
import inputCollector from './inputCollector';

// rendering basic layout: 

render();
renderCat();
renderProjectTree();
renderTaskInput();
renderTaskList();

const categoryButton = document.querySelector('.category-button');

categoryButton.addEventListener('click', inputCollector.categoryInput);

    const taskButton = document.querySelector('.add-task-button');

taskButton.addEventListener('click', inputCollector.taskInput);
