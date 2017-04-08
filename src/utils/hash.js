import toHash from 'string-hash';
import createToString from 'hash-to-string';

const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const toName = createToString(characters);

const digest = string => {
  const hash = toHash(string);
  const name = toName(hash);
  return {hash, name, string};
}

export default {digest};
