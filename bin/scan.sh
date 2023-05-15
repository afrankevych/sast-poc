#!/bin/sh -l

# We don't know if we can use orca security for STAT in CI, but for demonstration purpose we'll use the audit script
#orca-cli -p sast-poc --api-token <API_TOKEN>  --config ./orca.yml iac scan --path lib
npm audit
