import apiAdminAuth from '@/lib/apiAdminAuth';
import prisma from '../../../../lib/prisma';
import { ToSavedPortfolio } from '@/lib/getPortfolios';

// POST /api/create-blog-post
// Required fields in body: name

async function handler(req:Request) {
  const auth = await apiAdminAuth()
  if (!auth)  return Response.json("Unauthorized",{status : 401})
  if (req.method == "POST") {
    const toSave : ToSavedPortfolio = await req.json()
    const { 
      id,
      name_fr,   
      name_en,   
      draft,    
      categorieId,       
      title_fr,        
      title_en,        
      description_fr,  
      description_en,  
      metaDescription_fr,  
      metaDescription_en,  
      h1_fr,           
      h1_en,   
      slug,        
      content_fr,       //html
      content_en,       //html
      thumbImageId,  
      mainImageId,
      codeUrl,
      demoUrl,
      stacks,
     } = toSave;
     console.log(stacks)
    const result = await prisma.portfolio.update({
      where : {id : Number(id)},
      data: {
        name_fr:  name_fr,   
        name_en:  name_en,   
        draft : draft,    
        categorie : {
          connect : {
            id: Number(categorieId)
          }
        },       
        title_fr : title_fr,        
        title_en : title_en, 
        slug : slug,   
        metaDescription_fr: metaDescription_fr,  
        description_fr : description_fr,  
        metaDescription_en : metaDescription_en, 
        description_en : description_en,  
        h1_fr :h1_fr,           
        h1_en : h1_en,          
        content_fr : content_fr,       //html
        content_en : content_en,       //html
        portfolioThumbImage : {
            connect : {
                id : Number(thumbImageId),
            }
        },
        mainImage : {
            connect : {
                id : Number(mainImageId),
            }
        },
        stacks : {
            connect : stacks 
        },
        demoUrl : demoUrl,
        codeUrl : codeUrl,
        
    }});

    return Response.json({body : result});
  }



}

export {handler as GET , handler as POST}