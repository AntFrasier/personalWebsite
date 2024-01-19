import { Locale } from "@/i18n-config"
import { Dispatch, SetStateAction } from "react"


function SimpleInputText({
    label, 
    name, 
    lang = null, 
    setState, 
    myPlaceHolder = undefined,
    required = false,
    setErrors,
    } : {
    label:string, 
    name:string, 
    lang?:Locale | null, 
    setState:Dispatch<SetStateAction<string>>, 
    myPlaceHolder?:string | undefined,
    required?:boolean,
    setErrors:Dispatch<SetStateAction<boolean>>,
    }) {
    return (
        <>
        <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">{label}</label>
        <div className=" inline-Block relative">
            {lang ? <span className="absolute !p-2 border-r-[1px] !rounded-md top-0 left-0 w-9 text-center">{lang}</span> : null}
            <input className="bg-gray-50 z-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white pl-12" type="text" placeholder={myPlaceHolder} id={name} name={name} autoComplete={`${name}`} value={name} onChange={ (e) => setState(e.target.value)}/>
            
        </div>
        <span className="text-sm text-red-500">
            {(required && name.length == 0)? (

                <p>{label} is required</p> 

            ) : ( null) }
        </span>
        </>
    )
}

export default SimpleInputText