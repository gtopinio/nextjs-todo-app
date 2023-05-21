import clientPromise from ".";

let client;
let db;
let movies;

async function init() {
    if(db) return;

    try {
        client = await clientPromise;
        tasks = db.collection('tasks');
        db = client.db();
    } catch (error) {
        throw new Error('Could not connect to database');
    }
}

// This anonymous function is used to get all the tasks from the database.
;(async () => {
    await init();
})();

///////////////
//// TASKS ////
///////////////

// This function is used to get all the tasks from the database.
export async function getAllTasks() {
    try {
        if(!tasks) await init();
        const result = await tasks
        .find({})
        .toArray();
        return { tasks: result }
    } catch (error) {
        throw new Error('Could not get tasks');
    }
}

// This function is used to create a new task in the database.
export async function createTask(newTask) {
    try {
        if(!tasks) await init();
        const result = await tasks.insertOne(newTask);
        // check if the result id is not null. If it is not null, return true.
        return { created: result.insertedId !== null }
    } catch (error) {
        throw new Error('Could not create task');
    }
}