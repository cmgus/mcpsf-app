import { Card } from 'antd'
import { Link } from 'react-router-dom'

import routes from '../routes'

const Home = _ => {
  return (
    <div className="options">
      <Link to={routes.MESA_DE_PARTES}>
        <Card hoverable>
          Mesa de Partes
        </Card>
      </Link>
      <Card hoverable>
        Rentas
      </Card>
      <Card hoverable>
        Trámite Docunentario
      </Card>
    </div>
  )
}


export default Home
