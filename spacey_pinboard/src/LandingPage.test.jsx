import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import LandingPage from './LandingPage'

test('should render title on landing page', ()=>{
    render(<LandingPage />)
    expect(screen.queryByText('NASA Pintrest')).toBeInTheDocument()
})