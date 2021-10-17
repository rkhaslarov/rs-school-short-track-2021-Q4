/**
 * Given an array of links, return the object
 * with the appearances of the DNS, types and file extensions.
 *
 * @param {Array} resources
 * @return {Object}
 *
 * @example
 * resources = [
 *  'https://code.yandex.ru/public/image.png',
 *  'https://music.yandex.ru/secret/sound.mp3',
 *  'http://yandex.ru/folder/'
 * ]
 *
 * The result should be the following:
 * {
 *   'dnsStats': {
 *      '.ru': 3,
 *      '.ru.yandex': 3,
 *      '.ru.yandex.code': 1,
 *      '.ru.yandex.music': 1,
 *    },
 *   'types': {
 *      file: 2,
 *      folder: 1
 *    },
 *    'extenstions': {
 *      'png': 1,
 *      'mp3': 1,
 *    }
 * }
 *
 */
function getWebsiteStats(/* resources */) {
  throw new Error('Not implemented');
}

module.exports = getWebsiteStats;
