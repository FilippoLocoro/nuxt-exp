export default eventHandler(async (event) => {
    const { id } = getRouterParams(event)
  
    const deletedTodo = await useDrizzle().delete(tables.ads).where(and(
      eq(tables.ads.id, Number(id))
    )).returning().get()
  
    if (!deletedTodo) {
      throw createError({
        statusCode: 404,
        message: 'Todo not found'
      })
    }
    return deletedTodo
  })
  