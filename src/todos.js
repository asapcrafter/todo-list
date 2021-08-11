export {Todo}

class Todo {
    constructor(title, description = '', dueDate, priority, status = 'unfinished') {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = status;
    };
    getTitle() {
        return this.title;
    };
    getDescription() {
        return this.description;
    };
    getDueDate() {
        return this.dueDate;
    };
    getPriority() {
        return this.priority;
    };
    getStatus() {
        return this.status;
    };
    changeStatus() {
        this.status = 'unfinished' ? this.status = 'finished' : this.status = 'unfinished';
    };
};

// let One = new Todo('Groceries', '' , '', '',  )

// console.log(One.getStatus())