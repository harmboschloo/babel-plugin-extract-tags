
export const createGenerator = characters => {
  const chars = characters.split('');
  const n = chars.length;

  const generateName = (code, name) =>
    code > 0
      ? generateName(Math.floor(code / n), name + chars[code % n])
      : name;

    return code => code > 0 ? generateName(code, '') : chars[0];
}

export const generateAlphabeticName =
  createGenerator('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
