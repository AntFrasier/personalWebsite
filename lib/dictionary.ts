import 'server-only'
import type { Locale } from '@/i18n-config'
import type Dico from '@/dictionaries/fr.json'

const dictionaries = {
    en: () => import('@/dictionaries/en.json').then((module) => module.default),
    fr: () => import('@/dictionaries/fr.json').then((module) => module.default),
}
 
export const getDictionary = async (locale:Locale) => dictionaries[locale]?.() ?? dictionaries.fr()

export type Dictionary = typeof Dico