/**@type {import("drizzle-kit").Config} */
export default{
    schema:'./utils/schema.tsx',
    dialect:"postgresql",
    dbCredentials: {
        url: 'postgresql://neondb_owner:npg_1q7rLRSXJdTc@ep-weathered-rice-a8fq0kot-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require',
    }
};