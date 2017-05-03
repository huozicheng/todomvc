import View from './view.js';
import Store from './store.js';
import Model from './model.js';
import Template from './template.js';
import Controller from './controller.js';
import Helper from './helpers.js';

let todo;
const setView = function() {
	 todo.controller.setView(document.location.hash);
}

export default function Todo(name) {
	this.storage = new Store(name);
	this.model = new Model(this.storage);

	this.template = new Template();
	this.view = new View(this.template);

	this.controller = new Controller(this.model, this.view);

	return this;
}

$on(window, 'load', () => {
	todo = new Todo('todos-vanillajs');
	setView();
});

$on(window, 'hashchange', setView);
