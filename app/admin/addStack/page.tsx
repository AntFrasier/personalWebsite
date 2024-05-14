"use client";
import FormHeader from "@/app/components/admin/form/FormHeader";
import AddStackComponent from "@/app/components/admin/stack/AddStackComponent";

export interface GivenStack {
    id : number;
    name : string;
    stackUrl: string;
    imageId : number;
}

//todo remove search params with all stacks give only id in seach param the det the stack from Db set pageComponent as server instead of client
const AddStack = ({searchParams} : {searchParams : GivenStack}) => {
    const givenStack : GivenStack | undefined = searchParams

    return (
        <div className="flex flex-col w-full justify-start pb-2"> {/* px-8 md:px-24*/}
            <FormHeader title = { (Object.keys(givenStack).length == 0) ? `Créer une Stack` : 'Modifier la Stack'} url = {"/admin/stacks"} />
            <AddStackComponent givenStack={givenStack}/>
        </div>
    )
}
export default AddStack;