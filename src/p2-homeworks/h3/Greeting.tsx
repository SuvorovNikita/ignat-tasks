import React, {ChangeEvent} from "react";
import s from "./Greeting.module.css";
import {UserType} from "./HW3";

type GreetingPropsType = {
    users: Array<UserType>
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}


const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, users}
) => {
    const inputClass = error ? s.error : s.someClass;

    return (
        <div style={{textAlign: 'center', color: 'white'}}>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <div className={s.someClass}>{error}</div>
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
            <div>
                {users.map(u => <p key={u._id}>{u.name}</p>)}
            </div>

        </div>
    );
}

export default Greeting;
