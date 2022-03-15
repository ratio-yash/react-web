import React from 'react';

const ContactCard = (props) => {
    console.log(props);
    const {name, email} = props.contact;
    return(
        <div className="item">
            <div classname="content">
                <div className="header">
                    {name}
                </div>
                <div>
                    {email}
                </div>
                <i className="trash alternate outline icon"></i>
            </div>

        </div>
    );
}

export default ContactCard;