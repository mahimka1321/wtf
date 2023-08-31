import {useGetUser} from "../hooks/useGetUser.ts";
import {Link} from "react-router-dom";

import "../main.min.scss"

const UserNow = () => {
    const {user} = useGetUser()

    const sklonenie = (txt: Array<string>, number: number, cases = [2, 0, 1, 1, 1, 2]) =>
    txt[(number % 100 > 4 && number % 100 < 20) ? 2
    :
    cases[(number % 10 < 5) ? number % 10 : 5]];
    
    
    let r = ' ту';
    let v = ['р', 'ра', 'ров'];


    


    return (
        <div>
            {
                user
                    ?
                    <div className='px-2 text-xl py-1 bg-[#383838] rounded-md' style={{marginTop:'15px'}}>Имя: {user.name}</div>
                    :
                    <span>Not found</span>
            }
            <div className='px-2 py-1 bg-[#383838] rounded-md mt-4'>
                <p className='text-xl'>Купленные туры</p>
                <div style={{
                    display:'flex',
                    flexWrap:'wrap',
                    minWidth:'auto',
                    maxWidth:'auto',
                    width:'auto',
                    height:'100%',
                    justifyContent:'center'
                }}>
                    {
                        user?.bought?.length
                        ?
                        user?.bought.map(item => 
                        <Link className='__tour'  to={`/cities/${item.id}`} key={item.id}>         
                            <div className='__img_tour'>
                                <div className='img_container'>
                                    <img className='img' alt='Тур, ТурБокс, TourBox, дешовые онлайн туры по всей россии.' src={item.img}/>
                                    <h1>{item.city}</h1>
                                </div>
                            </div>
                            <div className='__info_tour'>
                                <ul>
                                    <div>
                                        <li>
                                            <svg style={{marginRight:'10px'}} width="27" height="19" viewBox="0 0 27 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.501 9.5012H14.3753V4.68748C14.3753 4.3073 14.0672 4 13.6876 4C13.3081 4 13 4.3073 13 4.68748V10.1873C13 10.5675 13.3081 10.8748 13.6876 10.8748H18.501C18.8813 10.8748 19.1887 10.5675 19.1887 10.1873C19.1887 9.80919 18.8813 9.5012 18.501 9.5012Z" />
                                                <path d="M23 9.5C23 14.7467 18.7467 19 13.5 19C8.25329 19 4 14.7467 4 9.5C4 4.25329 8.25329 0 13.5 0C18.7467 0 23 4.25329 23 9.5ZM4.95 9.5C4.95 14.222 8.77797 18.05 13.5 18.05C18.222 18.05 22.05 14.222 22.05 9.5C22.05 4.77797 18.222 0.95 13.5 0.95C8.77797 0.95 4.95 4.77797 4.95 9.5Z" />
                                            </svg>
                                            <span className='_tr__on_t'>-</span>
                                        </li>
                                        <li>
                                            <svg style={{marginRight:'10px'}} width="27" height="20" viewBox="0 0 27 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.6244 10.8188L6.67191 19.0464C6.86604 19.0731 7.06428 19.0866 7.26589 19.0854L7.85963 19.082L7.81163 10.7696L7.21789 10.773C7.01628 10.7742 6.81821 10.79 6.6244 10.8188ZM17.3115 10.7147L17.3595 19.027L17.9532 19.0236C18.1549 19.0224 18.3529 19.0066 18.5467 18.9778L18.4992 10.7503C18.3051 10.7236 18.1069 10.7101 17.9052 10.7113L17.3115 10.7147ZM22.0545 9.49981C22.0242 4.25322 17.7465 0.0245886 12.4998 0.0548849C7.25322 0.0851812 3.02456 4.36294 3.05486 9.60953C3.06144 10.7491 3.26865 11.8405 3.6424 12.8509C3.28466 13.469 3.08129 14.1873 3.08571 14.9532C3.09529 16.6111 4.07443 18.0364 5.48236 18.6954L5.43898 11.1835C5.06658 11.363 4.72552 11.5969 4.42508 11.8741C4.31077 11.3326 4.24909 10.7715 4.24576 10.1964C4.21926 5.60564 7.91933 1.8626 12.5101 1.83609C17.101 1.80959 20.844 5.50964 20.8705 10.1004C20.8738 10.6755 20.8186 11.2372 20.7106 11.78C20.4069 11.5064 20.0633 11.2764 19.6887 11.1012L19.7321 18.6131C21.1324 17.9379 22.095 16.5013 22.0854 14.8434C22.081 14.0776 21.8693 13.3617 21.5045 12.7478C21.8665 11.7331 22.0611 10.6394 22.0545 9.49981Z"/>
                                            </svg>
                                            <span className='_tr__on_t'>Аудио</span>
                                        </li>
                                        <li>
                                            <svg style={{marginRight:'10px'}} width="27" height="20" viewBox="0 0 27 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M21.6 0.109436H5.4C2.42281 0.109436 0 2.43431 0 5.29125V13.9276C0 16.7845 2.42281 19.1094 5.4 19.1094H21.6C24.5772 19.1094 27 16.7845 27 13.9276V5.29125C27 2.43431 24.5772 0.109436 21.6 0.109436ZM25.8 13.9276C25.8 16.15 23.916 17.9579 21.6 17.9579H5.4C3.084 17.9579 1.2 16.15 1.2 13.9276V5.29125C1.2 3.06883 3.084 1.26095 5.4 1.26095H21.6C23.916 1.26095 25.8 3.06883 25.8 5.29125V13.9276ZM9.6 12.7837C9.6 13.5457 10.4181 14.0277 11.0846 13.6585L16.8141 10.4846C17.5013 10.104 17.5013 9.11592 16.8142 8.73518L11.0847 5.56056C10.4181 5.19125 9.6 5.67328 9.6 6.43526V12.7837ZM10.8 8.4298C10.8 7.66779 11.6182 7.18577 12.2847 7.55511L14.4142 8.73517C15.1014 9.11594 15.1013 10.104 14.4141 10.4846L12.2845 11.6642C11.618 12.0334 10.8 11.5513 10.8 10.7894V8.4298Z"/>
                                            </svg>
                                            <span className='_tr__on_t'>Видео</span>
                                        </li>
                                    </div>
                                    <li className='info__t_last' style={{display:'grid', textAlign:'center'}}>{Object.keys(item.tours).length + r + sklonenie(v, Object.keys(item.tours).length)}</li>
                                </ul>
                            </div>
                        </Link>)
                            :
                         <div>Ничего не найдено</div>
                    }
                </div>
            </div>
        </div>
    );
};

export default UserNow;