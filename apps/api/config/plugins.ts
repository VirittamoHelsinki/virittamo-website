export default ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-upload-azure-storage",
      providerOptions: {
        account: env("STRAPI_STORAGE"),
        accountKey: env("STRAPI_STORAGE_KEY"),//either account key or sas token is enough to make authentication
        containerName: env("STRAPI_STORAGE_CONTAINER"),
        defaultPath: "assets",
      },
    },
  },
});
