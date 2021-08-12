import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent, act } from '@testing-library/react'
import Chronometer from './Chronometer'

describe('<Chronometer />', () => {
  let component

  beforeEach(() => {
    component = render(
      <Chronometer />
    )
  })

  test('Change button text on click', () => {
    const button = component.getByText('Pause')
    fireEvent.click(button)

    const newButton = component.getByText('Resume')
    expect(newButton)
  })

  test('Enable finish button when click on play button', () => {
    const playButton = component.getByText('Start')
    fireEvent.click(playButton)

    const finishButton = component.getByText('Finish')
    expect(finishButton).not.toHaveProperty('disabled')
  })

})