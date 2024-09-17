// next.config.js
module.exports = {
  webpack(config, options) {
    // Exclude global styles from CSS Modules processing
    config.module.rules.push({
      test: /\.css$/,
      exclude: /\.module\.css$/,
      use: [options.defaultLoaders.babel],
    });

    // Include CSS Modules processing
    config.module.rules.push({
      test: /\.module\.css$/,
      use: [options.defaultLoaders.babel],
    });

    return config;
  },
};
