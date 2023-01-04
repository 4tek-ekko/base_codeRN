import { ChevronRightSvg, TooltipSvg } from '@/Assets/Svg'
import {
  Accordion,
  AnimatedNumber,
  AppBar,
  AppBottomSheet,
  AppButton,
  AppCalendar,
  AppGradientText,
  AppImage,
  AppText,
  AppTooltip,
  Box,
  Carousel,
  CollapseMenu,
  Container,
  Draggable,
  Dropdown,
  Expanded,
  AppInput,
  LoadingIndicator,
  Obx,
  Padding,
  Position,
  Row,
  AppWebView,
  Pagination,
} from '@/Components'
import { Config, PageName } from '@/Config'
import { useAppTheme } from '@/Hooks'
import { navigate } from '@/Navigators'
import { diaLogStore } from '@/Stores'
import {
  Colors,
  Layout,
  ResponsiveHeight,
  ResponsiveWidth,
  screenHeight,
  screenWidth,
  XStyleSheet,
} from '@/Theme'
import { randomRgb } from '@/Utils'
import { FlashList } from '@shopify/flash-list'
import { useLocalObservable } from 'mobx-react-lite'
import React, { useRef, useState } from 'react'
import { Alert, FlatList, TouchableOpacity, View } from 'react-native'

const components = [
  'AnimatedNumber',
  'AppWebView',
  'AppButton',
  'AppImage',
  'AppGradientText',
  'AppBar',
  'AppText',
  'AppDiaLog',
  'AppBottomSheet',
  'AppCalendar',
  'AppTooltip',
  'Accordion',
  'Box',
  'Carousel',
  'CollapseMenu',
  'Container',
  'Padding',
  'AppInput',
  'Expanded',
  'Row',
  'Dropdown',
  'Draggable',
  'Pagination',
  'Position',
  'LoadingIndicator',
  'Obx=Observer',
  'FlashList',
]

