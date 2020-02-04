// async function is also supported, too
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
  isServer // is this enhancement applied in server-rendering or client
}) => {
  // ...apply enhancements to the app
  // Vue.install(Vssue);
  // console.log('options', options);
  // console.log('router', router);
  // console.log('Vue', Vue);
  // console.log('siteData', siteData);
  // ...做一些其他的应用级别的优化
}