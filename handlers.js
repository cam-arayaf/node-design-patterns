module.exports = resource => ({ axios }) => ({
    get: async (req, resp) => {
        const { data } = await axios.get(`/${ resource }`);
        return resp.send(data);
    },
    post: async (req, resp) => {
        const { data } = await axios.post(`/${ resource }`, req.body);
        return resp.send(data);
    },
    put: async (req, resp) => {
        const { data } = await axios.put(`/${ resource }/${ req.params.id }`, req.body);
        return resp.send(data);
    },
    delete: async (req, resp) => {
        await axios.delete(`/${ resource }/${ req.params.id }`);
        return resp.sendStatus(204);
    }
});