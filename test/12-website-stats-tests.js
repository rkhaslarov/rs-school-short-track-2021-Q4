const assert = require('assert');
const getWebsiteStats = require('../src/12-website-stats');
it.optional = require('../extensions/it-optional');

describe('12-website-stats', () => {
  it.optional('should return facebook stats', () => {
    const resources = [
      'https://facebook.com/static/files/',
      'https://facebook.com/static/files/music/1.mp3',
      'https://facebook.com/static/files/images/123.png',
    ];

    const result = getWebsiteStats(resources);

    assert.deepEqual(result.dnsStats, { '.com': 3, '.com.facebook': 3 });
    assert.deepEqual(result.types, { file: 2, folder: 1 });
    assert.deepEqual(result.extenstions, { mp3: 1, png: 1 });
  });

  it.optional('should return yandex stats', () => {
    const resources = [
      'https://music.yandex.ru/public/',
      'https://music.yandex.ru/secret/',
      'https://yandex.ru/public/files/music/144r243.mp4',
      'https://yandex.ru/public/images/hash.jpg',
    ];

    const result = getWebsiteStats(resources);

    assert.deepEqual(result.dnsStats, { '.ru': 4, '.ru.yandex': 4, '.ru.yandex.music': 2 });
    assert.deepEqual(result.types, { file: 2, folder: 2 });
    assert.deepEqual(result.extenstions, { mp4: 1, jpg: 1 });
  });

  it.optional('should return the mask if array is empty', () => {
    const result = getWebsiteStats([]);

    assert.deepEqual(result.dnsStats, {});
    assert.deepEqual(result.types, { file: 0, folder: 0 });
    assert.deepEqual(result.extenstions, {});
  });
});
