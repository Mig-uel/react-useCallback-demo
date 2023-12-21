import { useState } from 'react'
import { shuffle } from './utils'

import Search from './components/search.component'

const allUsers = ['kohn', 'alex', 'george', 'simon', 'james']

function App() {
  const [users, setUsers] = useState(allUsers)

  const handleSearch = (text) => {
    const filteredUsers = allUsers.filter((user) => user.includes(text))
    setUsers(filteredUsers)
  }

  const handleClick = () => setUsers(shuffle(allUsers))

  return (
    <div>
      <div>
        <button onClick={handleClick}>Shuffle</button>

        <Search onChange={handleSearch} />
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
