import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

export function ScrollToTop({ history }: any) {
    useEffect(() => {
        window.scrollTo(0, 0);
        const unlisten = history.listen(() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unlisten();
        }
    }, []);

    return (null);
}

export default withRouter(ScrollToTop);