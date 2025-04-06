"use client"

import { Button } from '@/components/ui/button'
import { LogOut } from 'lucide-react'
import React from 'react'
import { logout } from '../(home)/lib/actions'

export default function LogoutButton() {
  return (
    <form action={async (formData) => { await logout(); }}>
      <Button variant="destructive" className="rounded-full">
        <LogOut className="w-4 h-4" />
      </Button>
    </form>
  )
}
