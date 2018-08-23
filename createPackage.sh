PACKAGE_NAME=$1
PACKAGE_TYPE=$2 

PKG_JSON=""

WORKDIR=packages/$PACKAGE_NAME

echo "Creating New Packages"

if [ "$PACKAGE_TYPE" == "ui" ]
    then
    WORKDIR=packages/ui/src/$PACKAGE_NAME
    mkdir $WORKDIR
cat > $WORKDIR/$PACKAGE_NAME.tsx  << EndOfMessage 
import * as React from 'react';
import { css } from 'emotion'

const style = css\`
    color: red;
\`

export class $PACKAGE_NAME extends React.Component {
	render() {
		const str:string = '$PACKAGE_NAME'

		return (
			<h1 className={style}>{str}</h1>
		);
	}
}

export default $PACKAGE_NAME;
EndOfMessage

cat > $WORKDIR/$PACKAGE_NAME.test.jsx  << EndOfMessage 
import React from "react";
import ReactDOM from "react-dom";
import $PACKAGE_NAME from "./$PACKAGE_NAME";

it("renders component", () => {
	const div = document.createElement("div");
	ReactDOM.render(<ComponentA />, div);
	ReactDOM.unmountComponentAtNode(div);
});
EndOfMessage

elif [ "$PACKAGE_TYPE" == "feature" ]
    then
    PKG_JSON="
        \"@alvin/datasource\": \"^1.0.0\",
        \"@alvin/ui\": \"^1.0.0\",
        \"emotion\": \"^9.2.6\",
        \"mobx\": \"^5.0.3\",
        \"mobx-react\": \"^5.2.5\",
        \"react\": \"^16.4.2\",
        \"react-dom\": \"^16.4.2\",
        \"react-emotion\": \"^9.2.6\"
    "
		mkdir $WORKDIR
		mkdir $WORKDIR/src
		mkdir $WORKDIR/src/pages
    mkdir $WORKDIR/src/pages/PageA
    mkdir $WORKDIR/src/pages/PageA/components
    mkdir $WORKDIR/src/pages/PageA/interface
    mkdir $WORKDIR/src/pages/PageA/service
    mkdir $WORKDIR/src/pages/PageA/store

cat > $WORKDIR/src/pages/PageA/index.tsx  << EndOfMessage 
import * as React from 'react';
import { observer } from 'mobx-react';

import { IComponentStoreA } from './interfaces/IComponentStoreA';

import ComponentA from './components/ComponentA';

interface IComponentProps {
	store?: IComponentStoreA;
}

@observer
export class PageA extends React.Component<IComponentProps, {}> {
	render() {
		return (
			<div>
				<ComponentA text={this.props.store.text}/>
			</div>
		);
	}
}

export default PageA;
EndOfMessage

cat > $WORKDIR/src/pages/PageA/components/ComponentA.tsx  << EndOfMessage 
import * as React from 'react';
import { observer } from 'mobx-react';
import { css } from 'emotion'

const styles = {
    h1: css\`
        color: blue;
    \`
}

export const ComponentA = observer(({ text }) => (
	<h1 className={styles.h1}>{text}</h1>
));

export default ComponentA;
EndOfMessage

cat > $WORKDIR/src/pages/PageA/interfaces/IComponentStoreA.ts  << EndOfMessage 
export interface IComponentStoreA {
  text: string;

  changeText: (text: string) => void;
}

export default IComponentStoreA;

EndOfMessage

cat > $WORKDIR/src/index.ts  << EndOfMessage 
export { default as PageA } from './pages/PageA'
EndOfMessage

cat > $WORKDIR/package.json << EndOfMessage 
{
    "name": "@alvin/$PACKAGE_NAME",
    "version": "1.0.0",
    "description": "",
    "main": "lib/index.js",
    "scripts": {},
    "publishConfig": {
        "access": "public"
    },
    "author": "",
    "license": "ISC",
    "peerDependencies": {$PKG_JSON},
    "devDependencies": {$PKG_JSON}
}
EndOfMessage

cat > $WORKDIR/src/pages/PageA/interface/interface.ts  << EndOfMessage 
export interface Interface {
	addThing(thing: string);
	getThing(): string;
}

export default Interface
EndOfMessage

cat > $WORKDIR/src/pages/PageA/service/service.ts  << EndOfMessage 
import Interface from '../interface/interface'

export class Service implements Interface {
	addThing(thing: string) {
		// implementation
	}

	getThing() {
		return 'implementation';
	}
}

export default Service;
EndOfMessage

cat > $WORKDIR/src/pages/PageA/store/store.ts  << EndOfMessage 
import { observable, action, computed, configure } from 'mobx'
import Interface from '../interface/interface'

configure({
	enforceActions: true
});

export class Store {
	@observable
	thing: string = '';

	@computed
	get things() {
		const arr = Array.apply(null, { length: 5 }).map(a => a = this.string);
		return arr;
	}

	@action
	setThing(thing: string) {
		this.thing = thing
	}
}

export default Store
EndOfMessage
	
else
    echo "Please input Package Type"
    exit 1;
fi



echo "Package JSON created to $WORKDIR, rerunning yarn bootstrap"
yarn bootstrap