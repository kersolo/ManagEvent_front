import { useEffect, useState } from "react";
// import NotiFaker from "./NotiFaker";
import Notification from "../../components/Notifications";
import NotiFaker from "./NotiFaker";
import ButtonDefault from "../../components/ButtonDefault";



export default function NotificationPage() {
    const [notifs, setNotifs] = useState(NotiFaker.notiFaker);


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
                <ButtonDefault className="w-1/2">Notifications</ButtonDefault>
                <ButtonDefault variant="secondary" className="border-lightBlueDP text-lightBlueDP w-1/2">Messages</ButtonDefault>
            </div>
            <div className="h-24">

            </div>
            <div className="flex flex-col gap-2">
                {notifs.map((contenu, index) => (
                    <Notification element={contenu} key={index} />
                ))}
            </div>
        </div>

    )
}
