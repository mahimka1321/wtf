import {useGetCitiesQuery} from "../api/api.ts";
import CitiesShell from "../components/CitiesShell.tsx";
import Menu from "../components/Menu.tsx";


const Home = () => {
    const {data, isLoading} = useGetCitiesQuery([])
    return (
        <div className="home_page">
        <div className="opMbox">
            <Menu/>
            <div className='cntainer_content'
            style={{
                position:'relative',
                zIndex:'2',
            }}>
                <div className='container__new_tours cl__container-size'>
                    <h2>Новинки</h2>
                    <div className="container__scroll">
                        /
                    </div>
                </div>
                <div className='containet__box_tours cl__container-size'>
                    <h2>Туры</h2>
                    <div className='menu_controls'>
                        <button className='btn__menu_controls controls__btn_active'>Туры</button>
                        <button className='btn__menu_controls'>Места отдыха</button>
                        <button className='btn__menu_controls'>Кафе</button>

                        <button className='btn__menu_controls'>Гостиницы</button>
                        <button className='btn__menu_controls'>Для детей</button>
                    </div>
                    <div                        
                    style={{
                        display: 'flex',
                        margin: '0 auto'
                    }} 
                    >
                        <div 
                        style={{
                            textAlign:'center',                    
                        //    paddingBottom: '80px',
                            minWidth:'aotu',
                            maxWidth:'aotu',
                            width:'auto'
                        }} 
                        className="container__control_tour"
                        >
                        {
                        isLoading
                            ? 
                            <>Loading....</>
                            : data
                                ?
                                <>
                                    {data.map(cities => <CitiesShell key={cities.id} cities={cities} />)}
                                </>
                                : 
                                <>Not found</>
                            }
                        </div>
                    </div>
                </div>
            </div> 
            <div className="opBox opBoxTwoo"></div>
        </div>
    </div>
    );
};

export default Home;