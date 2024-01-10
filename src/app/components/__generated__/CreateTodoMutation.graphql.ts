/**
 * @generated SignedSource<<0335cebfebf691362fb92d5d2990074e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateTodoMutation$variables = {
  complete: boolean;
  hidden: boolean;
  text: string;
};
export type CreateTodoMutation$data = {
  readonly createOneTodoItem: {
    readonly complete: boolean;
    readonly createdAt: any;
    readonly hidden: boolean;
    readonly id: string;
    readonly text: string;
    readonly updatedAt: any;
  };
};
export type CreateTodoMutation = {
  response: CreateTodoMutation$data;
  variables: CreateTodoMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "complete"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "hidden"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "text"
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "complete",
            "variableName": "complete"
          },
          {
            "kind": "Variable",
            "name": "hidden",
            "variableName": "hidden"
          },
          {
            "kind": "Variable",
            "name": "text",
            "variableName": "text"
          }
        ],
        "kind": "ObjectValue",
        "name": "data"
      }
    ],
    "concreteType": "TodoItem",
    "kind": "LinkedField",
    "name": "createOneTodoItem",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "text",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "complete",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "hidden",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "createdAt",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "updatedAt",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateTodoMutation",
    "selections": (v3/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "CreateTodoMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "a29e9ae09e63d16066d733cb65c2109d",
    "id": null,
    "metadata": {},
    "name": "CreateTodoMutation",
    "operationKind": "mutation",
    "text": "mutation CreateTodoMutation(\n  $text: String!\n  $complete: Boolean!\n  $hidden: Boolean!\n) {\n  createOneTodoItem(data: {text: $text, complete: $complete, hidden: $hidden}) {\n    id\n    text\n    complete\n    hidden\n    createdAt\n    updatedAt\n  }\n}\n"
  }
};
})();

(node as any).hash = "51c9b44b32ede388e00ca4b541361620";

export default node;
