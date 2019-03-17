import React, { Component } from 'react';
import AppHeader from '../app-header';
import ItemStatusFilter from '../item-status-filter';
import SearchPannel from '../search-pannel';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';
import './app.css';

export default class App extends Component {
    maxId = 100;

    state = {
        todoData: [
            { label: 'Drink Coffee', important: false, id: 1 },
            { label: 'Make Awesome App', important: true, id: 2 },
            { label: 'Have a Lunch', important: false, id: 3 }
        ]
    };

    deleteItem = (id) => {
        // console.log(id);
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const neweArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];
            return {
                todoData: neweArray
            };
        });
    };

    addItem = (text) => {
        const newItem = {
            label: text,
            important: false,
            id: this.maxId++
        };

        this.setState(({ todoData }) => {
            const newArr = [...todoData, newItem];
            return { todoData: newArr };
        });
    };

render() {
    return (
        <div className='todo-app'>
            <AppHeader toDo={1} done={3} />
            <div className='top-panel d-flex'>
                <SearchPannel />
                <ItemStatusFilter />
            </div>
            <TodoList
                todos={this.state.todoData}
                onDeleted={this.deleteItem} />
            <ItemAddForm onItemAdded={this.addItem} />
        </div>
    );
}
}