const fs = require('fs')
const { onPostBuild } = require('gatsby-plugin-meta-redirect')

const FILE_NAME = 'redirects.json'

const fileExists = filePath => {
  try {
    if (fs.existsSync(filePath)) {
      return true
    }
  } catch (_) {
    return false
  }
}

exports.onCreatePages = ({ actions }) => {
  const { createRedirect } = actions

  if (fileExists(FILE_NAME)) {
    const redirects = require(FILE_NAME)

    redirects.map(redirect => {
      createRedirect({
        fromPath: redirect.from,
        toPath: redirect.to,
        isPermanent: true
      })
    })
  }
}

exports.onPostBuild = onPostBuild
