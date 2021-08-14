class Manager {

    constructor() {
        this.commandMap = {};
    }

    addCommand(commandName, command) {
        this.commandMap[commandName] = command;
    }

    execute(commandName, args) {
        const command = this.commandMap[commandName];
        const result = command.execute(args);

        return result;
    }

}

module.exports = Manager;