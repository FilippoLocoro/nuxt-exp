export default eventHandler(async () => {
    const todos = await useDrizzle().select().from(tables.ads).all()

    return todos
  })
  