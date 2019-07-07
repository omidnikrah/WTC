
if (!/yarn\.js$/.test(process.env.npm_execpath)) {
  console.warn(
      "You don't seem to be using yarn. This could produce unexpected results."
  );
}
