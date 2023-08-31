import Router from "./router/Router.tsx";
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header.tsx";
import {useEffect} from "react";
import {useGetUserQuery} from "./api/api.ts";
import {IUser} from "./type-global/user-types.ts";
import {useActions} from "./hooks/useActions.ts";

function App() {
    const {addUser} = useActions()
    const {data} = useGetUserQuery([])
    useEffect(() => { // При заходе на сайт проверяет, авторизирован ли пользователь или нет
        const user = data?.find((user: IUser) => user.email === localStorage.getItem('token-user'))
        addUser(user)
    }, [data])
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Router/>
            </div>
        </BrowserRouter>
    )
}

export default App
