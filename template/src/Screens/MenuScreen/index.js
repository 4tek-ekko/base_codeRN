import { AppText, Container } from '@/Components'
import { PageName } from '@/Config'
import { navigate } from '@/Navigators'
import { Colors, XStyleSheet } from '@/Theme'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const MenuScreen = () => {
  return (
    <Container style={styles.rootView}>
      <TouchableOpacity onPress={() => navigate(PageName.SubMenuScreen)}>
        <AppText fontSize="h3" align="center">
          SubMenuScreen
        </AppText>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate(PageName.DetailScreen)}>
        <AppText fontSize="h3" align="center">
          DetailScreen
        </AppText>
      </TouchableOpacity>
    </Container>
  )
}

export default MenuScreen

const styles = XStyleSheet.create({
  rootView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
})
