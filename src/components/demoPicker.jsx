import React from 'react'

const DemoPicker = ({
  configMockChooser: { WINE_DEMO, COCKTAIL_DEMO, title },
  handleMockChange,
  demo
}) => (
  <form className="ui form">
    <div className="field">
      <h3 className="ui header">
        {title}
      </h3>
    </div>
    <div className="fields inline">
      <div className="field">
        <div className="ui checked radio checkbox" role="presentation" onClick={handleMockChange(WINE_DEMO)}>
          <input
            type="radio"
            checked={demo === WINE_DEMO}
            className="hidden"
            readOnly
            tabIndex="0"
          />
          <label>Wine search (Offline)</label>
        </div>
      </div>
      <div className="field">
        <div className="ui checked radio checkbox" role="presentation" onClick={handleMockChange(COCKTAIL_DEMO)}>
          <input
            type="radio"
            checked={demo === COCKTAIL_DEMO}
            className="hidden"
            readOnly
            tabIndex="0"
          />
          <label>Cocktail search (Online)</label>
        </div>
      </div>
    </div>
  </form>
)

export default DemoPicker
