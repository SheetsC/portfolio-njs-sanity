import {defineConfig} from 'sanity';
import {deskTool} from 'sanity/desk';
import schemas from './app/sanity/schemas';

 const config = defineConfig ({
    projectId: '5igbhz7g',
    dataset: 'production',
    title: "My Portfolio",
    apiVersion: "2023-01-08",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: {types: schemas}

})
export default config