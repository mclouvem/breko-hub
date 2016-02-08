import DocumentMeta from 'react-document-meta'
import HeadNavigation from 'app/components/containers/HeadNavigation'
import RouterHandler from 'app/utils/RouterHandler.react'
import img from 'assets/avatar.jpeg'
import style from './App.module.scss'
import './App.css'

import { connect } from 'react-redux'
import mapStateToProps from '../utils/mapStateToProps'

const log = {
  app: debug('App.es'),
}

const metaData = {
  title: 'Breko Hub',
  description: 'Breko Hub, a minimal boilerplate for building universal react applications',
  meta: {
    charSet: 'utf-8',
    name: {
      keywords: 'react,redux,react-router,koa,universal,babel,es7,hmr,webpack',
    },
  },
}

@connect(mapStateToProps, null)
class App extends React.Component {
  render() {
    log.app('render')
    return (
      <main className={style.app}>
        <DocumentMeta {...metaData} />
        <HeadNavigation />
        <img src={img} alt='me' width='70' />
        <h1>The Apple</h1>
        Page: <RouterHandler { ...this.props } />
      </main>
    )
  }
}

export default App
