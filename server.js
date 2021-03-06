const cors = require("cors");
const fastify = require("fastify")({
  logger: true,
});
fastify.use(cors());
// Declare a route
fastify.get("/", function (request, reply) {
  reply.send({ hello: "world" });
});

// Run the server!
fastify.listen(process.env.PORT || 8080, "0.0.0.0", function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${address}`);
});
