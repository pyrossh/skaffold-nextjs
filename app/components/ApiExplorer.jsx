'use client';
import 'openapi-explorer';

export default function ApiExplorer() {
  return (
    <openapi-explorer spec-url="/api/swagger" hide-server-selection use-path-in-nav-bar="true" fill-defaults="true" nav-item-spacing="compact" primary-color="#3E6077" secondary-color="#FBAF0B">
      <div slot="overview">
        <h1>The API</h1>
      </div>
    </openapi-explorer>
  );
} 