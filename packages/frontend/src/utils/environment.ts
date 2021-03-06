import {
    Environment,
    Network,
    RecordSource,
    Store,
    Variables,
    RequestParameters,
} from 'relay-runtime';
import { checkCookies } from './user';

async function fetchQuery(request: RequestParameters, variables: Variables) {
    const response = await fetch('/api/graphql', {
        credentials: 'include',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: request.text,
            variables,
            operationName: request.name,
        }),
    });

    // If the user state has changed, then we need to reset the apollo cache:
    if (checkCookies()) {
        // TODO: Reset relay store here.
    }

    return await response.json();
}

export function createEnvironment() {
    const network = Network.create(fetchQuery);

    const store = new Store(new RecordSource(), {
        gcReleaseBufferSize: 10,
    });

    return new Environment({
        network,
        store,
    });
}
