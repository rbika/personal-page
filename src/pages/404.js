import * as React from 'react'

import { navigate } from '@reach/router'

export default () => {
  React.useEffect(() => {
    navigate('/')
  }, [])

  return null
}
