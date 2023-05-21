import { getAllTasks } from "@lib/mongodb/Tasks";

const handler = async (req, res) => {
    if(req.method === 'GET'){
        try {
            const { tasks, error } = await getAllTasks();
            if(error) throw new Error(error);

            return res.status(200).json({ tasks });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    } else if(req.method === 'POST'){
        // this is for creating a new task
        try {
            const { task } = req.body;
            const { created, error } = await createTask(task);
            if(error) throw new Error(error);

            return res.status(200).json({ created });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
}

export default handler;