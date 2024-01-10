/**
 * @generated SignedSource<<321bd4e1b10d9fc2890ff97369b988bf>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type TodoListUpdateTodoItemMutation$variables = {
  complete: boolean;
  id: string;
};
export type TodoListUpdateTodoItemMutation$data = {
  readonly updateOneTodoItem: {
    readonly complete: boolean;
    readonly createdAt: any;
    readonly hidden: boolean;
    readonly id: string;
    readonly text: string;
    readonly updatedAt: any;
  } | null | undefined;
};
export type TodoListUpdateTodoItemMutation = {
  response: TodoListUpdateTodoItemMutation$data;
  variables: TodoListUpdateTodoItemMutation$variables;
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
  "name": "id"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "fields": [
              {
                "kind": "Variable",
                "name": "set",
                "variableName": "complete"
              }
            ],
            "kind": "ObjectValue",
            "name": "complete"
          }
        ],
        "kind": "ObjectValue",
        "name": "data"
      },
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id"
          }
        ],
        "kind": "ObjectValue",
        "name": "where"
      }
    ],
    "concreteType": "TodoItem",
    "kind": "LinkedField",
    "name": "updateOneTodoItem",
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
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoListUpdateTodoItemMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "TodoListUpdateTodoItemMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "4ae9f899bb41e6dd04409ed56192b9d8",
    "id": null,
    "metadata": {},
    "name": "TodoListUpdateTodoItemMutation",
    "operationKind": "mutation",
    "text": "mutation TodoListUpdateTodoItemMutation(\n  $id: String!\n  $complete: Boolean!\n) {\n  updateOneTodoItem(where: {id: $id}, data: {complete: {set: $complete}}) {\n    id\n    text\n    complete\n    hidden\n    createdAt\n    updatedAt\n  }\n}\n"
  }
};
})();

(node as any).hash = "04f3266384fe07677f2c4859f84f09ff";

export default node;
