import { AppButton, AppText, Box, Container, Padding } from '@/Components'
import { PageName } from '@/Config'
import { useAppTheme } from '@/Hooks'
import { LanguageCode } from '@/Models'
import { navigate } from '@/Navigators'
import { appStore } from '@/Stores'
import { Layout } from '@/Theme'
import React from 'react'
import { useTranslation } from 'react-i18next'

const HomeScreen = () => {
  const { Colors } = useAppTheme()
  const { t } = useTranslation()
  return (
    <Container style={[Layout.center, { backgroundColor: Colors.background }]}>
      <AppButton
        onPress={() => navigate(PageName.ExampleScreen)}
        text="Components"
      />
      <Padding top={10} />
      <AppButton text="Switch Theme" onPress={() => appStore.switchTheme()} />
      <Padding top={10} />
      <Box padding={15} backgroundColor="white">
        <AppText>{t('vietnamese')}</AppText>
      </Box>
      <AppButton
        text="Change Language"
        onPress={() =>
          appStore.setLanguage(
            appStore.language === LanguageCode.En
              ? LanguageCode.Vi
              : LanguageCode.En,
          )
        }
      />
    </Container>
  )
}

export default HomeScreen
