import './LinksListWithImages.scss';

export const LinksListWithImages = (props) => {
    return (
        <div className={'links-container'}>
            { props.data.map(product => {
                const el = <picture>
                    <img src={product.imgUrl} />
                </picture>;
                return (
                    <a className={'link'} href={`/moje-zlacze/${product.couplings[0]}`}>
                        <div className={'bg-change'} />
                        {product.imgUrl ? el : ''}
                        <p className={'link-name'} >
                            {product.couplings[1]}
                        </p>
                    </a>
                )
            })}
        </div>
    );
}