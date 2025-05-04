import axios, { AxiosResponse } from 'axios';
// import { authDelete, AuthType, companiesGetType, companiesImagePostType, companyPatchBodyType, contactsGetType, contactsPatchBodyType } from './typeApi';
// const key = localStorage.getItem("token")


export type V1DataType = {
    id: number
    dateCreate: string
    inform: {
        email: string
        name: string
        Post: string
    }
}


export const API = {
    // async authGET(): Promise<AxiosResponse<AuthType>> {
    //     return await axios.get(`https://test-task-api.allfuneral.com/auth?user=USERNAME`);
    // },
    async v1_get(): Promise<AxiosResponse<V1DataType>> {
        return await axios.get(`http://localhost:3000/v1`, {
            headers: {

                "Content-Type": "application/json"
            }
        });
    },
    async v1_delete(id: number): Promise<AxiosResponse<V1DataType>> {
        return await axios.delete(`hhttp://localhost:3000/v1/${id}`, {
            headers: {

                "Content-Type": "application/json"
            }
        })
    },

}
