import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import * as actions from '@actions/user'
import { ButtonItem } from '@components'
import { CDN } from '@constants/api'
import './user-login.scss'

const LOGO = `${CDN}/a7ba557fde54270c71656222c7837396.png`

/* TODO 由于 RN 的 app.js 中 initPxTransform 执行顺序关系，不能在这里用到 Taro.pxTransform */
// const BUTTON = {
//   marginTop: Taro.pxTransform(30)
// }

@connect(state => state.user, actions)
class UserLogin extends Component {
  config = {
    navigationBarTitleText: '登录'
  }

  handleClick = (type) => {
    if (type !== 'email') {
      Taro.showToast({
        title: '目前只实现了邮箱登录~',
        icon: 'none'
      })
      return
    }

    Taro.navigateTo({
      url: '/pages/user-login-email/user-login-email'
    })
  }

  render () {
    const BUTTON = {
      marginTop: Taro.pxTransform(30)
    }

    return (
      <View className='user-login'>
        <View className='user-login__logo'>
          <Image src={LOGO} className='user-login__logo-img' />
        </View>
        <ButtonItem
          type='primary'
          text='微信登录'
          onClick={this.handleClick.bind(this, 'wechat')}
        />
        <ButtonItem
          plain
          text='邮箱账号登录'
          compStyle={BUTTON}
          onClick={this.handleClick.bind(this, 'email')}
        />
        <ButtonItem
          plain
          text='手机号登录'
          compStyle={BUTTON}
          onClick={this.handleClick.bind(this, 'telephone')}
        />
        <View className='user-login__reg'>
          <Text className='user-login__reg-txt'>
            {'手机号快捷注册>'}
          </Text>
        </View>
      </View>
    )
  }
}

export default UserLogin
