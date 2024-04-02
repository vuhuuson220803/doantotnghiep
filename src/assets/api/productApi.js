
import axiosClient from "./axiosClient";

const productApi = {
    getAll(params){
        const url = '/productApi';
        return axiosClient.get(url, {params});
    },
    get(id){
        const url = '/productApi/ ${id}';
        return axiosClient.get(url);

    },
    add(data){
        const url = '/productApi';
        return axiosClient.post(url, data);

    },
    update(data){
        const url = '/productApi/ ${data.id}';
        return axiosClient.patch(url, data.id);
    },
    remove(id){
        const url = '/productApi/ ${id}';
        return axiosClient.delete(url);
    }
};
export default productApi;