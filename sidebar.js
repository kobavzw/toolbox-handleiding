function skipIndex(items) {
  return items.filter(({ type, id }) => {
    return type !== "doc" || id !== "index";
  });
}

module.exports = async function sidebarItemsGenerator({
  defaultSidebarItemsGenerator,
  ...args
}) {
  const sidebarItems = await defaultSidebarItemsGenerator(args);
  return skipIndex(sidebarItems);
};
