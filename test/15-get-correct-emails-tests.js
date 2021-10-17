const assert = require('assert');
const getCorrectEmails = require('../src/15-get-correct-emails');
it.optional = require('../extensions/it-optional');

describe('15-get-correct-emails', () => {
  it.optional('should return the number of correct email addresses', () => {
    assert.strictEqual(getCorrectEmails(['a@gmail.com', 'b@gmail.com', 'c@gmail.com']), 3);
    assert.strictEqual(getCorrectEmails(['someaddress@yandex.ru']), 1);
    assert.strictEqual(getCorrectEmails(['someaddress@yandex.ru', 'abc-@mail.com', 'abc#def@mail.com']), 1);
    assert.strictEqual(getCorrectEmails(['abc.def@mail', 'abc.def@mail.c', 'abc#def@mail.com']), 0);
    assert.strictEqual(getCorrectEmails([]), 0);
  });
});
