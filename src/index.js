const fastify = require("fastify")({ logger: true })
const fs = require("fs")

fastify.get("/", async (req, rep) => {
    const stream = fs.createReadStream(("../html/index.html"))
    await rep.send(stream)
})

const start = async () => {
    try {
        await fastify.listen({ port: 3000 })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()