const ExampleScreen = () => {
  const { Images } = useAppTheme()
  const carouselRef = useRef()
  const sheetRef = useRef()
  const calendarSheetRef = useRef()
  const accordionRef = useRef()
  const state = useLocalObservable(() => ({
    screen: 'Home',
    setScreen: payload => (state.screen = payload),
    safeAreaColor: 'aqua',
    setSafeAreaColor: payload => (state.safeAreaColor = payload),
    disableTop: false,
    setDisableTop: payload => (state.disableTop = payload),
    disableBottom: true,
    setDisableBottom: payload => (state.disableBottom = payload),
    statusBar: 'light-content',
    setStatusBar: payload => (state.statusBar = payload),
    reverse: false,
    setReverse: payload => (state.reverse = payload),
    justify: 'flex-start',
    setJustify: payload => (state.justify = payload),
    align: 'flex-start',
    setAlign: payload => (state.align = payload),
    fontSize: 16,
    setFontSize: payload => (state.fontSize = payload),
    color: 'black',
    setColor: payload => (state.color = payload),
    lineHeight: 20,
    setLineHeight: payload => (state.lineHeight = payload),
    textAlign: 'left',
    setTextAlign: payload => (state.textAlign = payload),
    open: false,
    setOpen: payload => (state.open = payload),
    value: 'item1',
    setValue: payload => (state.value = payload),
    overlay: false,
    setOverlay: payload => (state.overlay = payload),
    top: 0,
    setTop: payload => (state.top = payload),
    left: 0,
    setLeft: payload => (state.left = payload),
    money: 5000,
    setMoney: payload => (state.money = payload),
    tooltipOpen: false,
    setTooltipOpen: payload => (state.tooltipOpen = payload),
    currentPage: 1,
    setCurrentPage: payload => (state.currentPage = payload),
  }))

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const renderComponentItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          state.setScreen(item)
        }}
      >
        <Row
          justify="space-between"
          align="center"
          style={styles.componentItem}
        >
          <AppText>{item}</AppText>
          <ChevronRightSvg />
        </Row>
      </TouchableOpacity>
    )
  }

  const renderPageItem = ({ item, index }) => {
    return (
      <AppImage
        style={styles.pageItem}
        source={{ uri: item }}
        onPress={() => {
          carouselRef.current.scrollToIndex(index + 1)
        }}
      />
    )
  }

  return (
    <Obx>
      {() => (
        <Container
          safeAreaColor={state.safeAreaColor}
          disableBottom={state.disableBottom}
          disableTop={state.disableTop}
          statusBarProps={{
            barStyle: state.statusBar,
          }}
          style={styles.rootView}
        >
          <Obx>
            {() => (
              <AppBar
                title={state.screen}
                onBackPress={() => state.setScreen('Home')}
                showBack={state.screen !== 'Home'}
              />
            )}
          </Obx>
          <Obx>
            {() =>
              state.screen === 'Home' && (
                <FlatList data={components} renderItem={renderComponentItem} />
              )
            }
          </Obx>
          <Obx>
            {() =>
              state.screen === 'Draggable' && (
                <Draggable
                  maxX={screenWidth - 50 - 30}
                  maxY={screenHeight - 50 - 60}
                  style={styles.draggble}
                  snapTo="horizontal"
                >
                  <TouchableOpacity style={styles.draggableButton} />
                </Draggable>
              )
            }
          </Obx>
          <Obx>
            {() =>
              state.screen === 'AppInput' && (
                <Padding horizontal={15} vertical={15}>
                  <AppInput
                    style={{}}
                    // label={'Username2'}
                    placeholder={'Username'}
                    value={username}
                    onChangeText={setUsername}
                  />
                  <AppInput
                    style={{ marginTop: 16 }}
                    label={'Password'}
                    placeholder={'Password'}
                    value={password}
                    customLabelStyles={{ leftBlurred: 0.001 }}
                    onChangeText={setPassword}
                    maxLength={19}
                    isPassword={true}
                    textError={'Mật khẩu yêu cầu ít nhất 6 kí tự'}
                  />
                  <AppInput
                    style={{ marginTop: 16 }}
                    label={'Test3'}
                    placeholder={'Test3'}
                    value={password}
                    onChangeText={setPassword}
                    maxLength={19}
                    rightComponent={
                      <TouchableOpacity
                        style={{ padding: 10 }}
                        onPress={() => Alert.alert('Hello')}
                      >
                        <ChevronRightSvg size={14} />
                      </TouchableOpacity>
                    }
                  />
                </Padding>
              )
            }
          </Obx>
          <Obx>
            {() =>
              state.screen === 'Expanded' && (
                <Padding horizontal={15} vertical={15}>
                  <Row>
                    <View style={styles.cell} />
                    <Expanded
                      style={{ backgroundColor: 'blue', ...Layout.center }}
                    >
                      <AppText color={Colors.white}>Expanded</AppText>
                    </Expanded>
                  </Row>
                  <Padding top={10} />
                  <Row>
                    <Expanded
                      style={{
                        ...styles.cell,
                        backgroundColor: 'red',
                        ...Layout.center,
                      }}
                    >
                      <AppText color={Colors.white}>Expanded</AppText>
                    </Expanded>
                    <Expanded
                      style={{ backgroundColor: 'blue', ...Layout.center }}
                    >
                      <AppText color={Colors.white}>Expanded</AppText>
                    </Expanded>
                  </Row>
                </Padding>
              )
            }
          </Obx>
          <Obx>
            {() =>
              state.screen === 'Container' && (
                <Padding padding={15}>
                  <TouchableOpacity
                    onPress={() => state.setSafeAreaColor(randomRgb())}
                  >
                    <Padding vertical={10}>
                      <Obx>
                        {() => (
                          <AppText>
                            Update SafeAreaColor: {state.safeAreaColor}
                          </AppText>
                        )}
                      </Obx>
                    </Padding>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => state.setDisableBottom(!state.disableBottom)}
                  >
                    <Padding vertical={10}>
                      <Obx>
                        {() => (
                          <AppText>
                            Toggle disableBottom: {`${state.disableBottom}`}
                          </AppText>
                        )}
                      </Obx>
                    </Padding>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => state.setDisableTop(!state.disableTop)}
                  >
                    <Padding vertical={10}>
                      <Obx>
                        {() => (
                          <AppText>
                            Toggle disableTop: {`${state.disableTop}`}
                          </AppText>
                        )}
                      </Obx>
                    </Padding>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      state.setStatusBar(
                        state.statusBar === 'light-content'
                          ? 'dark-content'
                          : 'light-content',
                      )
                    }
                  >
                    <Padding vertical={10}>
                      <Obx>
                        {() => (
                          <AppText>
                            Update statusBarProps.barStyle:
                            {`${state.statusBar}`}
                          </AppText>
                        )}
                      </Obx>
                    </Padding>
                  </TouchableOpacity>
                </Padding>
              )
            }
          </Obx>
          <Obx>
            {() =>
              state.screen === 'Row' && (
                <Padding padding={15}>
                  <TouchableOpacity
                    onPress={() => {
                      if (state.justify === 'flex-start') {
                        state.setJustify('center')
                      } else if (state.justify === 'center') {
                        state.setJustify('flex-end')
                      } else if (state.justify === 'flex-end') {
                        state.setJustify('space-between')
                      } else if (state.justify === 'space-between') {
                        state.setJustify('space-around')
                      } else if (state.justify === 'space-around') {
                        state.setJustify('flex-start')
                      } else {
                        state.setJustify('flex-start')
                      }
                    }}
                  >
                    <Obx>
                      {() => <AppText>Update justify={state.justify}</AppText>}
                    </Obx>
                  </TouchableOpacity>
                  <Padding top={15} />
                  <TouchableOpacity
                    onPress={() => {
                      if (state.align === 'flex-start') {
                        state.setAlign('center')
                      } else if (state.align === 'center') {
                        state.setAlign('flex-end')
                      } else if (state.align === 'flex-end') {
                        state.setAlign('baseline')
                      } else if (state.align === 'baseline') {
                        state.setAlign('stretch')
                      } else {
                        state.setAlign('flex-start')
                      }
                    }}
                  >
                    <Obx>
                      {() => <AppText>Update align={state.align}</AppText>}
                    </Obx>
                  </TouchableOpacity>
                  <Padding top={15} />
                  <TouchableOpacity
                    onPress={() => state.setReverse(!state.reverse)}
                  >
                    <Obx>
                      {() => (
                        <AppText>Update reverse={`${state.reverse}`}</AppText>
                      )}
                    </Obx>
                  </TouchableOpacity>
                  <Padding top={15} />
                  <Obx>
                    {() => (
                      <Row
                        reverse={state.reverse}
                        align={state.align}
                        justify={state.justify}
                      >
                        <View style={styles.cell} />
                        <View
                          style={[styles.cell, { height: 25, width: 25 }]}
                        />
                        <View
                          style={[styles.cell, { height: 75, width: 75 }]}
                        />
                      </Row>
                    )}
                  </Obx>
                </Padding>
              )
            }
          </Obx>
          <Obx>
            {() =>
              state.screen === 'AppText' && (
                <Padding padding={15}>
                  <TouchableOpacity
                    onPress={() =>
                      state.setFontSize(
                        state.fontSize >= 40 ? 14 : state.fontSize + 2,
                      )
                    }
                  >
                    <Obx>
                      {() => <AppText>Font Size: {state.fontSize}</AppText>}
                    </Obx>
                  </TouchableOpacity>
                  <Padding top={15} />
                  <TouchableOpacity onPress={() => state.setColor(randomRgb())}>
                    <Obx>{() => <AppText>Color: {state.color}</AppText>}</Obx>
                  </TouchableOpacity>
                  <Padding top={15} />
                  <TouchableOpacity
                    onPress={() =>
                      state.setLineHeight(
                        state.lineHeight >= 40 ? 14 : state.lineHeight + 2,
                      )
                    }
                  >
                    <Obx>
                      {() => <AppText>lineHeight: {state.lineHeight}</AppText>}
                    </Obx>
                  </TouchableOpacity>
                  <Padding top={15} />
                  <TouchableOpacity
                    onPress={() =>
                      state.setTextAlign(
                        state.textAlign === 'left'
                          ? 'center'
                          : state.textAlign === 'center'
                          ? 'right'
                          : 'left',
                      )
                    }
                  >
                    <Obx>
                      {() => <AppText>Align: {state.textAlign}</AppText>}
                    </Obx>
                  </TouchableOpacity>
                  <Padding top={15} />
                  <Obx>
                    {() => (
                      <AppText
                        color={state.color}
                        fontSize={state.fontSize}
                        align={state.textAlign}
                        lineHeight={state.lineHeight}
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed vitae nisl euismod, aliquam nisl sit amet, aliquam
                        nisl. Sed vitae nisl euismod, aliquam nisl sit amet,
                        aliquam nisl. Sed vitae nisl euismod, aliquam nisl sit
                        amet, aliquam nisl. Sed Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Sed vitae nisl euismod,
                        aliquam nisl sit amet, aliquam nisl. Sed vitae nisl
                        euismod, aliquam nisl sit amet, aliquam nisl. Sed vitae
                        nisl euismod, aliquam nisl sit amet, aliquam nisl. Sed
                      </AppText>
                    )}
                  </Obx>
                </Padding>
              )
            }
          </Obx>
          <Obx>
            {() =>
              state.screen === 'Dropdown' && (
                <Padding style={Layout.fill} padding={15}>
                  <Obx>
                    {() => (
                      <Dropdown
                        defaultValue={'item1'}
                        style={[Layout.fullWidth, styles.dropdown]}
                        open={state.open}
                        setOpen={op => state.setOpen(op)}
                        value={state.value}
                        setValue={callback => {
                          state.setValue(callback(state.value))
                        }}
                        items={[
                          { label: 'Item 1', value: 'item1' },
                          { label: 'Item 2', value: 'item2' },
                        ]}
                      />
                    )}
                  </Obx>
                </Padding>
              )
            }
          </Obx>
          <Obx>
            {() =>
              state.screen === 'LoadingIndicator' && (
                <Padding padding={15}>
                  <AppText>
                    Default{' '}
                    <AppText
                      onPress={() => state.setOverlay(true)}
                      color={'red'}
                    >
                      Overlay
                    </AppText>
                  </AppText>
                  <Padding top={10} />
                  <Obx>
                    {() => (
                      <LoadingIndicator
                        backdropPressToClose
                        onRequestClose={() => state.setOverlay(false)}
                        size={36}
                        color="red"
                        overlay={state.overlay}
                      />
                    )}
                  </Obx>
                  <Padding top={15} />
                  <AppText>9CubeGrid</AppText>
                  <Padding top={10} />
                  <LoadingIndicator type="9CubeGrid" color="red" />
                  <Padding top={15} />
                  <AppText>Arc</AppText>
                  <Padding top={10} />
                  <LoadingIndicator type="Arc" color="red" />
                  <Padding top={15} />
                  <AppText>ArcAlt</AppText>
                  <Padding top={10} />
                  <LoadingIndicator type="ArcAlt" color="red" />
                  <Padding top={15} />
                  <AppText>Bounce</AppText>
                  <Padding top={10} />
                  <LoadingIndicator type="Bounce" color="red" />
                  <Padding top={15} />
                  <AppText>ChasingDots</AppText>
                  <Padding top={10} />
                  <LoadingIndicator type="ChasingDots" color="red" />
                  <Padding top={15} />
                  <AppText>Wave</AppText>
                  <Padding top={10} />
                  <LoadingIndicator type="Wave" color="red" />
                  <Padding top={15} />
                  <AppText>Plane</AppText>
                  <Padding top={10} />
                  <LoadingIndicator type="Plane" color="red" />
                  <Padding top={15} />
                </Padding>
              )
            }
          </Obx>
          <Obx>
            {() =>
              state.screen === 'AppButton' && (
                <Padding padding={15}>
                  <AppButton
                    onPress={() => Alert.alert('Hello')}
                    opacity={0.5}
                    text="Next"
                  />
                  <Padding top={10} />
                  <AppButton
                    disabled
                    text="Disabled"
                    disabledBackgroundColor="#333"
                  />
                  <Padding top={10} />
                  <AppButton
                    onPress={() => Alert.alert('Hello')}
                    backgroundColor="orange"
                    text="Button with Icon"
                    iconDirection="left"
                    icon={Images.icMiniGame}
                    disabledBackgroundColor="#333"
                  />
                  <Padding top={10} />
                  <AppButton
                    onPress={() => Alert.alert('Hello')}
                    text="Button with Svg Icon"
                    spaceBetween={5}
                    svgIcon={<ChevronRightSvg size={13} color={Colors.white} />}
                    disabledBackgroundColor="#333"
                  />
                  <Padding top={10} />
                  <AppButton
                    onPress={() => Alert.alert('Hello')}
                    text="Button with Svg Icon & LinearGradient"
                    colors={['#4c669f', '#3b5998', '#192f6a']}
                    spaceBetween={5}
                    svgIcon={<ChevronRightSvg size={13} color={Colors.white} />}
                    disabledBackgroundColor="#333"
                  />
                  <Padding top={10} />
                  <AppButton
                    onPress={() => Alert.alert('Hello')}
                    style={styles.customAppButton}
                    text="Button with LinearGradient & Custom Style"
                    colors={['#4c669f', '#3b5998', '#192f6a']}
                    spaceBetween={5}
                    svgIcon={<ChevronRightSvg size={13} color={Colors.white} />}
                    disabledBackgroundColor="#333"
                  />
                </Padding>
              )
            }
          </Obx>
          <Obx>
            {() =>
              state.screen === 'Position' && (
                <Padding padding={15}>
                  <TouchableOpacity
                    onPress={() => state.setTop(Math.random() * 500)}
                  >
                    <Obx>{() => <AppText>Top: {state.top}</AppText>}</Obx>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => state.setLeft(Math.random() * screenWidth)}
                  >
                    <Obx>{() => <AppText>Left: {state.left}</AppText>}</Obx>
                  </TouchableOpacity>
                  <Obx>
                    {() => (
                      <View>
                        <Position
                          style={styles.cube}
                          top={state.top}
                          left={state.left}
                        />
                      </View>
                    )}
                  </Obx>
                </Padding>
              )
            }
          </Obx>
          <Obx>
            {() =>
              state.screen === 'Carousel' && (
                <View>
                  <Carousel
                    autoplay
                    ref={carouselRef}
                    data={[
                      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
                      'https://media.istockphoto.com/photos/wild-grass-in-the-mountains-at-sunset-picture-id1322277517?k=20&m=1322277517&s=612x612&w=0&h=ZdxT3aGDGLsOAn3mILBS6FD7ARonKRHe_EKKa-V-Hws=',
                      'https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=',
                      'https://us.123rf.com/450wm/kotenko/kotenko1106/kotenko110600006/9824398-summer-landscape-in-mountains-with-the-sun.jpg?ver=6',
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzF--y90nRLQO1-jWASJ81YnMrO_xn4i7bJnvx2pBNcVaG3zALzIAoHBHNRTZiVT4l_b8&usqp=CAU',
                    ]}
                    showIndicator
                    indicatorItemStyle={{
                      backgroundColor: 'red',
                      width: 40,
                    }}
                    indicatorType="dot"
                    renderItem={renderPageItem}
                    keyExtractor={(_, index) => index.toString()}
                  />
                </View>
              )
            }
          </Obx>
          <Obx>
            {() =>
              state.screen === 'AppDiaLog' && (
                <Padding padding={15}>
                  <AppButton
                    text="Show Dialog"
                    onPress={() =>
                      diaLogStore.showDiaLog({
                        title: 'Title',
                        message: 'This is a message',
                        backdropForClosing: true,
                      })
                    }
                  />
                </Padding>
              )
            }
          </Obx>
          <Obx>
            {() =>
              state.screen === 'AppGradientText' && (
                <Padding padding={15}>
                  <AppGradientText colors={['red', 'blue']} fontSize={50}>
                    This is sample text for AppGradientText
                  </AppGradientText>
                </Padding>
              )
            }
          </Obx>
          <Obx>
            {() =>
              state.screen === 'AppImage' && (
                <Padding padding={15}>
                  <AppImage
                    style={{
                      width: screenWidth - ResponsiveWidth(30),
                      height: 300,
                    }}
                    source={{
                      uri: 'https://wallpaper.dog/large/20533651.jpg',
                    }}
                  />
                </Padding>
              )
            }
          </Obx>
          <Obx>
            {() =>
              state.screen === 'AppBottomSheet' && (
                <Padding padding={15}>
                  <AppButton
                    text="Show Bottom Sheet"
                    onPress={() => sheetRef.current.snapTo(1)}
                  />
                  <Padding top={10} />
                  <AppButton
                    text="snapTo(0)"
                    onPress={() => sheetRef.current.snapTo(0)}
                  />
                  <Padding top={10} />
                  <AppButton
                    text="snapTo(1)"
                    onPress={() => sheetRef.current.snapTo(1)}
                  />
                  <Padding top={10} />
                  <AppButton
                    text="snapTo(600,isPosition=true)"
                    onPress={() => sheetRef.current.snapTo(600, true)}
                  />
                  <Padding top={10} />
                  <AppButton
                    backgroundColor="blue"
                    text="Close Bottom Sheet"
                    onPress={() => sheetRef.current.close()}
                  />
                  <AppBottomSheet
                    backgroundStyle={{ backgroundColor: Colors.gray }}
                    enablePanDownToClose
                    ref={sheetRef}
                    snapPoints={['25%', '50%']}
                  >
                    <View style={styles.bottomSheet}>
                      <AppText>Bottom Sheet</AppText>
                    </View>
                  </AppBottomSheet>
                </Padding>
              )
            }
          </Obx>
          <Obx>
            {() =>
              state.screen === 'CollapseMenu' && (
                <Padding padding={15}>
                  <CollapseMenu
                    data={[
                      {
                        label: 'Menu 1',
                        value: 'Menu 1',
                      },
                      {
                        label: 'Menu 2',
                        value: 'Menu 2',
                      },
                      {
                        label: 'Menu 3',
                        value: 'Menu 3',
                      },
                      {
                        label: 'Menu 4',
                        value: 'Menu 4',
                      },
                    ]}
                    title="Collapse Menu"
                    value="Menu 1"
                    onPress={value => console.log(value)}
                  />
                  <CollapseMenu
                    data={[
                      {
                        label: 'Menu 1',
                        value: 'Menu 1',
                      },
                      {
                        label: 'Menu 2',
                        value: 'Menu 2',
                      },
                      {
                        label: 'Menu 3',
                        value: 'Menu 3',
                      },
                      {
                        label: 'Menu 4',
                        value: 'Menu 4',
                      },
                    ]}
                    title="Collapse Menu with maxHeight"
                    maxHeight={100}
                    value="Menu 1"
                    onPress={value => console.log(value)}
                  />
                </Padding>
              )
            }
          </Obx>
          <Obx>
            {() =>
              state.screen === 'AnimatedNumber' && (
                <Padding padding={15}>
                  <Obx>
                    {() => (
                      <>
                        <AnimatedNumber startValue={90} value={state.money} />
                        <AnimatedNumber color="red" value={state.money} />
                        <AnimatedNumber
                          color="blue"
                          fontSize={50}
                          value={state.money}
                        />
                      </>
                    )}
                  </Obx>
                  <AppButton
                    text="animate"
                    onPress={() =>
                      state.setMoney(Math.round(Math.random() * 100000000))
                    }
                  />
                </Padding>
              )
            }
          </Obx>
          <Obx>
            {() =>
              state.screen === 'AppCalendar' && (
                <Padding padding={16}>
                  <AppCalendar
                    fromDate={new Date()}
                    onSelectDate={(from, to) => {
                      Alert.alert(JSON.stringify({ from, to }))
                      calendarSheetRef.current?.close()
                    }}
                  />
                  <Padding top={16} />
                  <AppButton
                    onPress={() => calendarSheetRef.current?.snapTo(0)}
                    text="Open BottomSheet Calendar"
                  />
                  <AppBottomSheet snapPoints={['50%']} ref={calendarSheetRef}>
                    <Padding padding={16}>
                      <AppCalendar
                        onSelectDate={(from, to) => {
                          Alert.alert(JSON.stringify({ from, to }))
                          calendarSheetRef.current?.close()
                        }}
                      />
                    </Padding>
                  </AppBottomSheet>
                </Padding>
              )
            }
          </Obx>
          <Obx>
            {() =>
              state.screen === 'AppTooltip' && (
                <Padding padding={16}>
                  <Row justify="space-between">
                    <AppTooltip
                      open={state.tooltipOpen}
                      onClose={() => state.setTooltipOpen(false)}
                      onPress={() => state.setTooltipOpen(true)}
                      content="This is sample tooltip"
                      direction="topRight"
                      animation="slide"
                      svgIcon={<TooltipSvg />}
                    >
                      <AppText>Tap here to show topRight tool tip</AppText>
                    </AppTooltip>
                    <AppTooltip
                      open={state.tooltipOpen}
                      onClose={() => state.setTooltipOpen(false)}
                      onPress={() => state.setTooltipOpen(true)}
                      content="This is sample tooltip"
                      direction="topLeft"
                      animation="slide"
                      svgIcon={<TooltipSvg />}
                    />
                  </Row>
                  <Padding top={30} />
                  <Row justify="space-between">
                    <AppTooltip
                      open={state.tooltipOpen}
                      onClose={() => state.setTooltipOpen(false)}
                      onPress={() => state.setTooltipOpen(true)}
                      content="This is sample tooltip"
                      direction="bottomRight"
                      animation="slide"
                      svgIcon={<TooltipSvg />}
                    >
                      <AppText>Tap here to show bottom Right tool tip</AppText>
                    </AppTooltip>
                    <AppTooltip
                      open={state.tooltipOpen}
                      onClose={() => state.setTooltipOpen(false)}
                      onPress={() => state.setTooltipOpen(true)}
                      content="This is sample tooltip"
                      direction="bottomLeft"
                      animation="slide"
                      svgIcon={<TooltipSvg />}
                    />
                  </Row>
                </Padding>
              )
            }
          </Obx>
          <Obx>
            {() =>
              state.screen === 'Accordion' && (
                <Padding padding={16}>
                  <Accordion maxHeight={100} ref={accordionRef} title="AAA">
                    <Padding top={12}>
                      <AppText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lo Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.Lo Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.Lo Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.Lo Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit.Lo Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit.Lo Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit.Lo Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit.Lo
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.Lo Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit.
                      </AppText>
                    </Padding>
                  </Accordion>
                  <Padding top={12} />
                  <AppButton
                    text="Expand"
                    onPress={() => {
                      accordionRef.current?.expand()
                    }}
                  />
                  <Padding top={12} />
                  <AppButton
                    text="Collapse"
                    onPress={() => {
                      accordionRef.current?.collapse()
                    }}
                  />
                  <Padding top={12} />
                  <AppButton
                    text="Scroll to end"
                    onPress={() => {
                      accordionRef.current?.scrollTo({
                        y: 999,
                        animated: true,
                      })
                    }}
                  />
                </Padding>
              )
            }
          </Obx>
          <Obx>
            {() =>
              state.screen === 'FlashList' && (
                <FlashList
                  numColumns={2}
                  data={new Array(9999).fill(0)}
                  estimatedItemSize={300}
                  renderItem={({ index }) => (
                    <View style={{ height: 300 }}>
                      <AppImage
                        style={{
                          height: 300,
                          width: 200,
                        }}
                        source={{ uri: 'https://picsum.photos/200/300' }}
                      />
                    </View>
                  )}
                  keyExtractor={(_, index) => index.toString()}
                />
              )
            }
          </Obx>
          <Obx>
            {() =>
              state.screen === 'Box' && (
                <>
                  <Box
                    alignSelf="center"
                    radius={25}
                    center
                    height={100}
                    width={100}
                    backgroundColor="blue"
                  >
                    <AppText align="center" color={Colors.white}>
                      Custom Box View
                    </AppText>
                  </Box>
                  <Box
                    row
                    align="center"
                    justify="space-between"
                    width="100%"
                    backgroundColor="red"
                    marginTop={20}
                    height={100}
                    paddingHorizontal={15}
                  >
                    <Box size={50} backgroundColor="green" />
                    <Box size={50} backgroundColor="blue" />
                    <Box size={50} backgroundColor="yellow" />
                  </Box>
                  <Box fill backgroundColor="violet" center>
                    <AppText color={Colors.white} fontSize="h1">
                      Fill box
                    </AppText>
                  </Box>
                </>
              )
            }
          </Obx>
          <Obx>
            {() =>
              state.screen === 'AppWebView' && (
                <AppWebView
                  style={Layout.fill}
                  source={{
                    uri: 'https://m.youtube.com/',
                  }}
                  enableCookies
                  cookie={{
                    value: '',
                  }}
                />
              )
            }
          </Obx>
          <Obx>
            {() =>
              state.screen === 'Pagination' && (
                <Pagination
                  currentPage={state.currentPage}
                  maxPage={10}
                  onChange={page => state.setCurrentPage(page)}
                />
              )
            }
          </Obx>
        </Container>
      )}
    </Obx>
  )
}

export default ExampleScreen

const styles = XStyleSheet.create({
  rootView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  componentItem: {
    height: 40,
    paddingHorizontal: 15,
  },
  draggble: { position: 'absolute', top: 45, left: 15 },
  draggableButton: { height: 50, width: 50, backgroundColor: 'red' },
  cell: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#838A92',
    zIndex: 10,
    backgroundColor: Colors.white,
  },
  customAppButton: {
    height: ResponsiveHeight(50),
    width: screenWidth - ResponsiveWidth(30),
    ...Layout.center,
    skipResponsive: true,
  },
  cube: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
  },
  pageItem: {
    width: screenWidth,
    skipResponsive: true,
    height: ResponsiveHeight(300),
  },
})
