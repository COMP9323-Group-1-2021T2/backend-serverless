deploy-staging:
	sls deploy --stage=staging --verbose

deploy-production:
	sls deploy --stage=production --verbose

migrate-staging:
	sls deploy --stage=staging -f UpMigration --verbose
	sls invoke --stage=staging -f UpMigration

migrate-production:
	sls deploy --stage=production -f UpMigration --verbose
	sls invoke --stage=production -f UpMigration
