import './ErrorBoundary.scss';

export function Error500() {

    return (
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h3>Oops! Page not found</h3>
            <h1><span>5</span><span>0</span><span>0</span></h1>
          </div>
          <h2>we are sorry, server error</h2>
        </div>
      </div>
    )
}