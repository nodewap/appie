import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import Homepage from './cmp/home';
import AboutUs from './cmp/about-us';
import Blog from './cmp/blog';
import Contact from './cmp/contact';
import NotFound from './cmp/not-found';
import 'animate.css';

const App = ()=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;