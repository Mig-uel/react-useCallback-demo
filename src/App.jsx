import { useState, useCallback } from 'react'
import { shuffle } from './utils'

import Search from './components/search.component'

const allUsers = ['john', 'alex', 'george', 'simon', 'james']

function App() {
  const [users, setUsers] = useState(allUsers)

  const handleSearchCallback = useCallback(
    (text) => {
      console.log(users[0])
      const filteredUsers = allUsers.filter((user) => user.includes(text))
      setUsers(filteredUsers)
    },
    [users]
  )

  const handleClick = () => setUsers(shuffle(allUsers))

  return (
    <div>
      <div>
        <button onClick={handleClick}>Shuffle</button>

        <Search onChange={handleSearchCallback} />
      </div>

      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  )
}

export default App

// never freeze functions for ever, only when you have to
