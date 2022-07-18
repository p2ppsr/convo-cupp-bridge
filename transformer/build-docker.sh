#!/bin/sh
docker build -t us.gcr.io/computing-with-integrity/convo-cupp-transformer .
docker push us.gcr.io/computing-with-integrity/convo-cupp-transformer
