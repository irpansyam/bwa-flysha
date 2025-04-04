"use client"
import React, { FC, ReactNode } from 'react'
import SeatProvider from './providers/seat-provider'
import { Toaster } from 'sonner'

interface LayoutlayoutProps {
  children: ReactNode
}

const Layoutlayout: FC<LayoutlayoutProps> = ({ children }) => {
  return (
    <SeatProvider>
        {children} <Toaster/>
    </SeatProvider>
  )
}

export default Layoutlayout;