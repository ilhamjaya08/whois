import { Hono } from 'hono'
import whoiser from 'whoiser'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/w', async (c) => {
  const d = await whoiser('ilhamjaya08.me')
  return c.json({
    msg: d
  })
})

export default app
