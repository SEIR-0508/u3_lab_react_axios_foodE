import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useState } from 'react'

export default function ResultsList() {

  const CocktailList = ({ searchResults }) => {

    const results = searchResults.map(cocktail => <Cocktail key={cocktail.id} cocktail={cocktail} />)

  }

  const { cocktails, loading } = useState
  if (loading) {
    return <Loading/>
  }

  if (cocktails.length < 1) {
    return (
      <h2 className='section-title'>
        hmm, we don't see that here
      </h2>
    )
  }
return (
    <section className='section'>
      <h2 className='section-title'>cocktails</h2>
      <div className='cocktails-center'>
        {cocktails.map((cocktails) => {
          return <Cocktail key={cocktails.id} {...cocktails} />
        })}
      </div>
    </section>
  )
}