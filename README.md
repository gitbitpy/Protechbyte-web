This project is built with [Next.js](https://nextjs.org).

## Run locally

Install dependencies and start the development server:

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploy to Azure App Service

Create a Linux App Service with a Node.js runtime compatible with this project's Next.js version. In the App Service's Deployment Center, connect the GitHub repository to configure continuous deployment.

The production build and start commands are:

```bash
npm run build
npm start
```

Keep deployment credentials in Azure/GitHub secrets; do not commit them to the repository.

For more information, see the [Next.js documentation](https://nextjs.org/docs) and [Azure App Service documentation](https://learn.microsoft.com/azure/app-service/).
