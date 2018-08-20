PACKAGE_NAME=$1
PACKAGE_TYPE=$2 

PKG_JSON=""

WORKDIR=packages/$PACKAGE_NAME

echo "Creating New Packages"

if [ "$PACKAGE_TYPE" == "react" ]
    then
    PKG_JSON="
        \"react\": \"^16.4.2\",
        \"react-dom\": \"^16.4.2\"
    "
		mkdir $WORKDIR
		mkdir $WORKDIR/src
    mkdir $WORKDIR/src/ComponentA
cat > $WORKDIR/src/ComponentA/ComponentA.tsx  << EndOfMessage 
import * as React from 'react';

export class ComponentA extends React.Component {
	render() {
		const str:string = 'ComponentA'

		return (
			<h1>{str}</h1>
		);
	}
}

export default ComponentA;
EndOfMessage

cat > $WORKDIR/src/ComponentA/ComponentA.test.jsx  << EndOfMessage 
import React from "react";
import ReactDOM from "react-dom";
import ComponentA from "./ComponentA";

it("renders component", () => {
	const div = document.createElement("div");
	ReactDOM.render(<ComponentA />, div);
	ReactDOM.unmountComponentAtNode(div);
});
EndOfMessage

cat > $WORKDIR/src/index.ts  << EndOfMessage 
export { default as ComponentA } from './ComponentA/ComponentA';
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


elif [ "$PACKAGE_TYPE" == "feature" ]
    then
    PKG_JSON="
        \"mobx\": \"^5.0.3\",
        \"mobx-react\": \"^5.2.5\",
        \"react\": \"^16.4.2\",
        \"react-dom\": \"^16.4.2\",
        \"@alvin/ui\": \"^1.0.0\"
    "
		mkdir $WORKDIR
		mkdir $WORKDIR/src
		mkdir $WORKDIR/src/pages
    mkdir $WORKDIR/src/pages/PageA
    mkdir $WORKDIR/src/pages/PageA/components
    mkdir $WORKDIR/src/pages/PageA/interfaces

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

export const ComponentA = observer(({ text }) => (
	<h1>{text}</h1>
));

export default ComponentA;
EndOfMessage

cat > $WORKDIR/src/pages/PageA/components/ComponentA.css  << EndOfMessage 
h1 {
	color: blue;
}
EndOfMessage

cat > $WORKDIR/src/pages/PageA/interfaces/IComponentStoreA.ts  << EndOfMessage 
export class IComponentStoreA {
	text: string = '';

	get text() {}
	changeText() {}
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

	WORKDIR=packages/datasource
    mkdir $WORKDIR/src/$PACKAGE_NAME/interfaces
    mkdir $WORKDIR/src/$PACKAGE_NAME/services
    mkdir $WORKDIR/src/$PACKAGE_NAME/stores

cat > $WORKDIR/src/$PACKAGE_NAME/interfaces/interface.ts  << EndOfMessage 
export default interface Interface {
	addThing(thing: string);
	getThing(): string;
}
EndOfMessage

cat > $WORKDIR/src/$PACKAGE_NAME/services/services.ts  << EndOfMessage 
import Interface from '../../interfaces/$PACKAGE_NAME/interface'

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

cat > $WORKDIR/src/$PACKAGE_NAME/stores/store.ts  << EndOfMessage 
import { observable, action, computed, configure } from 'mobx'
import Interface from '../../interfaces/$PACKAGE_NAME/interface'

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
	

elif [ "$PACKAGE_TYPE" == "data" ]
    then

	WORKDIR=packages/datasource
    mkdir $WORKDIR/src/$PACKAGE_NAME/interfaces
    mkdir $WORKDIR/src/$PACKAGE_NAME/services
    mkdir $WORKDIR/src/$PACKAGE_NAME/stores

cat > $WORKDIR/src/$PACKAGE_NAME/interfaces/interface.ts  << EndOfMessage 
export default interface Interface {
	addThing(thing: string);
	getThing(): string;
}
EndOfMessage

cat > $WORKDIR/src/$PACKAGE_NAME/services/services.ts  << EndOfMessage 
import Interface from '../../interfaces/$PACKAGE_NAME/interface'

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

cat > $WORKDIR/src/$PACKAGE_NAME/stores/store.ts  << EndOfMessage 
import { observable, action, computed, configure } from 'mobx'
import Interface from '../../interfaces/$PACKAGE_NAME/interface'

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