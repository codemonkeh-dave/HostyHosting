/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type APIKeysDeleteMutationVariables = {
    id: string;
};
export type APIKeysDeleteMutationResponse = {
    readonly deleteAPIKey: {
        readonly id: string;
    };
};
export type APIKeysDeleteMutation = {
    readonly response: APIKeysDeleteMutationResponse;
    readonly variables: APIKeysDeleteMutationVariables;
};



/*
mutation APIKeysDeleteMutation(
  $id: ID!
) {
  deleteAPIKey(id: $id) {
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "APIKey",
    "kind": "LinkedField",
    "name": "deleteAPIKey",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "APIKeysDeleteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "APIKeysDeleteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "APIKeysDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation APIKeysDeleteMutation(\n  $id: ID!\n) {\n  deleteAPIKey(id: $id) {\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '7ad0520cf5640e96c7817f6811804355';
export default node;
