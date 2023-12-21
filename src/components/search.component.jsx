import { memo } from 'react'
// hook that is used for performance reasons
// intercepts render of component and checks props of search components to see if
// they have changed/different
// if it is: re-render component, if not: skips re-render component

const Search = ({ onChange }) => {
  console.log('Search rendered')

  return (
    <input
      type='text'
      placeholder='Search users...'
      onChange={(e) => onChange(e.target.value)}
    />
  )
}

export default memo(Search)
