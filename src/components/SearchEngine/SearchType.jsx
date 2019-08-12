import React from 'react'

const SearchType = ({
  title,
  setter,
  value,
  options
}) => (
  <form className="ui form">
    <div className="field">
      <h3 className="ui header">
        {title}
      </h3>
    </div>
    <div className="fields inline" key="radio-group">
      {options.map(option => (
        <div className="field" key={option}>
          <div
            className="ui checked radio checkbox"
            role="presentation"
            onClick={(setter(option))}
          >
            <input
              type="radio"
              checked={value === option}
              className="hidden"
              readOnly
              tabIndex="0"
            />
            <label>{option}</label>
          </div>
        </div>
      ))}
    </div>
  </form>
)

export default SearchType
