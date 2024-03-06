const sdk = require('api')('@render-api/v1.0#ja8rb1jlsxhh7qu');
const core = require('@actions/core');

function run() {
    const key = core.getInput('auth-key', { required: true })
    const serviceId = core.getInput('service-id', { required: true })
    sdk.auth(key);
    sdk.createDeploy({
        clearCache: 'do_not_clear',
        commitId: 'string',
        imageUrl: 'string'
    }, {serviceId: serviceId})
    .then(({ data }) => {
        core.notice("Result of deploy: ")
        core.notice(data)
    })
    .catch(err => console.error(err));
}

run();