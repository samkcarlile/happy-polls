export const noop = () => {};

/** Takes in an object and partitions it into multiple new objects
 *
 * @param {Object} obj the object to partition
 * @param {Object.<string, Function>} groups
 *
 * @returns {Object.<string, object>} an object where keys are partition names
 */
export const filterGroups = (obj, groups = {}) => {
  const result = {};

  const match = (key, value) =>
    Object.keys(groups).find(name => groups[name](key, value));

  Object.entries(obj).forEach(([key, value]) => {
    const groupName = match(key, value);
    if (!groupName) return;

    if (!result[groupName]) result[groupName] = {};
    result[groupName][key] = value;
  });

  return result;
};

/** Filters an object by keys, returning one object with the filtered keys,
 *  and an object for the rest.
 */
export const takeKeys = (obj, keys = []) => {
  const taken = {};
  const rest = {};

  Object.entries(obj).forEach(([key, value]) => {
    if (keys.includes(key)) taken[key] = value;
    else rest[key] = value;
  });

  return [taken, rest];
};
