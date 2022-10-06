import './style.css';
import render from './mainPage';
import renderCat from './categoryTypeList';
import renderProjectTree from './renderProjectsTree';
import renderTaskInput from './renderTaskInput';
import renderTaskList from './renderTaskList';
import inputCollector from './inputCollector';
import database from './mainDataStorage';
import refresh from './renderFromArray';

// rendering basic layout: 

database.load();

render();
renderCat();
renderProjectTree();
renderTaskInput();
renderTaskList();

const projectList = database.print;
        refresh.projectTree(projectList);

const categoryButton = document.querySelector('.category-button');

categoryButton.addEventListener('click', inputCollector.categoryInput);

    const taskButton = document.querySelector('.add-task-button');

taskButton.addEventListener('click', inputCollector.taskInput);

