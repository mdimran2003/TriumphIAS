const getColorTitle = (text) => {
  const placeholders = {
    "{([^}]+)}": '<span style="text-color:#ed2828">$1</span>',
  };

  return Object.entries(placeholders).reduce(
    (finalText, [pattern, replacement]) =>
      finalText?.replace(new RegExp(pattern, "g"), replacement),
    text
  );
};

export default getColorTitle;
