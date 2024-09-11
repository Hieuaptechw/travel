import {memo} from 'react';
import Footer from '../Footer';
import Header from '../Header';

const MasterLayout = ({children,...props}) => {
    return (
        <div {...props} className=''>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
};

export default memo(MasterLayout);