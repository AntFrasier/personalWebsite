import 'server-only'
import type { Locale } from '@/i18n-config'
import type Dico from '@/dictionaries/fr.json'

 
export const getPost = async (locale:Locale, id:number) => import(`@/dictionaries/posts/${id}/${locale}.json`).then((module) => module.default)

export type Dictionary = typeof Dico