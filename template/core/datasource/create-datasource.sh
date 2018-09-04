DATASOURCE_NAME=$1

if [ "$DATASOURCE_NAME" == "" ]
  then
  echo "Error: Please provide valid component name"
  echo "./create-component [DATASOURCE_NAME]"
  exit 1
fi

echo "=== Creating new datasource: $DATASOURCE_NAME ==="

DATASOURCE_DIR=packages/core/datasource
WORKDIR=$DATASOURCE_DIR/src/$DATASOURCE_NAME

mkdir $WORKDIR

mkdir $WORKDIR/__mock__
mkdir $WORKDIR/__mock__/services
cat > $WORKDIR/__mock__/services/Mock$DATASOURCE_NAME.ts  << EndOfMessage 
import { I$DATASOURCE_NAME } from '../../interfaces';

export class Mock$DATASOURCE_NAME implements I$DATASOURCE_NAME {
  getData() {
    return [];
  }
}

export default Mock$DATASOURCE_NAME;
EndOfMessage

cat > $WORKDIR/__mock__/index.ts  << EndOfMessage 
// services
import Mock$DATASOURCE_NAME from './services/Mock$DATASOURCE_NAME';

export const services = {
  Mock$DATASOURCE_NAME,
};
EndOfMessage

mkdir $WORKDIR/interfaces
cat > $WORKDIR/interfaces/I$DATASOURCE_NAME.ts  << EndOfMessage 
export default interface I$DATASOURCE_NAME {
  getData(): any;

EndOfMessage

cat > $WORKDIR/interfaces/index.ts  << EndOfMessage 
export { default as I$DATASOURCE_NAME } from './I$DATASOURCE_NAME';
EndOfMessage


mkdir $WORKDIR/models
cat > $WORKDIR/models/IModel.ts  << EndOfMessage 
export interface IModel {
  title: string;
}

export default IModel;
EndOfMessage


cat > $WORKDIR/models/index.ts  << EndOfMessage 
export { default as IModel } from './IModel';
EndOfMessage

mkdir $WORKDIR/services
cat > $WORKDIR/services/Service$DATASOURCE_NAME.ts  << EndOfMessage 
import { Rxios } from 'rxios';
import { Observable } from 'rxjs';
import { I$DATASOURCE_NAME } from '../interfaces';
import { IModel } from '../models';

export class Service$DATASOURCE_NAME implements I$DATASOURCE_NAME {
  private http: Rxios;

  constructor() {
    this.http = new Rxios();
  }

  getData() {
    return this.http.get(
      'https://jsonplaceholder.typicode.com/todos'
    );
  }
}

export default Service$DATASOURCE_NAME;
EndOfMessage

cat > $WORKDIR/services/index.ts  << EndOfMessage 
export { default as Service$DATASOURCE_NAME } from './Service$DATASOURCE_NAME';
EndOfMessage

cat > $DATASOURCE_DIR/src/$DATASOURCE_NAME.ts  << EndOfMessage 
import * as mocks from './$DATASOURCE_NAME/__mock__';
import * as interfaces from './$DATASOURCE_NAME/interfaces';
import * as models from './$DATASOURCE_NAME/models';
import * as services from './$DATASOURCE_NAME/services';

export { services, interfaces, models, mocks };

export default {
  interfaces,
  models,
  services,
  mocks,
};
EndOfMessage

cat > $DATASOURCE_DIR/$DATASOURCE_NAME.js  << EndOfMessage 
'use strict';

module.exports = require('./lib/$DATASOURCE_NAME.build.js');
EndOfMessage

sed -i "s/\/\/##ENTRY--CONFIG##/\/\/##ENTRY--CONFIG##\n    $DATASOURCE_NAME: path.resolve('.', 'src', '$DATASOURCE_NAME.ts'),/" packages/core/datasource/webpack.config.js 