import axios from 'axios'

const todoApi = {
    baseUrl: 'http://localhost:5001/todos/',
    async GETALL() {
        const response = await axios.get(`${this.baseUrl}`);
        return response.data
    },
    async GETITEM(id) {
        const response = await axios.get(`${this.baseUrl}` + id);
        return response.data
    },
    async SAVE(todo) {
        if (todo.id !== undefined) {
            const response = await axios.put(
                `${this.baseUrl}` + todo.id,
                todo
            )
        } else {
            const response = await axios.post(`${this.baseUrl}`, todo);
            return response.data;
        }
    },
    async DELETE(id) {
        const response = await axios.delete(`${this.baseUrl}` + id)
    }

}

export default todoApi