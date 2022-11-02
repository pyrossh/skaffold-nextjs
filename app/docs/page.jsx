import { createSwaggerSpec } from 'next-swagger-doc';
import Swagger from '../components/Swagger';

export default function SwaggerDocs() {
  const spec = createSwaggerSpec({
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Next Swagger API Example',
        version: '1.0',
      },
    },
  });
  return (
    <openapi-explorer spec-url="openapiSpecificationUrl">
      <div slot="overview">
        <h1>The API</h1>
      </div>
    </openapi-explorer>
  );
}