// pages/docs.tsx
import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

const DocsPage: React.FC = () => {
    return <SwaggerUI url="/api/swagger" />;
};

export default DocsPage;