import { describe, expect, test } from 'vitest'

import * as util from '~/dnd/adding.js'

describe('this is unit teset', () => {
  test('individual tst', () => {
    expect(util.addThree(6)).toBe(9)
  })
})
