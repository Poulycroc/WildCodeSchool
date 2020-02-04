class todo {
    constructor(task) {
        this.name = task.name;
        this.description = task.description;
        this.status = task.status || 0;
        this.createdat = new Date();
        this.updatedat = task.updatedat;
    }

    getName() {
        return this.name;
    }
    getDescription() {
        return this.description;
    }
    getStatus() {
        return this.status;
    }
    getCreatedAt() {
        return this.createdat;
    }
    getUpdatedAt() {
        return this.updatedat;
    }
    setName(name) {
        this.name = name;
    }
    setDescription(description) {
        this.description = description;
    }
    setStatus(status) {
        this.status = status;
    }
    setCreatedAt(createdat) {
        this.createdat = createdat;
    }
    setUpdatedAt(updatedat) {
        this.updatedat = updatedat;
    }
}

module.exports = todo;