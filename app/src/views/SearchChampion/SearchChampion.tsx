import { doc, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db, auth } from "../../firebase";
import Nav from "../../components/Nav/Nav";

interface IChampion {
    name: string,
    title: string,
    img: string,
    type: string
}

const SearchChampion = () => {
    const [searchName, setSearchName] = useState("");
    const [champion, setChampion] = useState<IChampion | null>(null)

    useEffect(() => {
        const getChampionData = async () => {
            const response = await fetch(
                `https://league-of-legends-champions.p.rapidapi.com/champions/en-us/${searchName}`,
                {
                    headers: {
                        "X-RapidAPI-Key":
                            "274a47ccd4msh3f07da9e7192392p1a0e54jsnce9b6c12155c",
                        "X-RapidAPI-Host":
                            "league-of-legends-champions.p.rapidapi.com",
                    },
                }
            );
            const data = await response.json();
            if (!data.champions && data.champion){
                setChampion({
                    name: data.champion[0].champion_name,
                    title: data.champion[0].champion_title,
                    img: data.champion[0].champion_icon,
                    type: data.champion[0].recommended_roles[0]
                })
            }
            console.log(data)
        };
        getChampionData();
    }, [searchName]);

    const addChampion = async () => {
        if (typeof auth.currentUser !== null){
            const user = auth?.currentUser?.uid
            if (user && champion){
                await setDoc(doc(db, "users", user, "team", champion.type), {
                    name: champion?.name,
                    title: champion?.title,
                    img: champion?.img,
                    type: champion?.type
                })
            }
        }
    }

    return (
        <>
            <Nav/>
            <h1 className="text-center">Search Champion</h1>
            <div className="d-flex justify-content-center">
                <input
                    type="text"
                    onChange={(event) => setSearchName(event.target.value)}
                    value={searchName}
                />
            </div>
            {champion && (
                <div className="card mx-auto mt-3" style={{ width: "18rem" }}>
                    <img src={champion.img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{champion.name}</h5>
                        <p className="card-text">
                            {champion.title}
                        </p>
                        <button onClick={addChampion} className="btn btn-primary">
                            Add to Team
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default SearchChampion;
