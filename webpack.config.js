var path = require("path");

module.exports = {
  entry: {
    components: [
      "./src/components/CorporateHomePage/CorporateFooter/CorporateFooterNavigationMenu/index.tsx",
      "./src/components/CorporateHomePage/CorporateFooter/index.tsx",
      "./src/components/CorporateHomePage/CorporateHeader/index.tsx",
      "./src/components/CorporateHomePage/CorporateNavigation/index.tsx",
      "./src/components/CorporateHomePage/CorporateNavigation/NavigationItem/index.tsx",
      "./src/components/CorporateHomePage/CorporateServices/CorporateService/index.tsx",
      "./src/components/CorporateHomePage/CorporateServices/index.tsx",
      "./src/components/CorporateHomePage/CorporateTestimonials/CorporateTestimonial/index.tsx",
      "./src/components/CorporateHomePage/CorporateTestimonials/index.tsx",
      "./src/components/CorporateHomePage/index.tsx",
      "./src/components/ProductLandingPage/DarkProductHeadline/index.tsx",
      "./src/components/ProductLandingPage/index.tsx",
      "./src/components/ProductLandingPage/LightProductHeadline/index.tsx",
      "./src/components/ProductLandingPage/ProductFooter/index.tsx",
      "./src/components/ProductLandingPage/ProductFooter/ProductFooterNavigation/index.tsx",
      "./src/components/ProductLandingPage/ProductFooter/ProductFooterNavigation/ProductFooterNavigationElement/index.tsx",
      "./src/components/ProductLandingPage/ProductFooter/ProductFooterNavigation/ProductFooterNavigationElement/ProductFooterNavigationSubMenu/index.tsx",
      "./src/components/ProductLandingPage/ProductFooter/ProductFooterNavigation/ProductFooterNavigationElement/ProductFooterNavigationSubMenu/SubMenuElement/index.tsx",
      "./src/components/ProductLandingPage/ProductHeadline/index.tsx",
      "./src/components/ProductLandingPage/ProductHeadLineContainer/index.tsx",
      "./src/components/ProductLandingPage/ProductNavigation/index.tsx",
      "./src/components/ProductLandingPage/ProductNavigation/ProductMenuItem/index.tsx",
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: "basicLandingPage",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devtool: "source-map",
};
