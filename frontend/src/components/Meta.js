import React from 'react'
import {Helmet} from 'react-helmet'

const Meta = ({title, description, keywords}) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />            
        </Helmet>
    )
}

Meta.defaultProps = {
    title: 'Welcome to Wilderness Apothecary',
    description: 'Organic Herbal Products',
    keywords: 'herbs, bulk herbs, dried herbs', 
}

export default Meta
