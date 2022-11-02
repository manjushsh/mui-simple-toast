import React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { MUISimpleToast } from '../toast'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(<MUISimpleToast />)
  })
})
