#!/usr/bin/env bash

rm -rf ./src/app/api/apis
rm -rf ./src/app/api/models

java -jar ./swagger/swagger-codegen-cli.jar generate \
-i ./swagger/open-childcare-api.yaml \
-o ./swagger/ \
-l typescript-angular2 \
-t ./swagger/  && \

mv ./swagger/api ./src/app/api/apis && \
mv ./swagger/model ./src/app/api/models
mv ./swagger/configuration.ts ./src/app/api/
mv ./swagger/variables.ts ./src/app/api/
