import React from 'react'

import {
  ReferencesContainer,
  ReferenceApi,
  Reference,
  ReferenceLink
} from './style'

import { ReferencesData } from '../../data/ReferencesData'

const References = () => {
  return (
    <ReferencesContainer>

      <ReferenceApi>
        <ReferenceLink>
          <p>API</p>
        </ReferenceLink>
      </ReferenceApi>
      
      {ReferencesData.map(({id, iconClass, title}) => {
        return (
          <Reference key={id}>
            <ReferenceLink>
              <i className={`icon ${iconClass}`}></i>
            </ReferenceLink>
          </Reference>
        )
      })}

    </ReferencesContainer>
  )
}

export default References
