import React, {useContext} from 'react'
import { Redirect } from 'react-router-native'
import { useApolloClient } from '@apollo/client'

import AuthStorageContext from '../contexts/AuthStorageContext'

const LogOut = () => {
    const apolloClient = useApolloClient()
    const authStorage = useContext(AuthStorageContext)
    authStorage.removeAccessToken()
    apolloClient.resetStore()
    return <Redirect to={'/'} />
}

export default LogOut;