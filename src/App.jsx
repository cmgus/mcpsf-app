import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import './App.css'

import Home from './Components/Home'
import Navbar from './Components/Navbar'
import MesaDePartes from './Components/MesaDePartes'

import routes from './routes'

const { Header, Content } = Layout

const MCPSF = _ => {
  return (
    <Router>
      <Layout>
        <Header style={{ backgroundColor: '#141414'}}>
          <Navbar />
        </Header>
        <Content style={{ padding: '0 50px', marginTop: '3rem' }}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path={routes.MESA_DE_PARTES} component={MesaDePartes} />
          </Switch>
        </Content>
      </Layout>
    </Router>
  )
}

export default MCPSF
