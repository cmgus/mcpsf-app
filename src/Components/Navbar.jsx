import { Typography } from 'antd';
import { Link } from 'react-router-dom'
import routes from '../routes'

const { Text } = Typography
const Navbar = _ => {
  return (
    <>
      <Link to={routes.HOME}>
        <Text strong>MCPSF</Text>
      </Link>
    </>
  )
}

export default Navbar
