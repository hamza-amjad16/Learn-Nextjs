"use client"
import React from 'react'
import { Input } from './ui/input'
import { useSearchParams } from 'next/navigation'
import { search } from '@/actions/search'

const SearchInput = () => {
    const searchParams = useSearchParams()
  return (
    <form action={search}>
        <Input 
        defaultValue={searchParams.get("term") || ""}
        type='text'
        placeholder='Search post ...'
        name='term'
        />
    </form>
  )
}

export default SearchInput