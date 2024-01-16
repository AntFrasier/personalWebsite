import { Locale } from "@/i18n-config"


function InputText({
    label, 
    name, 
    lang = null, 
    register, 
    required,
    errors
    } : {
    label:string, 
    name:string, 
    lang:Locale | null, 
    register:any, 
    errors:any
    required:boolean,
    }) {
    return (
        <>
        <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">{label}</label>
        <div className=" inline-Block relative">
            {lang ? <span className="absolute !p-2 border-l-[1px] !rounded-md top-0 right-0 w-9 text-center">{lang}</span> : null}
            <input className="bg-gray-50 z-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" type="text" id={name} name={name} autoComplete="given-name" {...register(`${name}`, {required : required})}/>
            
        </div>
        <span className="text-sm text-red-500">
            {errors[name] && <p>{label} is required</p>}
        </span>
        </>
    )
}

export default InputText