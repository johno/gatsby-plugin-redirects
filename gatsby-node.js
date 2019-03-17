const fs = require('fs')
const { onPostBuild } = require('gatsby-plugin-meta-redirect/gatsby-node')

const FILE_NAME = './redirects.json'

const fileExists = filePath => {
  try {
    if (fs.existsSync(filePath)) {
      return true
    }
  } catch (_) {
    return false
  }
}

exports.createPages = ({ actions }) => {
  const { createRedirect } = actions

  if (fileExists(FILE_NAME)) {
    const redirects = JSON.parse(fs.readFileSync(FILE_NAME, 'utf8'))

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
