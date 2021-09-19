import React from 'react'
import PropTypes from 'prop-types'


const Rating = ({value, text, color}) => {
    return (
        <div className='rating'>
            <span>
                <i style={{color}} className={
                    value >= 1 
                        ? 'fas fa-star' 
                        : value >= 0.5 
                        ? 'fas fa-star-half-alt' 
                        : 'far fa-star'
                    }
                ></i>
            </span>
            <span>
                <i style={{color}} className={
                    value >= 2 
                        ? 'fas fa-star' 
                        : value >= 1.5 
                        ? 'fas fa-star-half-alt' 
                        : 'far fa-star'
                    }
                ></i>
            </span>
            <span>
                <i style={{color}} className={
                    value >= 3 
                        ? 'fas fa-star' 
                        : value >= 2.5 
                        ? 'fas fa-star-half-alt' 
                        : 'far fa-star'
                    }
                ></i>
            </span>
            <span>
                <i style={{color}} className={
                    value >= 4 
                        ? 'fas fa-star' 
                        : value >= 3.5 
                        ? 'fas fa-star-half-alt' 
                        : 'far fa-star'
                    }
                ></i>
            </span>
            <span>
                <i style={{color}} className={
                    value >= 5 
                        ? 'fas fa-star' 
                        : value >= 4.5 
                        ? 'fas fa-star-half-alt' 
                        : 'far fa-star'
                    }
                ></i>
            </span>
            <span>{text && text}</span>
        </div>
    )
}

//Utilized default props to select star color instead of going to index.css, and then also used propTypes to set the values to numbers or strings, and required settings
Rating.defaultProps = {
    color: '#f8e825',
}

Rating.propTypes = {
    value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
}

export default Rating
