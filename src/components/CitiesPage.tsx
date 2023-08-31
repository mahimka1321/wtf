import {useParams} from "react-router-dom";
import {useByCitiesMutation, useGetOneCitiesQuery} from "../api/api.ts";
import ToursShell from "./ToursShell.tsx";
import {ICities, ITours} from "../type-global/user-types.ts";
import {useEffect, useState} from "react";
import {useGetUser} from "../hooks/useGetUser.ts";


const CitiesPage = () => {
    const {id} = useParams()
    const {data, isLoading} = useGetOneCitiesQuery(id)
    const {user} = useGetUser()
    const [byCities] = useByCitiesMutation()
    const [clickTour, setClickTour] = useState<ITours>()
    useEffect(() => {
        if (data && clickTour) {
            const newData: ITours[] = [...data.tours] // создаем новый массив, в котором передаем все города из базы данных
            const itemID: ICities | undefined = user.bought?.find((userBought) => userBought.id === data.id) // поиск определенного города
            const itemYes: ITours | undefined = data.tours.find((item) => item.id === clickTour.id) // поиск определенного тура
            const newArray: ICities | undefined = user.bought.find((cities) => cities.id === data.id) // поиск определенного города у пользователя
            const addTours: ITours | undefined = newArray?.tours.find((tours) => tours.id === clickTour.id) // поиск определенного тура у пользователя
            const newIte = newArray?.tours.map(item => item) // поиск определенного тура в городе, у пользователя

            for (let i = 0; i < data.tours.length; i++) {
                newData.forEach(function (el, i) {
                    if (el.id === clickTour.id) {
                        newData.splice(i, 1) // Удаляем из массива Cities в базе данных существуеющий город по ID
                    }
                })
                newIte?.forEach(function (el, i) {
                    if (el.id === clickTour.id) {
                        newIte.splice(i, 1)// Удаляем из массива пользователя с городами существуеющий город по ID
                    }
                })
            }

            if (itemID === undefined) {
                if (itemYes) {
                    const initialStateOne = { // Создаем новый объект, в который передаем поля выбранного города и выбранного тура
                        city: data.city,
                        img: data.img,
                        id: data.id,
                        tours: [...newData, { // разворачиваем туры выбранного города
                            id: itemYes.id,
                            name: itemYes.name,
                            time: itemYes.time,
                            price: itemYes?.price,
                            subscribe: true
                        }]
                    }
                    byCities({...user, bought: [...user.bought, initialStateOne]}) // функция для обновления базы данных
                }
            } else {
                if (newIte) {
                    const initialStateTwo = { // Создаем новый объект, в который передаем поля выбранного города и выбранного тура
                        city: data.city,
                        img: data.img,
                        id: data.id,
                        tours: [...newIte, { // разворачиваем туры выбранного города у пользователя
                            id: addTours?.id,
                            name: addTours?.name,
                            time: addTours?.time,
                            price: addTours?.price,
                            subscribe: true
                        }]
                    }
                    const newToursBy = [...user.bought, initialStateTwo] // Создаем новый массив, в котором передаем города пользователя, и добавляем InitialStateTwo
                    const indexTours: number = newToursBy.map(el => el.id).indexOf(initialStateTwo.id) // находим индекс уже существующего города в массиве
                    newToursBy.splice(indexTours, 1) // Удаляем город по индексу и оставляем новый (InitialStateTwo)
                    byCities({...user, bought: newToursBy}) // функция для обновления базы данных
                }
            }
        }
    }, [clickTour])
    return (
        <div className="home_page">
        <div className="opMbox">
        <div className='cntainer_content'
            style={{
                position:'relative',
                zIndex:'2',
            }}>
        <div className='container__new_tours cl__container-size' style={{height:'500px'}}>
        <div>
            {/* нижний код /.../ был тут  */}
            {
                isLoading
                    ? <>Loading...</>
                    : data
                        ? data.tours.map(tour => <ToursShell idCities={data} setClickTour={setClickTour} key={tour.id} tour={tour}/>)
                        : <>Not found</>
            }
        </div>
        </div>
        </div>
        </div>
        </div>
    );
};

export default CitiesPage;



{/*

            {
                isLoading
                    ? <>Loading...</>
                    : data
                        ? <div className='popopo'>
                        <div className='dfdsd'>
                            <div style={{display:'flex', minWidth:'200px', maxWidth:'0px', width:'100%'}}>
                                <img alt='' src=''/>
                                <div className='name_tour_'>
                                    <h4>{data.city}</h4>
                                    <h5>{data.city}</h5>
                                </div>
                            </div>
                            <div className='fdfd'>
                                <p className='star_'>
                                    <span>
                                        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.99998 0L9.16285 4.8856L14 5.66901L10.5 9.47191L11.326 14.8418L6.99998 12.3065L2.67372 14.8418L3.50001 9.47191L0 5.66901L4.83685 4.8856L6.99998 0Z" fill="#FAC917"/>
                                        </svg>
                                    </span>
                                    4.9
                                </p>
                                <p className='__nopius'>5 маршрута</p>
                                <p className='__nopius'>{}</p>
                                <p className='__nopius'>{}</p>
                            </div>
                        </div>
                    </div>
                        : <>Not found</>
            }

*/}