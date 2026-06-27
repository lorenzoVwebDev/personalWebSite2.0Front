import './Error500.scss';

export default function Error500() {

  return (
    <div id="servererror">
      <div className="notfound">
        <div className="notfound-404">
          <h3>Oops! Internal server error</h3>
          <h1><span>5</span><span>0</span><span>0</span></h1>
        </div>
        <h2>we are sorry, something went wrong on our end</h2>
      </div>
    </div>
  )
}
