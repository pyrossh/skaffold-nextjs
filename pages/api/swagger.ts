import { createSwaggerSpec } from 'next-swagger-doc';

export default function SwaggerDocs(req, res) {
  const spec = createSwaggerSpec({
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Next Swagger API Example',
        version: '1.0',
      },
    },
  })
  return res.json(spec);
}