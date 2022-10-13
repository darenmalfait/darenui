/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: 'netlify',
  server:
    process.env.NETLIFY || process.env.NETLIFY_LOCAL
      ? './build/server.js'
      : undefined,
  cacheDirectory: './node_modules/.cache/remix',
  ignoredRouteFiles: ['.*', '**/*.css', '**/*.test.{js,jsx,ts,tsx}'],
  watchPaths: ['../packages/**/*'],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: ".netlify/functions-internal/server.js",
  // publicPath: "/build/",
}
