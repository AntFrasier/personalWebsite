import { Locale } from "@/i18n-config"
import { Categorie } from "@prisma/client"


function InputSelect({
    label, 
    name, 
    register, 
    required,
    errors,
    placeHolder = null,
    options,
    } : {
    label:string, 
    name:string, 
    register:any, 
    errors:any
    required:boolean,
    placeHolder?:any
    options:Categorie[] | undefined,
    }) {
    return (
        <>
        <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">{label}</label>
        <div className=" inline-Block relative">
          
            <select className="bg-gray-50 z-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white pl-12" type="text" placeholder={placeHolder} id={name} name={name} autoComplete={`${name}`} {...register(`${name}`, {required : required})}>
                <option value="" disabled>Choisir une catégorie</option>
                {options?.map ((option) => {
                    return <option key={option.id} value={option.id}> {option.name_fr}</option>
                }) }
            </select>
        </div>
        <span className="text-sm text-red-500">
            {errors[name] && <p>{label} is required</p>}
        </span>
        </>
    )
}

export default InputSelect