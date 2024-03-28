import { useState } from "react";


export interface NotifcationInterface {
    element: { content: string }
}[];
export interface Timer {
    timer: Date;
}
export interface CheckBox {
    checkBox: boolean;
}

export default function Notification({ element }: NotifcationInterface) {

    // function LongPress() {
        // const [isLongPress, setIsLongPress] = useState(false);
        // const count = 0;
        let timer;
        const handleMousseDown = (timer:any) => {
            setInterval({timer}, 1000);
            
        };
        
        
        const handleMouseUp = (timer:any) => {
            timer++
            clearInterval(timer)
            if (timer >= 5) {
                // timer++;
                console.log('Coucou')
            } else { console.log('appuyez plus longtemps')}
        }
        const [checkBox, setCheckBox] = useState(true);
        function handleChange () {
            checkBox
        }
        return (

            <div
                className="border-orangeDP border-2 rounded-xl text-center flex items-center justify-center h-12"
                //changer l'attribut en OnTouchStart avant le déployement
                onMouseDown={handleMousseDown}
                onMouseUp={handleMouseUp}
            >
                <p className="text-base">{element.content}</p>
                    <input
                    type="checkbox"
                    className=""
                    name="checkBox"
                    id="onTouch"
                    onChange={handleChange}
                    checked={setCheckBox}/>
            </div>)
    // }
}