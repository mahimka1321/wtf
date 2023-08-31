
export interface ITours {
    id: number,
    name: string,
    time: number,
    price: number,
    subscribe: boolean
}

export interface ICities {
    id: number,
    img: string,
    city: string,
    tours: ITours[]
}

export interface IUser {
    id?: number,
    name: string,
    email: string,
    password: string,
    bought: ICities[]
}