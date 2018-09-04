DATASOURCE_NAME=$1

if [ "$DATASOURCE_NAME" == "" ]
  then
  echo "Error: Please provide valid component name"
  echo "./create-component [DATASOURCE_NAME]"
  exit 1
fi

echo "=== Creating new datasource: $DATASOURCE_NAME ==="

WORKDIR=packages/core/datasource/src/$DATASOURCE_NAME