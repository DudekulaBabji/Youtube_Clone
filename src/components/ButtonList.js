import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className='flex'>
        <Button name="All"/>
        <Button name="Gaming" />
        <Button name="Songs"/>
        <Button name="Live" />
        <Button name="Cricket"/>
        <Button name="News"/>
        <Button name="Cooking"/>
        <Button name="Trailer"/>
        <Button name="Motivation"/>
        <Button name="Podcast"/>
        <Button name="Comedy"/>
        <Button name="Mixes"/>
        <Button name="Watched"/>
        <Button name="Biryani"/>
    </div>
  )
}

export default ButtonList