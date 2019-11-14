//for typescript-plugin-css-modules
// https://github.com/mrmckeb/typescript-plugin-css-modules#custom-definitions
declare module "*.less" {
  const classes: { [key: string]: string };
  export default classes;
}
