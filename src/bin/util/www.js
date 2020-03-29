import express from 'express';
import packageJson from '../../../package.json';
import controller from '../routes';
import path from 'path';

// Any express middleware gets set here

export default () => {
    const app = express();
    const { name } = packageJson;
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    app.get('/', (request, response) =>
        response.sendFile(path.resolve('../PortfolioFrontend/build/index.html'))
    );

    app.use(`/${name}`, controller);

    return app;
};
