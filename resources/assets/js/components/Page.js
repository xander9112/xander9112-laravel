import React, {PropTypes, Component} from 'react'
import RaisedButton from 'material-ui/RaisedButton'

export default class Page extends Component {
    constructor (props) {
        super(props);
    }

    onYearBtnClick (e) {
        this.props.getPhotos(+e.target.textContent);
    }

    render () {
        const { year, photos, fetching, error } = this.props;
        const years = [ 2016, 2015, 2014, 2013, 2012, 2011, 2010 ];

        return (
            <div>
                {years.map((item, index) =>
                    <RaisedButton label={item} key={index} onTouchTap={::this.onYearBtnClick}/>
                )}

                <h3>{year} год [{photos.length}]</h3>
                { error ? <p className="error">{error}</p> : "" }
                {
                    fetching ?
                        <p>Загрузка...</p>
                        :
                        <div className="row">
                            {photos.map((entry, index) => (
                                <div className="col s3" key={index}>
                                    <img src={entry.src_big} width="270" height="270"/>
                                </div>
                            ))}
                        </div>
                }
            </div>
        );
    }
}

Page.propTypes = {
    year:      PropTypes.number.isRequired,
    photos:    PropTypes.array.isRequired,
    getPhotos: PropTypes.func.isRequired,
    error:     PropTypes.string.isRequired
};
