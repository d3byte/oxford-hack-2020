BLUE='\033[0;34m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

echo "${BLUE}Starting generation of api-docs.json${NC}"

swagger-codegen generate \
   -i ./swagger-specs/api-docs.json \
   -l typescript-angular \
   -o ./src/app/core/api

echo "${GREEN}Generated api-docs.json${NC}"
