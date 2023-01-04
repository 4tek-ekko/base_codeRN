import { AppText, Container } from '@/Components'
import { Colors, XStyleSheet } from '@/Theme'
import React from 'react'

const Account = () => {
  return (
    <Container style={styles.container}>
      <AppText>Account</AppText>
    </Container>
  )
}

export default Account

const styles = XStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
})
