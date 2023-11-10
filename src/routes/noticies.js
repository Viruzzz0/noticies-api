import { Router } from 'express'
import { getNoticie } from '../servicies/news'

const router = Router()

router.get('/noticies', async () => {
  console.log('get noticies')

  const listNoticias = await getNoticie("persona 5");
  console.log(listNoticias);

})


export { router }
