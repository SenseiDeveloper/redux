import  React,{useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {removeName, saveName} from "../redux/action/nameAction";

export const User = () => {
    const [user, setUser] = useState({name:''});
    const dispatch = useDispatch();
    const nameStore = useSelector( state => state.name.name);

    const handleNameUser = (e) => {
        setUser({name: e.target.value});
    }


    return (
        <div className="userWrapper">
            <div className="userAction">
                <input type="text"
                       name="name" value={user.name}
                       placeholder="Введіть ім'я"
                       onChange={handleNameUser}
                />
                <button onClick={ () => dispatch(saveName(user.name)) }>Зберегти</button>
                <button onClick={() => dispatch(removeName())}>Очистити</button>
            </div>
            <div className="userInfo">
                <p>Ваше ім'я - {nameStore}</p>
            </div>
        </div>
    )
}
