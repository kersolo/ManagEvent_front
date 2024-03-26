export interface NotifcationInterface {
    element: { content: string }
}[];

export default function Notification({ element }: NotifcationInterface) {

    return (

        <div
        className="border-orangeDP border rounded-xl text-center flex items-center justify-center h-12">
            <p className="text-base">{element.content}</p>
        </div>)
}