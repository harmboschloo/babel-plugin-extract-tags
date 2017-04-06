
export const createGenerator = characters => {
  const chars = characters.split('');
  const n = chars.length;

  const generateName = (code, name) =>
    code > 0
      ? generateName(Math.floor(code / n), name + chars[code % n])
      : name;

    return code => generateName(code, '');
}

export const generateAlphabeticName =
  createGenerator('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
