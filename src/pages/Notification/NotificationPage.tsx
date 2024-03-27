import { useEffect, useState } from "react";
// import NotiFaker from "./NotiFaker";
import Notification from "../../components/Notifications";
import NotiFaker from "./NotiFaker";
import ButtonDefault from "../../components/ButtonDefault";



export default function NotificationPage() {
    const [notifs, setNotifs] = useState(NotiFaker.notiFaker);

    const path = window.URL()

    useEffect(() => {
        console.log(NotiFaker.notiFaker);
        async function loadNotifications() {
            const Notifications = await NotiFaker.notiFaker
            setNotifs(Notifications)
        }

        loadNotifications();

    }, [])
    console.log(notifs);
    return (
        <div className="m-6 flex flex-col gap-4">
            <div className="h-12 flex flex-row justify-center gap-2">
                {}
                <ButtonDefault className="">Notifications</ButtonDefault>
                <ButtonDefault
                    variant="secondary"
                    className="border-lightBlueDP text-lightBlueDP ">
                    Messages
                </ButtonDefault>
            </div>
            <div className="h-24">

            </div>
            <div className="flex flex-col gap-4">
                {notifs.length > 0 ? (notifs?.map((contenu, index) => (
                    <Notification element={contenu} key={index} />
                ))) : <div className="border-2 border-orangeDP rounded-xl h-80 flex items-center justify-center">
                    <p className="font-semibold text-center text-2xl">Vous n'avez pas de notifications</p>
                </div>}
            </div>
        </div>


    )
}
