module.exports = {
  bridgeport: '0.0.1',
  name: 'Convo User Profiles Protocol',
  description: 'Connect with people who use the Convo Messenger application',
  version: '0.1.0',
  routes: [],
  requestTransformer: x => x,
  responseTransformer: x => x,
  defaultQuery: JSON.stringify({
    v: 3,
    q: {
      collection: 'profiles',
      find: {},
      project: { name: 1 },
      limit: 10
    }
  }, null, 2),
  defaultSocket: JSON.stringify({
    v: 3,
    q: {
      find: {}
    }
  }, null, 2),
  readme: `
# Convo Users

> A collection of all Convo users registered on the Bitcoin SV blockchain`
}
