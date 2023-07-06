import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../../firebase";

const Team = () => {

    const getTeam = async () => {
        const user = auth?.currentUser?.uid
        if (user) {
            const querySnapshot = await getDocs(collection(db, "users", user, "team"))
            querySnapshot.forEach((doc) => {
                console.log(doc.data())
            })
        }
    };

    return (
        <>
            <h1>My Team</h1>
            <button onClick={getTeam}>Get Team</button>
        </>
    );
};

export default Team;
