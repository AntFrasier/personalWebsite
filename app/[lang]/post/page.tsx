import { Locale } from '@/i18n-config';

export default async function Posts({
    params: { lang },

  }: {
    params: { lang: Locale }
  }) {
    return(

        <div>All Blog post</div>
    )
  }