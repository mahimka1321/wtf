import {useParams} from "react-router-dom";
import {useGetOneCitiesQuery} from "../api/api.ts";
import {ITours} from "../type-global/user-types.ts";

const TourPages = () => {
    ////////////// ТУТ ЕСЛИ ЧТО НЕ ПРАВИЛЬНО ВСЕ СДЕЛАНО, НУЖНО ПО ДРУГОМУ, Я ЭТО СДЕЛАЛ ПРОСТО, ЧТО БЫ РАБОТАЛО /////////////////////
    const {id} = useParams() // поиск ID через params
    const idCities = location.pathname[8] // поиск города через location
    const {data} = useGetOneCitiesQuery(idCities) // Выводим город по id
    const toursPages: ITours | undefined = data?.tours.find(el => el.id === parseInt(id)) // Ищем определенный тур

    return (
        <div className="home_page">
        <div className="opMbox">
        <div className='cntainer_content'
            style={{
                position:'relative',
                zIndex:'2',
            }}>
        <div className='container__new_tours cl__container-size'>
        <div style={{marginTop:'50px'}}>
            {
                toursPages // проверка, если тур найден, выводим ниформацию
                    ?
                <div className='popopo'>
                    <div className='dfdsd'>
                        <div style={{display:'flex', minWidth:'200px', maxWidth:'0px', width:'100%'}}>
                            <img alt='' src={data?.img}/>
                            <div className='name_tour_'>
                                <h4>{toursPages.name}</h4>
                                <h5>{toursPages.name}</h5>
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
                            <p className='__nopius'>{toursPages.time} м</p>
                            <p className='__nopius'>{toursPages.price} р</p>
                        </div>
                    </div>
                </div>
                :
                <>Not found</>
            }
            
        </div>
        </div>
        </div>
        </div>
        </div>
    );
};

export default TourPages;