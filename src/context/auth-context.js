import React from 'react'

const authContext = React.createContext({
    authenticated: false,
    login: () => {} //context API
});

export default authContext