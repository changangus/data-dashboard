/* eslint-disable no-undef */
import 'colors';

expect.extend({
  toEqualHTML(received, expected) {
    const receivedNoWhiteSpace = received.replace(/>\s+</g, '><').trim();
    const expectedNoWhiteSpace = expected.replace(/>\s+</g, '><').trim();
    return {
      pass: receivedNoWhiteSpace === expectedNoWhiteSpace,
      message: () => `Expected: ${expectedNoWhiteSpace}`.green + `\nReceived: ${receivedNoWhiteSpace}`.red,
    };
  },
});
