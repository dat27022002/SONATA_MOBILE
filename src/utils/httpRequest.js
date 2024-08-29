import axios from 'axios';

const httpRequest = axios.create({
    baseURL: 'https://sonata2-d6evcacsefatdka3.eastus-01.azurewebsites.net/api/COC',
});

export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
};

export const post = async (path, data = {}) => {
    const response = await httpRequest.post(path, data);
    return response.data;
};

export default httpRequest;
