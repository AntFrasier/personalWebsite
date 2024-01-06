export interface BlogPost {
    id              :int   
    name            :string  
    draft           :boolean
    tags            :string[]
    categorie       :string
    categorieId     :int
    title_fr        :string
    title_en        :string
    description_fr  :string
    description_en  :string
    h1_fr           :string
    h1_en           :string
    content_fr      :string //html
    content_en      :string //html
    thumbImageUrl   :string
    mainImageUrl   :string
}