// next.config.js
module.exports = {
  webpack(config, options) {
    // Exclude global styles from CSS Modules processing
    config.module.rules.push({
      test: /\.css$/,
      exclude: /\.module\.css$/,
      use: [options.defaultLoaders.babel, "style-loader", "css-loader"],
    });

    // Include CSS Modules processing
    config.module.rules.push({
      test: /\.module\.css$/,
      use: [
        options.defaultLoaders.babel,
        "style-loader",
        {
          loader: "css-loader",
          options: {
            modules: true,
          },
        },
      ],
    });

    return config;
  },
};
