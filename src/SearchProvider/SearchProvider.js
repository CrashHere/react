import React, { Component } from 'react'
import { InstantSearch } from 'react-instantsearch/dom'

export default class SearchProvider extends Component {
  render () {
    return (
      <InstantSearch
        appId='7SG71R3MGX'
        apiKey='6536717a06b5e0e332e909e22eac2aa9'
        indexName='Emergency Housing Services'
      >
        {this.props.children}
      </InstantSearch>
    )
  }
}
