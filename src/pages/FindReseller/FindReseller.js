import './FindReseller.scss';

export const FindReseller = () => {
    return (
        <main>
            <section className={'section-contrains tables-page'}>
                <div className={'heading-container left-orientation'}>
                    <h1 className={'page-title'}>ZNAJDŹ RESELLERA</h1>
                    <br />
                    <h2 className={'section-subtitle section-subtitle--secondary-color'}>ZNAJDŹ RESELLERA</h2>
                    <br />
                    <p className={'paragraph paragraph--medium'}>
                        Użyj poniższego formularza lub wyślij e-mail na adres post@se-europe.com, który zawiera poniższe informacje.
                        Po otrzymaniu Twojego zapytania odpowiemy na podany adres e-mail, przesyłając dane kontaktowe dealera.
                    </p>
                    <br />
                    <p className={'paragraph paragraph--medium'}>
                        Dziękujemy za Twoje zapytanie!
                    </p>


                    <form className={'form'}>
                        <div className={'field-container'}>
                            <label htmlFor={'first_name'}>Imię*:</label>
                            <input required={true} type="text" id={'first_name'} placeholder={'Wpisz imię'}/>
                        </div>
                        <div className={'field-container'}>
                            <label htmlFor={'last_name'}>Nazwisko*:</label>
                            <input type="text" id={'last_name'} placeholder={'Wpisz nazwisko'}/>
                        </div>
                        <div className={'field-container'}>
                            <label htmlFor={'company'}>Firma:</label>
                            <input type="text" id={'company'} placeholder={'Wpisz firmę'}/>
                        </div>
                        <div className={'field-container'}>
                            <label htmlFor={'address'}>Adres:</label>
                            <input type="text" id={'address'} placeholder={'Wpisz adres'}/>
                        </div>
                        <div className={'field-container'}>
                            <label htmlFor={'postal_code'}>Kod pocztowy:</label>
                            <input type="text" id={'postal_code'} placeholder={'Wpisz kod pocztowy'}/>
                        </div>
                        <div className={'field-container'}>
                            <label htmlFor={'country'}>Kraj:</label>
                            <input type="text" id={'country'} placeholder={'Wpisz kraj'}/>
                        </div>
                        <div className={'field-container'}>
                            <label htmlFor={'email'}>Email*:</label>
                            <input required={true} type="text" id={'email'} placeholder={'Wpisz email'}/>
                        </div>
                        <div className={'field-container'}>
                            <label htmlFor={'phone_number'}>Numer telefonu*:</label>
                            <input required={true} type="number" id={'phone_number'} placeholder={'Wpisz numer telefonu'}/>
                        </div>
                        <div className={'field-container'}>
                            <label htmlFor={'machine_type'}>Typ maszyny:</label>
                            <input type="text" id={'machine_type'} placeholder={'Wpisz typ maszyny'}/>
                        </div>
                        <div className={'field-container'}>
                            <label htmlFor={'products'}>Zainteresowanie produktami:</label>
                            <input type="text" id={'products'} placeholder={'Wpisz, jakimi produktami się interesujesz'}/>
                        </div>
                        <div className={'field-container'}>
                            <label htmlFor={'message'}>Wiadomość*:</label>
                            <textarea required={true} placeholder={'Wpisz wiadomość'} id={'message'} className={'message-input'}/>
                        </div>
                        <input type="submit"/>
                    </form>
                </div>
            </section>
        </main>
    );
}