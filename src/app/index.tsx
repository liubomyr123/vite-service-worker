import { Routing } from './navigation'
import { withProviders } from './providers'
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles/index.scss';

const App = () => {
  return <Routing />
};

export default withProviders(App);
