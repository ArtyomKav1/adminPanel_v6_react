import { useEffect, useState } from "react"
import { API, V1DataType } from "../api/api"



// const dataT = [
//     {
//         id: 1,
//         dateCreate: "12:43",
//         inform: {
//             email: 'dsfsdf@gmai.com',
//             name: 'art',
//             Post: 'stud'
//         }
//     },
//     {
//         id: 2,
//         dateCreate: "12:43",
//         inform: {
//             email: 'dsfsdf@gmai.com',
//             name: 'art',
//             Post: 'stud'
//         }
//     },
//     {
//         id: 3,
//         dateCreate: "12:43",
//         inform: {
//             email: 'dsfsdf@gmai.com',
//             name: 'art',
//             Post: 'stud'
//         }
//     }
// ]





function Web_v1() {
    const [data, setData] = useState<V1DataType[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const v1GetFetch = async () => {
        try {
            const response = await API.v1_get()
            console.log(response.data.result

            )
            setData(response.data.result)
        } catch (error) { console.error('Ошибка при запросе v1GetFetch:', error); }
    }

    const v1Delete = async (id: number) => {
        setLoading(true)
        try {
            const response = await API.v1_delete(id)
            setData(response.data)
        } catch (error) {
            console.error('Ошибка при запросе v1_delete:', error);
        } finally { setLoading(false) }
    }

    useEffect(() => {
        v1GetFetch()
    }, [])






    return (
        <>
            <div className="max-w-[1400px] mx-auto  flex flex-col items-center">

                <div className="py-[20px]">
                    <button className="bg-green-300 px-[30px] py-[10px] rounded-[8px] cursor-pointer" onClick={() => v1GetFetch()}>REFRESH</button>
                </div>
                <div className="shrink-0">
                    {data?.map((item, index) => (
                        <div key={index} className="flex h-[40px] items-center gap-[40px] px-[20px] border-b-black  border-b-[1px] ">
                            <div >{item.id}</div>
                            <div className="h-[15px] w-[2px] bg-black "></div>
                            <div >{item.dateCreate}</div>
                            <div className="h-[15px] w-[2px] bg-black "></div>
                            <div >{item.Post}</div>
                            <div className="h-[15px] w-[2px] bg-black "></div>
                            <div >{item.email}</div>
                            <div className="h-[15px] w-[2px] bg-black "></div>
                            <div >{item.name}</div>
                            <div><button onClick={() => v1Delete(item.id)} className="text-red-500 cursor-pointer">X</button></div>

                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default Web_v1
