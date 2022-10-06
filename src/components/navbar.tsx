import { Translations } from '../translations/english';

export const NavbarComponent = (): JSX.Element => {
    return (
        <nav className='navbar bg-primary'>
            <div className='text-white text-center w-100'>
                <h4 className='my-3'>
                    {Translations.header}
                </h4>
            </div>
        </nav>
    );
}