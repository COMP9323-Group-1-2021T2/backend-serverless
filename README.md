# COMP9323 Backend Endpoints

## File Structure

```
▾ src/
  ▸ authorisers/      -- Authoriser lambda functions
  ▸ http/             -- HTTP lambda functions
  ▸ migrations/       -- All schema migrations
  ▸ db/               -- Database interface functions
  ▸ sns/              -- SNS lambda functions
  ▸ utils/            -- Utility functions
    types.ts          -- Type definitions
```

## Deployment

We're using the following commands to deploy:

```sh
# Deploy to staging
$ make deploy-staging

# Deploy to production
$ make deploy-production

# Run migration to staging
$ make migrate-staging

# Run migration to production
$ make migrate-production
```


