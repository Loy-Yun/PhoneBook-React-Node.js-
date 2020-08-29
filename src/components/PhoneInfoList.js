import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';
import _ from 'lodash';

class PhoneInfoList extends Component {
    static defaultProps = {
        list: [],
        onRemove: () => console.warn('onRemove not defined'),
    };

    render() {
        _.uniqBy({} ,'1');
        const { data, onRemove } = this.props;
        const list = data.map(
            info => (<PhoneInfo
                key = {info.id}
                info={info}
                onRemove={onRemove}
             />)
            // info => (<div style={{
            //     border: '1px solid black',
            //     padding: '8px',
            //     margin: '8px',
            // }}>
            //     {info.name}, {info.phone}
            // </div>)
        );
        return (
            <div>
                {list}
            </div>
        );
    }
}
export default PhoneInfoList;