export default eventHandler(async (event) => {
    const { id } = getRouterParams(event)
    const { completed } = await readBody(event)
  
    const todo = await useDrizzle().update(tables.ads).set({
        //   
    }).where(eq(tables.ads.id, Number(id))).returning().get()
  
    return todo
  })
  