function getBaseUrl() {
    if (typeof window !== "undefined") {
        return "";
    }
    if (process.env.AZURE_URL) {
        return `https://${process.env.AZURE_URL}`;
    }
    return `http://localhost:${process.env.PORT ?? 3000}`;
}

export function getUrl() {
    return getBaseUrl() + "/api/strapi";
}
