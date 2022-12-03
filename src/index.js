const fastify = require("fastify")({ logger: true })
const fs = require("fs")

fastify.get("/api", async (req, rep) => {
    return { Hello: "server x" }
})
// "/etc/www/html/index.html"

const start = async () => {
    try {
        await fastify.listen({ port: 5050 })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()