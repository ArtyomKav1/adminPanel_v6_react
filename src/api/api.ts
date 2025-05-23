import axios, { AxiosResponse } from 'axios';
// import { authDelete, AuthType, companiesGetType, companiesImagePostType, companyPatchBodyType, contactsGetType, contactsPatchBodyType } from './typeApi';
// const key = localStorage.getItem("token")


export type V1DataType = {

    id: number
    dateCreate: string
    email: string
    name: string
    Post: string


}
export type ApiV1DataType = {

    result: V1DataType[]

}

export const API = {
    // async authGET(): Promise<AxiosResponse<AuthType>> {
    //     return await axios.get(`https://test-task-api.allfuneral.com/auth?user=USERNAME`);
    // },
    async v1_get(): Promise<AxiosResponse<ApiV1DataType>> {
        return await axios.get(`http://212.23.211.54:3000/v1`, {
            headers: {

                "Content-Type": "application/json"
            }
        });
    },
    async v1_delete(id: number): Promise<AxiosResponse<ApiV1DataType>> {
        return await axios.delete(`http://212.23.211.54/v1/${id}`, {
            headers: {

                "Content-Type": "application/json"
            }
        })
    },

}
