import '../../styles.scss';
import './NavbarComponent.scss';
import seLogo from '../../assets/logos/se-logo.png';
import iconFb from '../../assets/icons/icon-facebook.png';
import iconIg from '../../assets/icons/icon-instagram.png';
import iconYt from '../../assets/icons/icon-youtube.png';
import iconMail from '../../assets/icons/icon-mail.png';

export const NavbarComponent = () => {
    return (
        <nav className={'nav'}>
            <div className={'nav--top'}>
                <div>
                    <picture className={'se-logo'}>
                        <img src={seLogo} alt={'SE Europe logo'} />
                    </picture>
                </div>
                <div className={'icons-container'}>
                    <div className={'socials'}>
                        <picture className={'icon'}>
                            <img src={iconFb} alt={'Facebook icon'} />
                        </picture>
                        <picture className={'icon'}>
                            <img src={iconIg} alt={'Instagram icon'} />
                        </picture>
                        <picture className={'icon'}>
                            <img src={iconYt} alt={'YouTube icon'} />
                        </picture>
                        <picture className={'icon'}>
                            <img src={iconMail} alt={'Email icon'} />
                        </picture>
                    </div>
                    <div className={'sidebar-toggle'}>
                        <picture>
                            <img src="/public/se-logo.png" />
                        </picture>
                    </div>
                </div>
            </div>
            <div className={'nav--bottom'}>

            </div>
        </nav>
    );
}