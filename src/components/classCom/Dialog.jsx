import React from 'react';
import PropTypes from 'prop-types';
function Dialog(props) {
    let { title, content, children } = props
    children = React.Children.toArray(children)
    let footer = children.filter(item => item.props.slot == 'footer')
    return (
        <div className="dialog" style={{ width: 400, borderWidth: 1, borderStyle: 'solid', borderColor: 'red' }}>
            <h1 className="header">
                {title}
            </h1>
            <div className="content" style={{ color: 'red', backgroundColor: 'blue' }}>
                {content}
            </div>
            {
                children.length > 0 ?
                    <div className="foot" style={{ marginTop: 20 }}>
                        {footer}
                    </div> : null
            }

        </div>
    )
}
Dialog.defaultProps = {
    title: "温馨提示"
}
Dialog.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}
export default Dialog
