import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import LandingPage from './LandingPage'
import { BrowserRouter } from 'react-router-dom'

test('should render title on landing page', ()=>{
    render(<BrowserRouter><LandingPage /></BrowserRouter>)
    expect(screen.queryByText('NASA Pintrest')).toBeInTheDocument()
})