module.exports = {
  //github-action
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/" + process.env.CI_PROJECT_NAME + "/"
      : "/",

  //tracis-ci
  //   publicPath: "/",
  //   publicPath: process.env.NODE_ENV === "production" ? "/vue-github-page/" : "/",
  //   publicPath: process.env.NODE_ENV === "production" ? "/my-project/" : "/",
};
