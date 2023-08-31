import {ICities, ITours} from "../type-global/user-types.ts";
import {FC} from "react";
import * as React from "react";
import {useGetUser} from "../hooks/useGetUser.ts";
import {Link} from "react-router-dom";

interface ToursProps {
    tour: ITours
    setClickTour: React.ComponentState,
    idCities: ICities
}

const ToursShell: FC<ToursProps> = ({tour, /*setClickTour, */ idCities}) => {
    const {user} = useGetUser()
    const newToursId = user?.bought.find(el => el.id === idCities.id) // Поиск определенного города по id
    const newToursSubs = newToursId?.tours.find(el => el.id === tour.id) // Поиск определенного тура по id
    //const byTour = () => {
    //    setClickTour(tour) // передаем состояние в предыдущий компонент => (<CitiesPage/>)
    //}
    return (
        <Link to={`tour/${tour.id}`} className='popopo'>
            <div className='dfdsd'>
                <div style={{display:'flex', minWidth:'200px', maxWidth:'0px', width:'100%'}}>
                    <img alt='' src={idCities.img}/>
                    <div className='name_tour_'>
                        <h4>{tour.name}</h4>
                        <h5>{idCities.city}</h5>
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
                    <p className='__nopius'>{tour.time} м</p>
                    {
                    newToursSubs?.subscribe // проверка, если у пользователя куплен определенный тур
                        ?
                        <p className='__nopius'>куплено</p>
                        :
                        <p className='__nopius'>{tour.price} ₽</p>
                    }
                </div>
            </div>
        </Link> 
    );
};

export default ToursShell;


{/*

        <div className='bg-[#303030] rounded-md mt-5 w-72 px-3 py-2'>
            <div className='flex justify-between'>
                <p>{tour.name}</p>
                {
                    newToursSubs?.subscribe // проверка, если у пользователя куплен определенный тур
                        ?
                        <span>куплено</span>
                        :
                        <span>{tour.price}₽</span>
                }
            </div>

            {
                user?.bought
                    ?
                    newToursSubs?.subscribe
                        ?
                        <Link to={`tour/${tour.id}`} className='flex w-full mt-2 justify-center bg-[#424242] py-1 rounded-md'>Перейти к туру</Link>
                        :
                        <button className=' w-full mt-2 bg-[#424242] py-1 rounded-md' onClick={byTour}>Купить</button>
                    :
                    <>Вы должны быть авторизированы</>
            }
        </div>

*/}