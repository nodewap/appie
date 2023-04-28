import Layout from '../layout';
import Header from './header';
import Applicant from './applicant';
import Highlight from './highlight';

const Home = ()=>{
    return (
        <Layout>
            <Header />
            <Applicant />
            <Highlight />
        </Layout>
    )
}

export default Home;