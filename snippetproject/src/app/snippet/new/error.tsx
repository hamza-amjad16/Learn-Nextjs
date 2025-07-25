"use client"
import React from 'react'

type ErrorPageProps = {
    error: Error
}
function ErrorPage({error}: ErrorPageProps) {
  return (
    <div>{error.message}</div>
  )
}

export default ErrorPage