const autoprefixer = require("autoprefixer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.(css|scss)$/,
      // exclude: /\.module\.(css|scss)$/i,
      use: [
        ...(isServer ? [] : ["style-loader"]),
        {
          loader: require.resolve("css-loader"),
          options: {
            importLoaders: 1,
            modules: {
              localIdentName: "[name]_[local]_[hash:base64:5]",
            },
            url: true,
          },
        },
        {
          loader: require.resolve("postcss-loader"),
          options: {
            ident: "postcss",
            plugins: () => [
              require("postcss-flexbugs-fixes"),
              autoprefixer({
                flexbox: "no-2009",
              }),
            ],
          },
        },
        require.resolve("resolve-url-loader"),
        {
          loader: "sass-loader",
          options: {
            sourceMap: true,
          },
        },
      ],
    });

    return {
      ...config,
    };
  },
};

module.exports = nextConfig;
