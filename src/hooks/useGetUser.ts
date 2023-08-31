import {useSelector} from "react-redux";
import {RootState} from "../store/store.ts";


export const useGetUser = () => {
    const {user} = useSelector((state: RootState) => state.user)
    return {user}
}