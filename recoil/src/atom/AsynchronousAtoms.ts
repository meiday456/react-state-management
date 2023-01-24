import {atom, selector} from "recoil";
import axios from "axios";

export const currentUserIdState = atom({
    key:"CurrentUserId",
    default : 1,
})

export const currentUserQuery = selector({
    key : "CurrentUserName",
    get : async ({get})=>{
        const response =
            await axios.get(
                `https://jsonplaceholder.typicode.com/users/${get(currentUserIdState)}`)
        // const response = await axios.get(`https://jsonplaceholder.typicode.com/users/30`)
        return response.data;
    }
})
