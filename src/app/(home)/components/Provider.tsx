"use client"
import React, { useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
type Props = {}

const Provider = ({
  children,
}: {
  children: React.ReactNode
  
}) => {
  const [supabase] = useState(() => createClientComponentClient())
  return (
    <SessionContextProvider supabaseClient={supabase} >
      {children}
    </SessionContextProvider>
  )
}

export default Provider