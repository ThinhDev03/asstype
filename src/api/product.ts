import instance from ".";
import { IProduct, addForm, updateForm } from "../models";

export const getAll = () => {
    const uri = "/products";
    return instance.get(uri);
}
export const getById = (id: string) => {
    const uri = "/products/" + id;
    return instance.get(uri);
}
export const update = (id: string, body: updateForm) => {
    const uri = "/products/" + id;
    return instance.put(uri, body)
}
export const add = (data: addForm) => {
    const uri = "/products/";
    return instance.post(uri, data);
};

export const RemoveProduct = (id: string | number) => {
    const uri = "/products/" + id;
    return instance.delete(uri);
}
