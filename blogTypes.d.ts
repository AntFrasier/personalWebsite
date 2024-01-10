export interface BlogPost {
    id              :int   
    name            :string  
    draft           :boolean
    categorieId     :int
    title_fr        :string
    title_en        :string
    slug            :string
    description_fr  :string
    description_en  :string
    h1_fr           :string
    h1_en           :string
    content_fr      :string //html
    content_en      :string //html
    thumbImageUrl   :string
    mainImageUrl   :string
}
// id: number;
//     name: string;
//     draft: boolean;
//     categorieId: number;
//     title_fr: string;
//     title_en: string;
//     slug: string;
//     description_fr: string;
//     description_en: string;
//     h1_fr: string;
//     h1_en: string;
//     content_fr: string;
//     content_en: string;
//     thumbImageUrl: string;
//     mainImageUrl: string;