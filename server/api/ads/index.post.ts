export default eventHandler(async (event) => {
    const { title } = await readBody(event)
  
    const todo = await useDrizzle().insert(tables.ads).values({
    //  
    }).returning().get()
  
    return todo
  })
  