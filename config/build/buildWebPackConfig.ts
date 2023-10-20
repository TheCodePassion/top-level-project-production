import { buildDevServer } from './buildDevServer'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import buildResolves from './buildResolves'
import { BuildOptions } from './types/congif'
import path from 'path'

import webpack from 'webpack'

export function buildWebPackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { paths, mode, isDev } = options

  return {
    mode: mode,
    entry: paths.entry,

    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolves(),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  }
}
